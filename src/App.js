import { Row, Col, Card } from "antd";

// Custom Components
import Data from "./components/Data";

const App = () => {
  return (
    <div>
      <Row>
        <Col span={12} offset={6}>
          <Card title={null} bordered={false}>
            <Data />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default App;
