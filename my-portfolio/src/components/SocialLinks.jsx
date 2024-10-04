const SocialLinks = () => {
    const socialLinks = [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rodrigo-barros07/",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-.966 0-1.5-.711-1.5-1.5 0-.853.554-1.5 1.444-1.5.944 0 1.5.647 1.5 1.5 0 .789-.537 1.5-1.444 1.5zm13.5 11.5h-3v-5.472c0-1.352-.025-3.088-1.879-3.088-1.878 0-2.121 1.464-2.121 2.981v5.579h-3v-10h2.879v1.387h.041c.402-.762 1.38-1.563 2.843-1.563 3.039 0 3.606 2.001 3.606 4.604v5.572z" />
          </svg>
        ),
      },
      {
        name: "GitHub",
        url: "https://github.com/Digao07",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577v-2.253c-3.338.725-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.834 2.809 1.304 3.495.998.108-.775.418-1.305.76-1.605-2.665-.305-5.467-1.333-5.467-5.93 0-1.31.469-2.381 1.236-3.221-.123-.303-.536-1.527.117-3.179 0 0 1.008-.322 3.3 1.23.96-.267 1.987-.399 3.008-.403 1.02.004 2.048.136 3.008.403 2.292-1.552 3.3-1.23 3.3-1.23.653 1.652.241 2.876.118 3.179.77.84 1.236 1.911 1.236 3.221 0 4.607-2.807 5.623-5.479 5.921.43.371.813 1.102.813 2.222v3.293c0 .319.218.694.825.576 4.765-1.59 8.199-6.086 8.199-11.387 0-6.627-5.373-12-12-12z" />
          </svg>
        ),
      },
    ];
  
    return (
      <section className="bg-gray-50 p-8 text-center">
        <h2 className="text-3xl font-semibold mb-6">Minhas Redes Sociais</h2>
        <div className="flex justify-center space-x-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
              aria-label={`Link para ${link.name}`}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </section>
    );
  };
  
  export default SocialLinks;
  