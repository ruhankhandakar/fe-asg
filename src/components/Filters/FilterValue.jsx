import { Select, Input } from "antd";
import { Fragment } from "react";
import { useContext } from "react";

// Others
import { DataContext } from "../../context";

const { Option } = Select;

const FilterValue = ({ item }) => {
  const { inputChange } = useContext(DataContext);

  const handleSelectChange = (value) => {
    inputChange(item.uid, "value", value);
  };

  const handleChange = ({ target: { value } }) => {
    inputChange(item.uid, "value", value);
  };

  return (
    <Fragment>
      {item.operator === "EQ" ? (
        <Select
          placeholder="Select Value"
          onChange={handleSelectChange}
          value={item.value}
          disabled={!item.operator}
        >
          <Option value="Yes">Yes</Option>
          <Option value="No">No</Option>
        </Select>
      ) : (
        <Input
          placeholder="Value"
          onChange={handleChange}
          value={item.value}
          disabled={!item.id || !item.operator}
        />
      )}
    </Fragment>
  );
};

export default FilterValue;
