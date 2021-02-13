import { Divider } from "antd";

// Custom Components
import CustomLayout from "./common/CustomLayout";
import Data from "./components/Data";
import Filters from "./components/Filters/Filters";

const App = () => {
  return (
    <div>
      <CustomLayout>
        <h3
          style={{
            textAlign: "center",
          }}
        >
          FE Assessment
        </h3>
      </CustomLayout>
      <Divider
        style={{
          border: "none",
        }}
      />
      <CustomLayout>
        <Filters />
      </CustomLayout>
      <Divider
        style={{
          border: "none",
        }}
      />
      <CustomLayout>
        <Data />
      </CustomLayout>
    </div>
  );
};

export default App;
