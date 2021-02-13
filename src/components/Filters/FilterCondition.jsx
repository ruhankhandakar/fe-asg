import { Select } from "antd";
import { useContext, Children } from "react";

// Others
import { DataContext } from "../../context";

const { Option } = Select;

const FilterCondition = ({ item }) => {
  const { operators, inputChange } = useContext(DataContext);

  const handleChange = (value) => {
    inputChange(item.uid, "operator", value);
  };

  return (
    <Select
      placeholder="Select Operator"
      onChange={handleChange}
      value={item.operator}
    >
      {Children.toArray(
        operators.map((item) => <Option value={item.value}>{item.key}</Option>)
      )}
    </Select>
  );
};

export default FilterCondition;
