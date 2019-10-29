module.exports = {
  siteTitle: "Alec Chen | Software Engineer",
  siteDescription:
    "Alec Chen is a software engineer based in Vancouver, BC who focuses on writing clean, maintainable and efficient code",
  siteKeywords:
    "Alec Chen, Alec, Chen, alecppt, software engineer, software developer",
  siteUrl: "https://helloalec.com",
  siteLanguage: "en_US",
  googleAnalyticsID: "UA-150772447-1",
  //   googleVerification: "DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk",
  name: "Alec Chen",
  location: "Vancouver, BC",
  email: "cca169@sfu.com",
  github: "https://github.com/alecppt",
  twitterHandle: "@alecppt",
  socialMedia: [
    {
      name: "Github",
      url: "https://github.com/alecppt",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/alecppt",
    },
    // {
    //   name: "Codepen",
    //   url: "https://codepen.io/bchiang7",
    // },
    {
      name: "Instagram",
      url: "https://www.instagram.com/alecppt",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/alecppt",
    },
  ],

  navLinks: [
    {
      name: "About",
      url: "/#about",
    },
    {
      name: "Experience",
      url: "/#jobs",
    },
    {
      name: "projects",
      url: "/#projects",
    },
    {
      name: "Contact",
      url: "/#contact",
    },
  ],

  navHeight: 100,
  greenColor: "#64ffda263238",
  navyColor: "#0a192f",
  darkNavyColor: "#020c1b",

  srConfig: (delay = 200) => ({
    origin: "bottom",
    distance: "20px",
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    mobile: true,
    reset: false,
    useDelay: "always",
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
}
