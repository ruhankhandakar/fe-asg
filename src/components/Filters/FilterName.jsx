import { Select } from "antd";
import { useContext, Children } from "react";

// Others
import { DataContext } from "../../context";

const { Option } = Select;

const FilterName = ({ item }) => {
  const { columnName, inputChange } = useContext(DataContext);

  const handleChange = (value) => {
    inputChange(item.uid, "id", value);
  };

  return (
    <Select placeholder="Select Column" onChange={handleChange} value={item.id}>
      {Children.toArray(
        columnName.map((item) => <Option value={item.value}>{item.key}</Option>)
      )}
    </Select>
  );
};

export default FilterName;
