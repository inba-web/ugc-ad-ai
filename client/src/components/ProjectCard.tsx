import { useNavigate } from "react-router-dom";
import type { Project } from "../types";
import { useState } from "react";

const ProjectCard = ({
  gen,
  setGenerations,
  forCommunity = false,
}: {
  gen: Project;
  setGenerations: React.Dispatch<React.SetStateAction<Project[]>>;
  forCommunity?: boolean;
}) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div key={gen.id} className="mb-4 break-inside-avoid">
      <div className="bg-white/5 border border-white/10 rounded-xl overflow-xl overflow-hidden hover:border-white/20 transition group">
        {/* preview */}
        <div>

        </div>

        {/* details */}
        <div>
            
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
