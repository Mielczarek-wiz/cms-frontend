export const mainUrl = "http://localhost:8080";

const routes = {
  auth: "auth",
  users: "user",
  roles: "user/role",
  generals: "general/secured",
  pages: "page/secured",
  parentpages: "page/secured/parent-pages",
  sliders: "slider/secured",
  sections: "section/secured",
  types: "section/type/secured",
  infoboxes: "section/infobox/secured",
  menu: "page/exposed/menu",
  page: "page/exposed",
  slider: "slider/exposed",
  header: "general/exposed/header",
  infoboxclient: "section/infobox/exposed",
  socials: "section/infobox/exposed/socials",
  footer: "general/exposed/footer",
};

export const getRoute = (route) => {
  const lowerRoute = route.toLowerCase();
  return routes[lowerRoute];
};
