import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./StudentContainer.module.css";

type StudentContainerType = {
  userType?: string;
  userCount?: string;
  userImageUrl?: string;

  /** Style props */
  propLeft?: Property.Left;
  propWidth?: Property.Width;
  propWidth1?: Property.Width;
  propBorderRadius?: Property.BorderRadius;
};

const StudentContainer: FunctionComponent<StudentContainerType> = ({
  userType,
  userCount,
  userImageUrl,
  propLeft,
  propWidth,
  propWidth1,
  propBorderRadius,
}) => {
  const divStyle: CSS.Properties = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth,
    };
  }, [propLeft, propWidth]);

  const textStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const iconStyle: CSS.Properties = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  return (
    <div className={styles.div} style={divStyle}>
      <div className={styles.text} style={textStyle}>
        <div className={styles.estudiantes}>{userType}</div>
        <b className={styles.b}>{userCount}</b>
      </div>
      <img
        className={styles.icon}
        alt=""
        src={userImageUrl}
        style={iconStyle}
      />
    </div>
  );
};

export default StudentContainer;
