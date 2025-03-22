// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import { Target } from "lucide-react";

export const SITE_TITLE = "UNEFM";
export const SITE_DESCRIPTION =
  "Universidad Nacional Experimental Francisco de Miranda";
export const socialMedia = {
  instagrma: "https://www.instagram.com/unefmoficial/",
  facebook: "https://www.facebook.com/profile.php?id=100032983283852",
  x: "https://x.com/DidaUNEFMofici1",
};

export const menu = [
  {
    title: "Inicio",
    link: "/",
    target: "_self",
  },
  {
    title: "Sobre nosotros",
    link: "#",
    target: "_self",
    submenu: [
      {
        title: "Nosotros",
        link: "/nosotros",
        target: "_self",
      },
      {
        title: "Misión y visión",
        link: "/mision-vision",
        target: "_self",
      },
    ],
  },
  {
    title: "intranet",
    link: "#",
    target: "_self",
    submenu: [
      {
        title: "ADI",
        link: "https://mundoadi.net/pregrado/",
        target: "_blank",
      },
      {
        title: "nómina",
        link: "http://nomina.unefm.edu.ve/",
        target: "_blank",
      },
      {
        title: "fondo editorial",
        link: "https://unefm.net/editorial/",
        target: "_blank",
      },
      {
        title: "control de estudios",
        link: "http://estudiantes.unefm.edu.ve/",
        target: "_blank",
      },
      {
        title: "dirección de planificacion",
        link: "http://planificacion.unefm.edu.ve/",
        target: "_blank",
      },
    ],
  },
  {
    title: "Noticias",
    link: "/noticias",
    target: "_self",
  },
  {
    title: "Avisos",
    link: "/avisos",
    target: "_self",
  },
];
