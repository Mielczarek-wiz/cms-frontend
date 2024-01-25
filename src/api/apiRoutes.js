export const mainUrl = "http://localhost:8080";

const routes = {
  auth: "auth",
  users: "user",
  roles: "user/role",
  generals: "general/secured",
  pages: "page/secured",
  sliders: "slider/secured",
  sections: "section/secured",
  types: "section/type/secured",
  infoboxes: "section/infobox/secured",
  menu: "page/exposed/menu",
};

export const getRoute = (route) => {
  const lowerRoute = route.toLowerCase();
  return routes[lowerRoute];
};
