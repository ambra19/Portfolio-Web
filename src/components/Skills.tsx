
const skills = [
  "Full-Stack",
  "Machine Learning",
  "Python",
  "C++",
  "C",
  "Tensorflow",
  "Scikit-learn",
  "JavaScript",
  "Git",
  "Docker",
  "REST APIs",
  "SQL",
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg border hover:border-blue-500 transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
