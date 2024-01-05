import { TableDash } from "@/components/dashboardSide/TableDash";

export default function Slider() {
  const header = ["ID", "Text", "Title", "User", "Hidden"];
  const rows = [
    {
      id: "1",
      text: "text1",
      title: "title1",
      user: "User1",
      hidden: true,
    },
    {
      id: "2",
      text: "text2",
      title: "title2",
      user: "User2",
      hidden: true,
    },
    {
      id: "3",
      text: "text3",
      title: "title3",
      user: "User3",
      hidden: false,
    },
    {
      id: "4",
      text: "text4",
      title: "title4",
      user: "User4",
      hidden: true,
    },
    {
      id: "44",
      text: "text4",
      title: "title4",
      user: "User5",
      hidden: true,
    },
    {
      id: "5",
      text: "text5",
      title: "title5",
      user: "User6",
      hidden: false,
    },
    {
      id: "6",
      text: "text6",
      title: "title6",
      user: "User7",
      hidden: true,
    },
    {
      id: "7",
      text: "text7",
      title: "title7",
      user: "User8",
      hidden: true,
    },
    {
      id: "8",
      text: "text8",
      title: "title8",
      user: "User9",
      hidden: false,
    },
  ];
  return <TableDash header={header} rows={rows} form="Sliders" />;
}
