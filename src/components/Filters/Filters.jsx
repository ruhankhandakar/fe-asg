import { PlusOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { useContext, Children } from "react";

// Custom Components
import FilterInputs from "./FilterInputs";

// Others
import { DataContext } from "../../context";

const { Text } = Typography;

const Filters = () => {
  const { conditions, addFilter } = useContext(DataContext);

  const handleClick = () => {
    addFilter();
  };
  return (
    <div>
      {Children.toArray(
        conditions.map((item, index) => (
          <FilterInputs item={item} index={index} />
        ))
      )}

      {conditions.length < 6 ? (
        <Text
          onClick={handleClick}
          style={{
            cursor: "pointer",
          }}
        >
          <PlusOutlined /> Add Filter
        </Text>
      ) : null}
    </div>
  );
};

export default Filters;
