import portfolioImg01 from "../data/images/portfolio-01.jpg";
import portfolioImg02 from "../data/images/portfolio-02.jpg";
import portfolioImg03 from "../data/images/portfolio-03.jpg";
import portfolioImg04 from "../data/images/portfolio-04.jpg";
import portfolioImg05 from "../data/images/portfolio-05.jpg";
import portfolioImg06 from "../data/images/portfolio-06.jpg";
import portfolioImg07 from "../data/images/portfolio-07.jpg";
import portfolioImg08 from "../data/images/portfolio-08.jpg";

const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "Diseño-Web",
    title: "Portafolio",
    description:
      "Bienvenido, En este espacio, te invito a explorar una muestra de mis proyectos y trabajos destacados, que reflejan mi compromiso con la excelencia y la creatividad. ¡Acompáñame en este viaje a través de mi portafolio web y descubre cómo juntos podemos hacer realidad grandes ideas!",
    technologies: ["React", "Tailwind css", "remixicon", "gh-page"],
    siteUrl: "https://github.com/Jucamhc/portafolio",
  },
  {
    id: "02",
    imgUrl: portfolioImg04,
    category: "Backend",
    title: "api-platzi-profile",
    description:
      "Consulto el sitio web y por medio de expresiones regulares extraigo para cada perfil la data que se encuentra debajo en forma de array",
    technologies: ["cors", "express", "form-data", "https", "nocache", "node-fetch", "Node" ],
    siteUrl: "#",
  },
  {
    id: "03",
    imgUrl: portfolioImg02,
    category: "Diseño-Web",
    title: "Ecommerce React",
    description:
      "Este proyecto tiene como objetivo validar mis habilidades en el desarrollo de una plataforma de comercio electrónico. He utilizado React como framework de desarrollo para crear una aplicación que permite la gestión de productos y la realización de compras.",
    technologies: ["React", "Tailwind css", "react-router-dom", "gh-pages"],
    siteUrl: "https://github.com/Jucamhc/ecommerce-react",
  },
  {
    id: "04",
    imgUrl: portfolioImg05,
    category: "Backend",
    title: "api-infojobs",
    description:
      "Creo mi propia API para el hackaton de Infojobs, extraigo del sitio web las provincias, ciudades, trabajos, categorias de trabajos, educacion por trabajo, jornada laboral, tipos de contratos y paises",
    technologies: ["cors", "express", "https", "https-proxy-agent", "node-fetch"],
    siteUrl: "https://github.com/Jucamhc/api-infojobs-hackathon",
  },
  {
    id: "05",
    imgUrl: portfolioImg03,
    category: "Diseño-Web",
    title: "frond-api-plazi REACT",
    description:
      "Realizo una api con lainformacion pucliba que tiene platzi en su sitio web y la trasformo para mostrarla de una manera creativa, la api tambien puede ser consumida por otras personas",
    technologies: ["React", "Tailwind css", "react-icons"],
    siteUrl: "https://github.com/Jucamhc/frond-api-plazi",
  },

  {
    id: "06",
    imgUrl: portfolioImg06,
    category: "Backend",
    title: "What-Chat",
    description:
      "Utilizando la libreria de Whatsapp utilize Whispper y Bard conecte todos estas tenologias para poder consultar por voz y por texto a Bard ",
    technologies: ["Javascript", "Python", "bard-ai","Whispper IA", "dotenv", "fluent-ffmpeg", "qrcode-terminal", "whatsapp-web.js"],
    siteUrl: "https://github.com/Jucamhc/whatChat/tree/main",
  },
  {
    id: "07",
    imgUrl: portfolioImg07,
    category: "Diseño-Web",
    title: "Potencia tu Búsqueda Laboral y Analiza el Mercado de Forma Precisa, sin inteligencia artificial",
    description:
      "La plataforma ha sido diseñada considerando el inicio de sesión del perfil de Juan Camilo. Al buscar empleo, recibirás un feedback personalizado sobre las ofertas en el campo de Informática-Telecomunicaciones, con especial enfoque en el desarrollo de software",
    technologies: ["React", "Tailwind css", "next", "chart.js", "recharts", "react-icons"],
    siteUrl: "https://github.com/Jucamhc/frond-infojobs",
  },
  {
    id: "08",
    imgUrl: portfolioImg08,
    category: "Diseño-Web",
    title: "shopping-cart",
    description:
      "Shopping cart consumiendo la API de un servicio que nos da 20 articulos como demostracion",
    technologies: ["React", "Boostrap css", "@mui/material", "gh-pages"],
    siteUrl: "https://github.com/Jucamhc/shopping-cart",
  },
];

export default portfolios;