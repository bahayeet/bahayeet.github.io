interface ProjectCardProps {
    title: string;
    description: string;
    githubUrl?: string;
    websiteUrl?: string;
    imageUrl?: string;
    techStack: string[];
    reverse?: boolean;
    isGithub?: boolean;
}

export default function ProjectCard({
    title,
    description,
    techStack,
}: ProjectCardProps) {
    return (
        <div className="flex flex-col w-full mb-6 p-4 border-l-4 border-accent/30 hover:border-accent transition-colors">
            <h2 className="text-xl md:text-2xl font-bold font-poppins text-cream mb-3">{title}</h2>
            
            <p className="text-sm md:text-base text-cream/85 mb-4 leading-relaxed">{description}</p>

            <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                    <span key={index} className="text-xs bg-accent/20 text-accent border border-accent/30 px-3 py-1 rounded-full font-medium">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}
