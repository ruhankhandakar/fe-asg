import { Table } from "antd";
import { CheckCircleTwoTone, CloseCircleTwoTone } from "@ant-design/icons";
import { useContext, Fragment } from "react";

// Others
import { DataContext } from "../context";

const Data = () => {
  const { data, conditions, whereCondition } = useContext(DataContext);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Screen Name",
      dataIndex: "screen_name",
      key: "screen_name",
    },
    {
      title: "Followers Count",
      dataIndex: "followers_count",
      key: "followers_count",
    },
    {
      title: "Following Count",
      dataIndex: "following_count",
      key: "following_count",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Verified",
      dataIndex: "verified",
      key: "verified",
      render: (data) =>
        data ? (
          <CheckCircleTwoTone
            twoToneColor="#52c41a"
            style={{
              fontSize: "20px",
            }}
          />
        ) : (
          <CloseCircleTwoTone
            twoToneColor="#eb2f96"
            style={{
              fontSize: "20px",
            }}
          />
        ),
    },
  ];

  let filteredConditions = conditions.filter(
    (item) => item.id && item.operator && item.value
  );

  const filteredData = data.filter((dt) => {
    let isMatched = false;

    for (const obj of filteredConditions) {
      const { id, value, operator } = obj;
      switch (operator) {
        case "CONTAINS":
          isMatched = dt[id].toLowerCase().includes(value.toLowerCase());

          break;
        case "GTE":
          isMatched = dt[id] >= +value;

          break;
        case "LTE":
          isMatched = dt[id] <= +value;

          break;
        case "EQ":
          isMatched = dt[id] === (value.toUpperCase() === "YES");

          break;

        default:
          isMatched = false;
      }

      if (
        (!isMatched && whereCondition === "AND") ||
        (isMatched && whereCondition === "OR")
      ) {
        break;
      }
    }

    return isMatched;
  });

  const dataSource = filteredConditions.length ? filteredData : data;

  return (
    <Fragment>
      <p
        style={{
          textAlign: "right",
        }}
      >
        Total: {dataSource.length}
      </p>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={{ pageSize: 100, hideOnSinglePage: true }}
        scroll={{ y: 300, x: 700 }}
      />
    </Fragment>
  );
};

export default Data;
