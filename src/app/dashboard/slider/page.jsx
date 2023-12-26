import { TableDash } from "@/components/dashboardSide/TableDash";

export default function Slider() {
  const header = ["ID", "Text", "Title", "Img", "User", "Hidden"];
  const rows = [
    {
      id: "1",
      text: "text1",
      title: "title1",
      img: "imgref1",
      user: "User1",
      isVisible: true,
    },
    {
      id: "2",
      text: "text2",
      title: "title2",
      img: "imgref2",
      user: "User2",
      isVisible: true,
    },
    {
      id: "3",
      text: "text3",
      title: "title3",
      img: "imgref3",
      user: "User3",
      isVisible: false,
    },
    {
      id: "4",
      text: "text4",
      title: "title4",
      img: "imgref4",
      user: "User4",
      isVisible: true,
    },
    {
      id: "44",
      text: "text4",
      title: "title4",
      img: "imgref4",
      user: "User5",
      isVisible: true,
    },
    {
      id: "5",
      text: "text5",
      title: "title5",
      img: "imgref5",
      user: "User6",
      isVisible: false,
    },
    {
      id: "6",
      text: "text6",
      title: "title6",
      img: "imgref6",
      user: "User7",
      isVisible: true,
    },
    {
      id: "7",
      text: "text7",
      title: "title7",
      img: "imgref7",
      user: "User8",
      isVisible: true,
    },
    {
      id: "8",
      text: "text8",
      title: "title8",
      img: "imgref8",
      user: "User9",
      isVisible: false,
    },
  ];
  return <TableDash header={header} rows={rows} />;
}
