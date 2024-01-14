export const mainUrl = "http://localhost:8080";

const routes = {
  auth: "auth",
  users: "user",
  roles: "user/role",
  generals: "general",
  pages: "page",
  sliders: "slider",
  sections: "section",
  types: "section/type",
  infoboxes: "section/infobox"
};

export const getRoute = (route) => {
  const lowerRoute = route.toLowerCase();
  return routes[lowerRoute];
};
