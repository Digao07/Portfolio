const Skills = () => {
    const skills = [
      "React",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML & CSS",
      "Git & GitHub",
      "Redux / Context API",
      "Responsividade",
    ];
  
    return (
      <section className="bg-gray-50 p-8 text-center">
        <h2 className="text-3xl font-semibold mb-6">Minhas Habilidades</h2>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="bg-blue-100 text-blue-800 py-2 px-4 rounded shadow-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default Skills;
  