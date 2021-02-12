import { Select } from "antd";
import { useContext, Children } from "react";

// Others
import { DataContext } from "../../context";

const { Option } = Select;

const FilterCondition = () => {
  const { operators } = useContext(DataContext);

  return (
    <Select placeholder="Select Operator">
      {Children.toArray(
        operators.map((item) => <Option value={item.value}>{item.key}</Option>)
      )}
    </Select>
  );
};

export default FilterCondition;
