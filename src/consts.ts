// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

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
    target: "none",
  },
  {
    title: "Sobre nosotros",
    link: "#",
    target: "none",
    submenu: [
      {
        title: "Nosotros",
        link: "/nosotros",
        target: "none",
      },
      {
        title: "Misión y visión",
        link: "/mision-vision",
        target: "none",
      },
    ],
  },
  {
    title: "intranet",
    link: "#",
    target: "none",
    submenu: [
      {
        title: "ADI",
        link: "https://mundoadi.net/pregrado/",
        target: "blank",
      },
      {
        title: "nómina",
        link: "http://nomina.unefm.edu.ve/",
        target: "blank",
      },
      {
        title: "fondo editorial",
        link: "https://unefm.net/editorial/",
        target: "blank",
      },
      {
        title: "control de estudios",
        link: "http://estudiantes.unefm.edu.ve/",
        target: "blank",
      },
    ],
  },
  {
    title: "Noticias",
    link: "/noticias",
    target: "none",
  },
  {
    title: "Avisos",
    link: "/avisos",
    target: "none",
  },
];
