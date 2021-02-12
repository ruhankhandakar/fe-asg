import { Row, Col, Card } from "antd";

const CustomLayout = ({ children }) => (
  <Row>
    <Col
      xs={{ span: 24, offset: 0 }}
      sm={{ span: 24, offset: 0 }}
      md={{ span: 18, offset: 4 }}
      lg={{ span: 18, offset: 4 }}
      xl={{ span: 12, offset: 6 }}
    >
      <Card title={null}>{children}</Card>
    </Col>
  </Row>
);

export default CustomLayout;
