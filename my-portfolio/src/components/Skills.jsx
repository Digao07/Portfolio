import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaPython } from "react-icons/fa";

const Skills = () => {
  const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "Tailwind CSS", icon: <FaCss3Alt /> },
    { name: "HTML & CSS", icon: <FaHtml5 /> },
    { name: "Git & GitHub", icon: <FaGitAlt /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <FaNodeJs /> },
    { name: "Python", icon: <FaPython /> },

  ];
  
    return (
      <section className="bg-gray-50 p-8 text-center">
        <h2 className="text-3xl font-semibold mb-6">Minhas Habilidades</h2>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="flex items-center space-x-2 bg-blue-100 text-blue-800 py-2 px-4 rounded shadow-sm"
            >
              {skill.icon}
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default Skills;
  