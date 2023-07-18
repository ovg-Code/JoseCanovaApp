import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./LoginContainer.module.css";

type LoginContainerType = {
  /** Style props */
  loginBtnColor?: Property.Color;
  rectangleColor?: Property.Color;
  inicioDeSesnBackgroundColor?: Property.BackgroundColor;
  contraseaColor?: Property.Color;
  rectangleBackgroundColor?: Property.BackgroundColor;
  usuarioColor?: Property.Color;
  inicioDeSesinBackgroundColor?: Property.BackgroundColor;
  propColor?: Property.Color;
  propColor1?: Property.Color;
  propColor2?: Property.Color;

  /** Action props */
  onLoginBtnContainerClick?: () => void;
};

const LoginContainer: FunctionComponent<LoginContainerType> = ({
  loginBtnColor,
  rectangleColor,
  inicioDeSesnBackgroundColor,
  contraseaColor,
  rectangleBackgroundColor,
  usuarioColor,
  inicioDeSesinBackgroundColor,
  propColor,
  propColor1,
  propColor2,
  onLoginBtnContainerClick,
}) => {
  const olvidasteTuContraseaStyle: CSS.Properties = useMemo(() => {
    return {
      color: loginBtnColor,
    };
  }, [loginBtnColor]);

  const recuerdameStyle: CSS.Properties = useMemo(() => {
    return {
      color: rectangleColor,
    };
  }, [rectangleColor]);

  const rectangleDivStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: inicioDeSesnBackgroundColor,
    };
  }, [inicioDeSesnBackgroundColor]);

  const inicioDeSesnStyle: CSS.Properties = useMemo(() => {
    return {
      color: contraseaColor,
    };
  }, [contraseaColor]);

  const rectangleStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: rectangleBackgroundColor,
    };
  }, [rectangleBackgroundColor]);

  const contraseaStyle: CSS.Properties = useMemo(() => {
    return {
      color: usuarioColor,
    };
  }, [usuarioColor]);

  const rectangle1Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: inicioDeSesinBackgroundColor,
    };
  }, [inicioDeSesinBackgroundColor]);

  const usuarioStyle: CSS.Properties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const regstrateYEmpiezaStyle: CSS.Properties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const inicioDeSesinStyle: CSS.Properties = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  return (
    <div className={styles.form}>
      <div className={styles.sectionForgot}>
        <div
          className={styles.olvidasteTuContrasea}
          style={olvidasteTuContraseaStyle}
        >
          Olvidaste tu contraseña?
        </div>
        <div className={styles.recuerdame} style={recuerdameStyle}>
          Recuerdame
        </div>
        <div className={styles.sectionForgotChild} style={rectangleDivStyle} />
      </div>
      <div className={styles.loginBtn} onClick={onLoginBtnContainerClick}>
        <div className={styles.rectangle} />
        <div className={styles.inicioDeSesn} style={inicioDeSesnStyle}>
          Inicio de Sesón
        </div>
      </div>
      <div className={styles.password}>
        <div className={styles.rectangle1} style={rectangleStyle} />
        <div className={styles.contrasea} style={contraseaStyle}>
          Contraseña
        </div>
      </div>
      <div className={styles.username}>
        <div className={styles.rectangle1} style={rectangle1Style} />
        <div className={styles.usuario} style={usuarioStyle}>
          Usuario
        </div>
      </div>
      <div className={styles.regstrateYEmpieza} style={regstrateYEmpiezaStyle}>
        ¡regístrate y empieza a gestionar tus candidatos!
      </div>
      <b className={styles.inicioDeSesin} style={inicioDeSesinStyle}>
        Inicio De Sesión
      </b>
    </div>
  );
};

export default LoginContainer;
