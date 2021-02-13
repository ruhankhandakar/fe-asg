import { Typography, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

// Custom Components
import FilterName from "./FilterName";
import FilterCondition from "./FilterCondition";
import FilterValue from "./FilterValue";
import AndOr from "./AndOr";

// Custom Styles
import { FilterInputsDiv } from "./style";

const { Text } = Typography;

const FilterInputs = () => {
  return (
    <FilterInputsDiv>
      <div className="one">
        {/* <Text>Where</Text> */}
        <AndOr />
      </div>
      <div className="two">
        <FilterName />
      </div>
      <div className="three">
        <FilterCondition />
      </div>
      <div className="four">
        <FilterValue filterCondition="EQ" />
      </div>
      <div className="five">
        <Button icon={<DeleteOutlined />} />
      </div>
    </FilterInputsDiv>
  );
};

export default FilterInputs;
