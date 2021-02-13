import { Select } from "antd";
import { useContext, Children } from "react";

// Others
import { DataContext } from "../../context";

const { Option } = Select;

const FilterName = () => {
  const { columnName } = useContext(DataContext);

  return (
    <Select placeholder="Select Column">
      {Children.toArray(
        columnName.map((item) => <Option value={item.value}>{item.key}</Option>)
      )}
    </Select>
  );
};

export default FilterName;
