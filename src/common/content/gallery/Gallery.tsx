import React from "react";
import { Card, Popover, Button, Divider } from "antd";
import { CardData } from "./CardData";
import style from "./Gallery.module.css";

export const Gallery: React.FC = () => {
  return (
    <div className={style.box}>
      {CardData.map(data => (
        <Card
          key={data.id}
          hoverable
          style={{ width: "400px", margin: "50px 0px 0px 85px" }}
          cover={<img alt="example" src={data.url} />}
        >
          <Divider>
            <Card.Meta title={data.title} />
          </Divider>
          <Divider>
            <Popover content={data.description} trigger="click">
              <Button type={"primary"} shape={"round"}>
                Узнать больше!
              </Button>
            </Popover>
          </Divider>
        </Card>
      ))}
    </div>
  );
};
