import { Select, Input } from "antd";
import { Fragment } from "react";

const { Option } = Select;

const FilterValue = ({ filterCondition }) => {
  return (
    <Fragment>
      {filterCondition === "EQ" ? (
        <Select placeholder="Select Value">
          <Option value="Yes">Yes</Option>
          <Option value="No">No</Option>
        </Select>
      ) : (
        <Input placeholder="Value" />
      )}
    </Fragment>
  );
};

export default FilterValue;
