import { useEffect, useState } from "react"
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
      const { data } = await api.get('/api/project/publish', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setProjects(data.projects);
    } catch (error: any) {
      console.error(error);
      toast.error("Failed to fetch community projects");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProjects();
  }, [])

  return loading ? (
    <div className="flex items-center justify-center min-h-screen">
      <Loader2Icon className="size-7 animate-spin text-indigo-400" />
    </div>
  ) : (
    <div className="min-h-screen text-white p-6 md:p-12 my-28">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">Community</h1>
          <p>See what others are creating with UGC.ai</p>
        </header>

        {/* projects list */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {projects.map((project) => (
            <div>
              <ProjectCard key={project.id} gen={project} forCommunity={true} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Community