export const navigation = [
  { name: "Generals", href: "/dashboard/general", showForMod: true },
  { name: "Pages", href: "/dashboard/page", showForMod: true },
  { name: "Sliders", href: "/dashboard/slider", showForMod: true },
  { name: "Sections", href: "/dashboard/section", showForMod: true },
  { name: "Infoboxes", href: "/dashboard/infobox", showForMod: true },
  { name: "Types", href: "/dashboard/type", showForMod: false },
  { name: "Users", href: "/dashboard", showForMod: false },
  { name: "Roles", href: "/dashboard/role", showForMod: false },
];

export const getNavigation = (name) => {
  return navigation.find((nav) => nav.name === name);
};
