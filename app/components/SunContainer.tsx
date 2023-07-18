import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./SunContainer.module.css";

type SunContainerType = {
  prop?: string;
  prop1?: string;
  prop2?: string;
  prop3?: string;
  prop4?: string;
  prop5?: string;
  prop6?: string;

  /** Style props */
  propTop?: Property.Top;
  propColor?: Property.Color;
  propColor1?: Property.Color;
  propBackgroundColor?: Property.BackgroundColor;
  propColor2?: Property.Color;
  propColor3?: Property.Color;
};

const SunContainer: FunctionComponent<SunContainerType> = ({
  prop,
  prop1,
  prop2,
  prop3,
  prop4,
  prop5,
  prop6,
  propTop,
  propColor,
  propColor1,
  propBackgroundColor,
  propColor2,
  propColor3,
}) => {
  const week01Style: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const div6Style: CSS.Properties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const div7Style: CSS.Properties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const dateStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const div8Style: CSS.Properties = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const div9Style: CSS.Properties = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  return (
    <div className={styles.week01} style={week01Style}>
      <div className={styles.date}>
        <div className={styles.date1}>
          <div className={styles.div} style={div6Style}>
            {prop}
          </div>
        </div>
      </div>
      <div className={styles.date2}>
        <div className={styles.date3}>
          <div className={styles.div} style={div7Style}>
            {prop1}
          </div>
        </div>
      </div>
      <div className={styles.date4}>
        <div className={styles.date5}>
          <div className={styles.div}>{prop2}</div>
        </div>
      </div>
      <div className={styles.date6}>
        <div className={styles.date7}>
          <div className={styles.div}>{prop3}</div>
        </div>
      </div>
      <div className={styles.date8}>
        <div className={styles.date9}>
          <div className={styles.div}>{prop4}</div>
        </div>
      </div>
      <div className={styles.date10} style={dateStyle}>
        <div className={styles.date11}>
          <div className={styles.div} style={div8Style}>
            {prop5}
          </div>
        </div>
      </div>
      <div className={styles.date12}>
        <div className={styles.date3}>
          <div className={styles.div} style={div9Style}>
            {prop6}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SunContainer;
