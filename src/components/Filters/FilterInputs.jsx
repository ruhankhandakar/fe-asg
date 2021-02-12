import { Typography, Input, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

// Custom Components
import FilterName from "./FilterName";
import FilterCondition from "./FilterCondition";

// Custom Styles
import { FilterInputsDiv } from "./style";

const { Text } = Typography;

const FilterInputs = () => {
  return (
    <FilterInputsDiv>
      <div className="one">
        <Text>Where</Text>
      </div>
      <div className="two">
        <FilterName />
      </div>
      <div className="three">
        <FilterCondition />
      </div>
      <div className="four">
        <Input placeholder="Value" />
      </div>
      <div className="five">
        <Button icon={<DeleteOutlined />} />
      </div>
    </FilterInputsDiv>
  );
};

export default FilterInputs;
