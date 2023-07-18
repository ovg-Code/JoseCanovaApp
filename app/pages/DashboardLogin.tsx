import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LoginContainer from "../components/LoginContainer";
import styles from "./DashboardLogin.module.css";
const DashboardLogin: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLoginBtnContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.dashboardLogin}>
      <img className={styles.vectorsIcon} alt="" src="/vectors.svg" />
      <img
        className={styles.lightModeDarkMode}
        alt=""
        src="/light-mode--dark-mode.svg"
      />
      <LoginContainer onLoginBtnContainerClick={onLoginBtnContainerClick} />
      <img className={styles.logoIcon} alt="" src="/logo1@2x.png" />
    </div>
  );
};

export default DashboardLogin;
