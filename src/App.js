import { Divider } from "antd";

// Custom Components
import CustomLayout from "./common/CustomLayout";
import Data from "./components/Data";
import Filters from "./components/Filters";

const App = () => {
  return (
    <div>
      <CustomLayout>
        <h3
          style={{
            textAlign: "center",
          }}
        >
          FE Assessments
        </h3>
      </CustomLayout>
      <Divider />
      <CustomLayout>
        <Filters />
      </CustomLayout>
      <Divider />
      <CustomLayout>
        <Data />
      </CustomLayout>
    </div>
  );
};

export default App;
