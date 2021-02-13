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

  console.log("conditions", conditions);
  return (
    <div>
      {Children.toArray(conditions.map((item) => <FilterInputs item={item} />))}

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
