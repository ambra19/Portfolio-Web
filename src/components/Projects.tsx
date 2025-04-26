
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const projects = [
  {
    title: "Mapy",
    description: "Visual path-finding tool that computes optimal routes across randomly generated terrain maps using the A* algorithm, with support for walking and driving modes",
    tags: ["Python", "Flask", "JavaScript", "HTML", "CSS"],
    link: "https://mapy.onrender.com/",
  },
  {
    title: "GreenCabin",
    description: "Biodiversity level monitoring tool based on PDOK Kadastral data using Folium for interactive mapping",
    tags: ["Python", "Flask", "PDOK Kadastral Data", "Folium", "JavaScript", "Tailwind CSS"],
    link: "https://greencabin.onrender.com",
  },
  {
    title: "Work in progress ...",
    description: "Stock price prediction using LSTM",
    tags: ["Python", "TensorFlow"],
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
              <a href={project.link} target="_blank" rel="noopener noreferrer">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
