import useKeycloak from "../hooks/useKeycloak";
import styles from "./Header.module.css";
import CustomButton from "./ui/CustomButton";

const Header = (props) => {
  const { loginHandler, logoutHandler, isAuth } = useKeycloak();

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <h3>Pulse Log</h3>
        </div>
        <nav>
          {isAuth ? (
            <CustomButton onClick={logoutHandler} text="Выйти" />
          ) : (
            <CustomButton onClick={loginHandler} text="Войти" />
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
