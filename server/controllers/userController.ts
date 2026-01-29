import { Request, Response } from "express";
import * as Sentry from "@sentry/node";
import { prisma } from "../configs/prisma.js";

const getAuthenticatedUserId = (req: Request, res: Response): string | null => {
  const auth = req.auth?.();
  if (!auth?.userId) {
    res.status(401).json({ message: "Unauthorized" });
    return null;
  }
  return auth.userId;
};

export const getUserCredits = async (req: Request, res: Response) => {
  try {
    const userId = getAuthenticatedUserId(req, res);
    if (!userId) return;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { credits: true },
    });

    return res.json({ credits: user?.credits ?? 0 });
  } catch (error: any) {
    Sentry.captureException(error);
    return res.status(500).json({ message: error.message });
  }
};

export const getAllProjects = async (req: Request, res: Response) => {
  try {
    const userId = getAuthenticatedUserId(req, res);
    if (!userId) return;

    const projects = await prisma.project.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });

    return res.json({ projects });
  } catch (error: any) {
    Sentry.captureException(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getProjectById = async (req: Request, res: Response) => {
  try {
    const userId = getAuthenticatedUserId(req, res);
    if (!userId) return;

    const { projectId } = req.params;
    const normalizedProjectId = Array.isArray(projectId)
      ? projectId[0]
      : projectId;

    const project = await prisma.project.findFirst({
      where: {
        id: normalizedProjectId,
        userId: userId,
      },
    });

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    return res.json({ project });
  } catch (error: any) {
    Sentry.captureException(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const toggleProjectPublic = async (req: Request, res: Response) => {
  try {
    const userId = getAuthenticatedUserId(req, res);
    if (!userId) return;

    const { projectId } = req.params;
    const normalizedProjectId = Array.isArray(projectId)
      ? projectId[0]
      : projectId;

    const project = await prisma.project.findFirst({
      where: {
        id: normalizedProjectId,
        userId: userId,
      },
    });

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    if (!project.generatedImage && !project.generatedVideo) {
      return res.status(400).json({ message: "Image or video not generated" });
    }

    const updatedProject = await prisma.project.update({
      where: { id: normalizedProjectId },
      data: { isPublished: !project.isPublished },
      select: { isPublished: true },
    });

    return res.json({ isPublished: updatedProject.isPublished });
  } catch (error: any) {
    Sentry.captureException(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
