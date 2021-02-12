import { PlusOutlined } from "@ant-design/icons";
import { Typography } from "antd";

// Custom Components
import FilterInputs from "./FilterInputs";

const { Text } = Typography;

const Filters = () => {
  const handleClick = () => {
    console.log("Clicked");
  };
  return (
    <div>
      <FilterInputs />
      <Text
        onClick={handleClick}
        style={{
          cursor: "pointer",
        }}
      >
        <PlusOutlined /> Add Filter
      </Text>
    </div>
  );
};

export default Filters;
