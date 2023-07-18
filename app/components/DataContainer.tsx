import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./DataContainer.module.css";

type DataContainerType = {
  buttonText?: string;
  navigationText?: string;

  /** Style props */
  backgroundIconTop?: Property.Top;
  iconWidth?: Property.Width;
  iconLeft?: Property.Left;
  propTop?: Property.Top;
};

const DataContainer: FunctionComponent<DataContainerType> = ({
  buttonText,
  navigationText,
  backgroundIconTop,
  iconWidth,
  iconLeft,
  propTop,
}) => {
  const informationStyle: CSS.Properties = useMemo(() => {
    return {
      top: backgroundIconTop,
    };
  }, [backgroundIconTop]);

  const contentStyle: CSS.Properties = useMemo(() => {
    return {
      width: iconWidth,
      left: iconLeft,
    };
  }, [iconWidth, iconLeft]);

  const buttonStyle: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className={styles.information} style={informationStyle}>
      <img className={styles.backgroundIcon} alt="" src="/background1.svg" />
      <div className={styles.content} style={contentStyle}>
        <img className={styles.icon} alt="" src={buttonText} />
        <div className={styles.button} style={buttonStyle}>
          {navigationText}
        </div>
      </div>
    </div>
  );
};

export default DataContainer;
