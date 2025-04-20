
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const projects = [
  {
    title: "Project One",
    description: "A full-stack web application built with React and Node.js",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    title: "Project Two",
    description: "Mobile-first responsive website with modern UI/UX",
    tags: ["React", "Tailwind CSS", "TypeScript"],
    link: "#",
  },
  {
    title: "Project Three",
    description: "Real-time chat application using WebSocket",
    tags: ["Socket.io", "Express", "React"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
