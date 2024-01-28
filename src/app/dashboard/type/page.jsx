import PageComponent from "@/components/dashboardSide/PageComponent";

export default function Types() {
  const header = ["ID", "Type", "Hidden", "User"];
  return <PageComponent form={"Types"} header={header} initialRows={[]} />;
}
