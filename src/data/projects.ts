import { Project } from "../types/project";

const inventia: Project = {
    title: "Inventia",
    description:
        "Sistema fullstack para automatizar pedidos por WhatsApp.",
    technologies: [
        "React",
        "Java",
        "Spring Boot",
        "MySQL",
        "TailwindCSS",
        "Baileys"
    ],
    githubUrl: "",
    demoUrl: ""
};

const clinicaJesus: Project = {
    title: "Clinica Jesus MS",
    description:
        "Arquitectura distribuida para gestión integral de citas médicas implementada con Spring Boot, Eureka Server, API Gateway, JWT y React.",
    technologies: [
        "React",
        "Java",
        "Spring Boot",
        "MySQL",
        "TailwindCSS",
        "Eureka"
    ],
    githubUrl: "",
    demoUrl: ""
};

export const projects: Project[] = [
    inventia,
    clinicaJesus
];