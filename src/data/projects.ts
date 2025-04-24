export interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Peetzaah",
    description: "Peetzaah is an innovative web platform designed for pizza lovers, offering a curated collection of recipes, pizzeria recommendations, pizza-making tutorials, and community engagement features.",
    image: "https://res.cloudinary.com/dfjlxm0ib/image/upload/v1745327529/zujjt39sbowcxpcfv09w.png",
    category: "web",
    technologies: ["React",  "Express", "PostgreSQL"],
    githubUrl: "https://github.com/rajanarender18/reactproject_peedzah",
  },
  {
    id: 2,
    title: "Tripify",
    description: "Tripify is an innovative web platform designed to simplify and enhance travel planning. It provides personalized recommendations, realtime travel updates, budget planning tools, and seamless booking options.",
    image: "https://res.cloudinary.com/dfjlxm0ib/image/upload/v1745326720/svyuwvcj5xtx7tiomkld.png",
    category: "web",
    technologies: ["Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/rajanarender18/Backend_project_Tripify",
  },
  {
    id: 3,
    title: "Gadgetpedia",
    description: "platform designed for purchasing and browsing electronic gadgets.",
    image: "https://res.cloudinary.com/dfjlxm0ib/image/upload/v1745348582/k3clykpnahvp0jxov89a.png",
    category: "Backend",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    githubUrl: "https://github.com/rajanarender18/backend_php_project_Tourism_management_system"
  },
];