import { Typography, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useContext } from "react";

// Custom Components
import FilterName from "./FilterName";
import FilterCondition from "./FilterCondition";
import FilterValue from "./FilterValue";
import AndOr from "./AndOr";

// Others
import { DataContext } from "../../context";

// Custom Styles
import { FilterInputsDiv } from "./style";

const { Text } = Typography;

const FilterInputs = ({ item, index }) => {
  const { removeFilter } = useContext(DataContext);

  const handleRemove = () => {
    removeFilter(item.uid);
  };
  return (
    <FilterInputsDiv>
      <div className="one">
        {index === 0 ? <Text>Where</Text> : index === 1 ? <AndOr /> : "OR"}
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
        <Button
          onClick={handleRemove}
          icon={<DeleteOutlined />}
          type="danger"
          ghost
        />
      </div>
    </FilterInputsDiv>
  );
};

export default FilterInputs;
