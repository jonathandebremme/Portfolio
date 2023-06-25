const socialMediaLinks = {
  github: "https://github.com/jonathandebremme",
  linkedin: "https://www.linkedin.com/in/jonathandebremme/",
};

const skillLinks = {
  html: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  css: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  javascript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  react: "https://react.dev/",
  nodejs: "https://nodejs.org/en",
  express: "https://expressjs.com/",
  tailwind: "https://tailwindcss.com/",
  nextjs: "https://nextjs.org/",
};

const menuVariants = {
  logoVariant: {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.25,
      },
    },
    closed: { y: -300, opacity: 0 },
  },

  homeVariant: {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.5,
      },
    },
    closed: { x: -100, opacity: 0 },
  },

  aboutVariant: {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.75,
      },
    },
    closed: { x: -100, opacity: 0 },
  },

  portfolioVariant: {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 1,
      },
    },
    closed: { x: -100, opacity: 0 },
  },

  contactVariant: {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 1.25,
      },
    },
    closed: { x: -100, opacity: 0 },
  },

  socialsVariant: {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 1.5,
      },
    },
    closed: { y: 300, opacity: 0 },
  },
};

export { socialMediaLinks, skillLinks, menuVariants };
