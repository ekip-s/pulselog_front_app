import { Fragment } from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <Fragment>
      <section className={styles.applicationDescription}>
        <h3>Pulse Log - Приложение для отслеживания целей</h3>
        <p>
          Pulse Log помогает устанавливать и отслеживать цели, визуализируя
          прогресс на пути к ним. Видимый результат мотивирует действовать
          быстрее и активнее.
        </p>
      </section>
      <section className={styles.testApp}>
        <div className={styles.testAppBorder}>
          <h4>
            Приложение на стадии разработки - нет возможности регистрации.
          </h4>
          <div className={styles.info}>
            <p>Но можно войти в режиме "Я просто посмотреть".</p>
            <p>Логин: hellcherry</p>
            <p>Пароль: test</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
