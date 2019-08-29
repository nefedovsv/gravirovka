import React from "react";
import { Divider } from "antd";
import styles from "./Booking.module.css";
import order from "../image/booking/booking.jpg";
import minimarker from "../image/booking/minimarker.jpg";
import coreldraw from "../image/booking/coreldraw.jpg";
import post from "../image/booking/post.jpg";
export const Booking: React.FC = () => {
  return (
    <div className={styles.box}>
      <Divider>
        Как заказать наши услуги: <br />
      </Divider>
      <br />
      <div>
        <img className={styles.photo} src={order} alt="order" />
        <img className={styles.photo} src={coreldraw} alt="coreldraw" />
        <img className={styles.photo} src={minimarker} alt="minimarker" />
        <img className={styles.photo} src={post} alt="post" />
      </div>
      <br />
      <p>
        1. Оформить заказ можно любым удобным для Вас способом: <br />- через
        группу <a href="https://vk.com/gravirovka_ryazan"> VK </a> или
        <a href="https://www.instagram.com/gravirovkaryazan/"> Instagram</a>
        ; <br />- прямой звонок на номер 89537313141 или Viber по тому же
        номеру; <br />
      </p>
      <p>
        2. По вашему заказу на специализированном программном обеспечении будет
        изготовлен эскиз будущей гравировки. Данный этап изготовления самый
        трудоемкий и определяет конечную стоимость работ.
      </p>
      <p>
        3. Лазерная гравировка делается на системе{" "}
        <a href="https://www.newlaser.ru/laser/lc/minimarker2.php">
          МиниМаркер 2.
        </a>{" "}
        Это компактный прецизионный маркер на базе волоконного лазера с высокими
        качественными характеристиками.
      </p>
      <p>4. Возможна доставка готового изделия!</p>
      <br />
    </div>
  );
};
