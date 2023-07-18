import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LoginContainer from "../components/LoginContainer";
import styles from "./DashboardLoginDarkTheme.module.css";
const DashboardLoginDarkTheme: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLoginBtnContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.dashboardLoginDarkTheme}>
      <img className={styles.vectorsIcon} alt="" src="/vectors1.svg" />
      <img
        className={styles.lightModeDarkMode}
        alt=""
        src="/light-mode--dark-mode.svg"
      />
      <LoginContainer
        loginBtnColor="#20df7f"
        rectangleColor="#f2f7f5"
        inicioDeSesnBackgroundColor="#224957"
        contraseaColor="#f2f7f5"
        rectangleBackgroundColor="#224957"
        usuarioColor="#f2f7f5"
        inicioDeSesinBackgroundColor="#224957"
        propColor="#f2f7f5"
        propColor1="#f2f7f5"
        propColor2="#f2f7f5"
        onLoginBtnContainerClick={onLoginBtnContainerClick}
      />
      <img className={styles.logoIcon} alt="" src="/logo1@2x.png" />
    </div>
  );
};

export default DashboardLoginDarkTheme;
