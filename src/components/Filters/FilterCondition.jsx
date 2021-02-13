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

  console.log(operators);
  let filteredOperators = operators;

  if (!item.id) {
    filteredOperators = operators;
  } else if (["name", "screen_name", "location"].includes(item.id)) {
    filteredOperators = operators.filter((item) =>
      ["CONTAINS", "EQ"].includes(item.value)
    );
  } else if (["followers_count", "following_count"].includes(item.id)) {
    filteredOperators = operators.filter((item) =>
      ["GTE", "LTE"].includes(item.value)
    );
  } else if (["verified"].includes(item.id)) {
    filteredOperators = operators.filter((item) => ["EQ"].includes(item.value));
  }

  return (
    <Select
      placeholder="Select Operator"
      onChange={handleChange}
      value={item.operator}
    >
      {Children.toArray(
        filteredOperators.map((item) => (
          <Option value={item.value}>{item.key}</Option>
        ))
      )}
    </Select>
  );
};

export default FilterCondition;
