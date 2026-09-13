export const profile = {
  firstName: "Alan",
  lastName: "Miranda",
  fullName: "Alan Miranda",
  role: "Desenvolvedor Full Stack",
  location: "Cotia, São Paulo",
  yearsOfExperience: 3,
  linkedin: "https://www.linkedin.com/in/alanmirandasilva/",
  github: "https://github.com/AlAnNuB",
  email: "alan@alannub.com.br",
  cv: "/CV.pdf",
  headline: "Desenvolvedor Full Stack baseado em Cotia",
  heroIntro:
    "Olá, eu sou Alan Miranda — desenvolvedor full stack focado em interfaces modernas, micro frontends e experiências que conectam produto e pessoas.",
};

export const aboutParagraphs = [
  "Desenvolvedor Full Stack Pleno com 3 anos de experiência em desenvolvimento web, especializado em JavaScript/TypeScript (React e Node.js) e experiência com Java/Spring Boot. Atuo com arquiteturas de Micro Frontends utilizando Module Federation, desenvolvendo aplicações modulares, performáticas e escaláveis com React, Vite, Webpack, Next.js e Styled Components. Experiência em Design Systems com Storybook, APIs RESTful, microsserviços, PostgreSQL, Prisma e TypeORM. Também atuo com Docker, CI/CD, Azure DevOps e Linux. Aplico SOLID, Clean Code, Clean Architecture, Design Patterns e testes automatizados com Vitest, Jest e Playwright.",
];

export const navItems = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "trabalhos", label: "Trabalhos" },
  { id: "servicos", label: "Serviços" },
  { id: "experiencia", label: "Experiência" },
  { id: "contato", label: "Contato" },
] as const;

export const services = [
  {
    title: "Front-end",
    description:
      "React, TypeScript e Vite com componentes reutilizáveis e atenção ao Figma.",
  },
  {
    title: "Micro frontends",
    description:
      "Arquitetura com Module Federation para escalar produtos entre times e domínios.",
  },
  {
    title: "Back-end",
    description:
      "APIs com Node.js, Express e PostgreSQL, com foco em estabilidade e performance.",
  },
  {
    title: "Produto em time",
    description:
      "Código limpo, colaboração ágil e interfaces consistentes em Sass e Styled Components.",
  },
];

export const stats = [
  { value: "3+", label: "Anos de experiência" },
  { value: "1+", label: "Anos de desenvolvimento de micro frontends" },
  { value: "14", label: "Tecnologias no dia a dia" },
];

export const experiences = [
  {
    kind: "Experiência",
    title: "Analista de Sistemas PL",
    place: "Grupo GPS",
    period: "Atual · Cotia, SP",
    description:
      "Desenvolvimento front-end em arquitetura de Micro Frontends com Module Federation. React, TypeScript e Vite, com interfaces reutilizáveis em Sass e Styled Components, integração entre domínios e colaboração com times multidisciplinares.",
  },
  {
    kind: "Experiência",
    title: "Desenvolvedor de software",
    place: "Grupo GPS",
    period: "Portal GPS360",
    description:
      "Gestão e evolução do GPS360, plataforma de documentação jurídica usada por mais de 15 mil usuários. Soluções com JavaScript, Node.js, Express e PostgreSQL, com atenção a disponibilidade e performance.",
  },
  {
    kind: "Educação",
    title: "Análise e Desenvolvimento de Sistemas",
    place: "Estácio de Sá",
    period: "2022 — 2025 · Cotia, SP",
    description:
      "Graduação técnologica em Análise e Desenvolvimento de Sistemas, com foco em desenvolvimento web, arquitetura de software e metodologias ágeis.",
  },
  {
    kind: "Educação",
    title: "Desenvolvedor Full Stack Júnior",
    place: "Recode Pro",
    period: "2021 — 2022 · 540 horas",
    description:
      "Formação full stack com HTML, CSS, JavaScript, React, Java, Spring Boot, bancos de dados, Git, métodos ágeis e fundamentos de cloud, testes e segurança.",
  },
];

export const works = [
  {
    title: "Portfólio pessoal",
    description: "Site com React, TypeScript e Styled Components.",
    href: "https://github.com/AlAnNuB/portfolio",
    tag: "Front-end",
  },
  {
    title: "Clone TabNews",
    description: "Estudo do tabnews.com.br no curso.dev.",
    href: "https://github.com/AlAnNuB/clone-tabnews",
    tag: "Full stack",
  },
];
