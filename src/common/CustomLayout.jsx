import { Row, Col, Card } from "antd";

const CustomLayout = ({ children }) => (
  <Row>
    <Col span={12} offset={6}>
      <Card title={null}>{children}</Card>
    </Col>
  </Row>
);

export default CustomLayout;
