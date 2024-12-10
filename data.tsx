import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Instagram, Phone, Mail, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Mail size={30} strokeWidth={1} />,
        src: "mailto:amielbautista0@gmail.com",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/amiel-bautista-04a042338/",
    },
    {
        id: 3,
        logo: <Twitter size={30} strokeWidth={1} />,
        src: "https://x.com/bautista4myel?t=qNd-JRQe9vcGPLwpoOXfDg&s=09",
    },
    {
        id: 4,
        logo: <Instagram size={30} strokeWidth={1} />,
        src: "https://www.instagram.com/bautista4myel?utm_source=qr",
    },
    {
        id: 5,
        logo: <Phone size={30} strokeWidth={1} />,
        src: "https://wa.me/qr/EWFMVULQYKCXC1",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Estudiante de Ingeniería en Software",
        subtitle: "Universidad Politécnica de Pachuca",
        description: "Actualmente, soy estudiante de Ingeniería en Software, donde sigo perfeccionando mis habilidades en desarrollo de software y explorando nuevas tecnologías para ofrecer soluciones innovadoras.",
        date: "Act",
    },
    {
        id: 2,
        title: "Técnico en programación",
        subtitle: "Cbta 67",
        description: "Me gradué de la preparatoria como Técnico en Programación, adquiriendo una sólida base en desarrollo de software y tecnologías de la información.",
        date: "Ago 2023",
    },
    {
        id: 3,
        title: "Desarrollador Full Stack",
        subtitle: "Parque Acuático Tepathe",
        description: "Me desempeñe como desarrollador full stack, encargándome del mantenimiento y las actualizaciones de la página web de Parque Acuático Tepathe. En este rol, optimicé la funcionalidad del sitio y aseguré que la experiencia del usuario fuera siempre fluida y eficiente.",
        date: "Sep 2022",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 2,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 10,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 20,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Pagina web",
        image: "/image-1.jpg",
        urlGithub: "https://github.com/AmielBautista/Pagina-web.git",
    },
    {
        id: 2,
        title: "Pagina web",
        image: "/image-2.jpg",
        urlGithub: "https://github.com/AmielBautista/WebPage.git",
    },
    {
        id: 3,
        title: "Red Social (Grafos)",
        image: "/image-3.jpg",
        urlGithub: "https://github.com/banox786/GRAFO3_01/tree/ae7f1c3a66a213b7afa416ac312154163286bd22/EQUIPO3",
    },
    {
        id: 4,
        title: "Sistema de RH",
        image: "/image-4.jpg",
        urlGithub: "https://github.com/owenchapa1010/Equipo-4.git",
    },
];
