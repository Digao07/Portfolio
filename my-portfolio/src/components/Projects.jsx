const Projects = () => {
    const projects = [
      {
        title: "Portfólio Pessoal",
        description: "Uma página de portfólio desenvolvida com React, Vite e Tailwind CSS.",
        link: "https://github.com/Digao07/Portfolio",
      },
      {
        title: "Aplicativo de Gerenciamento de Tarefas",
        description: "Esta aplicação web permite que os usuários gerenciem suas tarefas diárias, frontend foi feito com React e utilizando Chakra UI, Axios, React Router e Context API ",
        link: "https://github.com/Digao07/Desafio-tecnico",
      },
      {
        title: "Front-end de um Homepage de um banco feito com React",
        description: "FrontEnd da um Homepage de um banco, incluindo login e autenticação, TDD. Deploy realizado na Netfly, feito com React, Typescript, HTML e CSS",
        link: "https://github.com/seu-usuario/ecommerce-site",
      },
    ];
  
    return (
      <section className="bg-white p-8 text-center">
        <h2 className="text-3xl font-semibold mb-6">Projetos Recentes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Ver Projeto
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  