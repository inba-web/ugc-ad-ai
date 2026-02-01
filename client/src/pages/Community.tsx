import { useEffect, useState } from "react";
import type { Project } from "../types";
import { Loader2Icon } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import { useAuth } from "@clerk/clerk-react";
import api from "../config/axios";
import toast from "react-hot-toast";

const Community = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const { getToken } = useAuth();

  const fetchProjects = async () => {
    try {
      const token = await getToken();
      const { data } = await api.get("/api/project/publish", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setProjects(data?.projects || []);
    } catch (error: any) {
      console.error("Community fetch error:", error);
      toast.error("Failed to fetch community projects");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2Icon className="size-7 animate-spin text-indigo-400" />
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white p-6 m-12 md:p-12 pt-24">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">Community</h1>
          <p className="text-gray-400">
            See what others are creating with UGC.ai
          </p>
        </header>

        {projects.length === 0 ? (
          <p className="text-center text-gray-500">
            No community projects yet.
          </p>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {projects.map((project) => (
              <ProjectCard key={project.id} setGenerations={setProjects} gen={project} forCommunity />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Community;
