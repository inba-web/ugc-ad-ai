import { Request, Response } from "express";
import * as Sentry from "@sentry/node";

export const createProject = async (req: Request, res: Response) => {
    let tempProjectId: string;
    const {userId} = req.auth();
    let isCreditDeducted = false;

    const {name = 'New Project', aspectRatio, userPrompt, productName, productDescription, targetLength = 5} = req.body;

    const image: any = req.files;
    try {
        
    } catch (error:any) {
        Sentry.captureException(error);
        res.status(500).json({message: error.message || error.code })
    }
};

export const createVideo = async (req: Request, res: Response) => {
    try {
        
    } catch (error:any) {
        Sentry.captureException(error);
        res.status(500).json({message: error.message || error.code })
    }
};

export const getAllPublishedProjects = async (req: Request, res: Response) => {
    try {
        
    } catch (error:any) {
        Sentry.captureException(error);
        res.status(500).json({message: error.message || error.code })
    }
};

export const deleteProject = async (req: Request, res: Response) => {
    try {
        
    } catch (error:any) {
        Sentry.captureException(error);
        res.status(500).json({message: error.message || error.code })
    }
};
