import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./DetailsBox.module.css";

type DetailsBoxType = {
  /** Style props */
  propPosition?: Property.Position;
  propTop?: Property.Top;
  propLeft?: Property.Left;
};

const DetailsBox: FunctionComponent<DetailsBoxType> = ({
  propPosition,
  propTop,
  propLeft,
}) => {
  const detailsStyle: CSS.Properties = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
    };
  }, [propPosition, propTop, propLeft]);

  return (
    <div className={styles.details} style={detailsStyle}>
      <div className={styles.detailsChild} />
      <img className={styles.detailsItem} alt="" src="/polygon-1.svg" />
      <b className={styles.b}>$1,345</b>
      <div className={styles.july2020}>July 2020</div>
    </div>
  );
};

export default DetailsBox;
