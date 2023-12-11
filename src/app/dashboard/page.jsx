'use client'
import PageTitle from "@/components/dashboardSide/PageTitle";
import TableHover from "@/components/dashboardSide/TableHover";
import { Card, CardBody, CardTitle, Col, Row } from "react-bootstrap";

export default function Dashboard() {
  return (
    <>
      <PageTitle
        heading="Regular Tables"
        subheading="Tables are the backbone of almost all web applications."
        icon="pe-7s-drawer icon-gradient bg-happy-itmeo"
      />
      <Row>
        <Col lg="6">
          <Card className="mb-3 main-card">
            <CardBody>
              <CardTitle>Moderatorzy i Administratorzy</CardTitle>
              <TableHover />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
