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
  },
  {
    title: "Sobre nosotros",
    link: "#",
    submenu: [
      {
        title: "Nosotros",
        link: "/nosotros",
      },
      {
        title: "Misión y visión",
        link: "/mision-vision",
      },
    ],
  },
  {
    title: "intranet",
    link: "#",
    submenu: [
      {
        title: "ADI",
        link: "https://mundoadi.net/pregrado/",
      },
      {
        title: "nómina",
        link: "http://nomina.unefm.edu.ve/",
      },
      {
        title: "fondo editorial",
        link: "https://unefm.net/editorial/",
      },
      {
        title: "control de estudios",
        link: "http://estudiantes.unefm.edu.ve/",
      },
    ],
  },
  {
    title: "Noticias",
    link: "/noticias",
  },
  {
    title: "Avisos",
    link: "/avisos",
  },
];
