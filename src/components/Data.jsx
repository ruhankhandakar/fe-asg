import { Table } from "antd";
import { CheckCircleTwoTone, CloseCircleTwoTone } from "@ant-design/icons";
import { useContext } from "react";

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

  const filteredConditions = conditions.filter(
    (item) => item.id && item.operator && item.value
  );

  console.log("whereCondition", whereCondition);
  console.log("filteredConditions", filteredConditions);

  const dataSource = [];

  data.forEach((dt) => {
    filteredConditions.forEach((fc) => {
      if (
        fc.operator === "CONTAINS" &&
        dt[fc.id].toLowerCase().includes(fc.value.toLowerCase())
      ) {
        dataSource.push(dt);
      } else if (
        fc.operator === "EQ" &&
        dt[fc.id] === (fc.value.toUpperCase() === "YES")
      ) {
        dataSource.push(dt);
      } else if (fc.operator === "GTE" && dt[fc.id] >= +fc.value) {
        dataSource.push(dt);
      } else if (fc.operator === "LTE" && dt[fc.id] <= +fc.value) {
        dataSource.push(dt);
      }
      //   console.log(dt);
      // console.log(fc);
    });
  });

  return (
    <Table
      columns={columns}
      dataSource={filteredConditions.length ? dataSource : data}
      pagination={{ pageSize: 100, hideOnSinglePage: true }}
      scroll={{ y: 300, x: 700 }}
    />
  );
};

export default Data;
