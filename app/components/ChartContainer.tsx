import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./ChartContainer.module.css";

type ChartContainerType = {
  imageDimensions?: string;
  imageDimensionIds?: string;

  /** Style props */
  propLeft?: Property.Left;
  propWidth?: Property.Width;
  propLeft1?: Property.Left;
  propWidth1?: Property.Width;
  propLeft2?: Property.Left;
  propWidth2?: Property.Width;
  propGap?: Property.Gap;
  propLeft3?: Property.Left;
  propWidth3?: Property.Width;
  propWidth4?: Property.Width;
  propWidth5?: Property.Width;
  propWidth6?: Property.Width;
  propWidth7?: Property.Width;
  propWidth8?: Property.Width;
  propWidth9?: Property.Width;
};

const ChartContainer: FunctionComponent<ChartContainerType> = ({
  imageDimensions,
  imageDimensionIds,
  propLeft,
  propWidth,
  propLeft1,
  propWidth1,
  propLeft2,
  propWidth2,
  propGap,
  propLeft3,
  propWidth3,
  propWidth4,
  propWidth5,
  propWidth6,
  propWidth7,
  propWidth8,
  propWidth9,
}) => {
  const chartStyle: CSS.Properties = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth,
    };
  }, [propLeft, propWidth]);

  const monthStyle: CSS.Properties = useMemo(() => {
    return {
      left: propLeft1,
      width: propWidth1,
    };
  }, [propLeft1, propWidth1]);

  const lineIconStyle: CSS.Properties = useMemo(() => {
    return {
      left: propLeft2,
      width: propWidth2,
    };
  }, [propLeft2, propWidth2]);

  const month1Style: CSS.Properties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const chartIconStyle: CSS.Properties = useMemo(() => {
    return {
      left: propLeft3,
      width: propWidth3,
    };
  }, [propLeft3, propWidth3]);

  const numberStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth4,
    };
  }, [propWidth4]);

  const div1Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth5,
    };
  }, [propWidth5]);

  const div2Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth6,
    };
  }, [propWidth6]);

  const div3Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth7,
    };
  }, [propWidth7]);

  const div4Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth8,
    };
  }, [propWidth8]);

  const div5Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth9,
    };
  }, [propWidth9]);

  return (
    <div className={styles.chart} style={chartStyle}>
      <div className={styles.month} style={monthStyle}>
        <img
          className={styles.lineIcon}
          alt=""
          src={imageDimensions}
          style={lineIconStyle}
        />
        <div className={styles.month1} style={month1Style}>
          <div className={styles.jan}>Jan</div>
          <div className={styles.jan}>Feb</div>
          <div className={styles.jan}>Mar</div>
          <div className={styles.jan}>Apr</div>
          <div className={styles.jan}>May</div>
          <div className={styles.jan}>Jun</div>
          <div className={styles.jul}>Jul</div>
          <div className={styles.jan}>Aug</div>
          <div className={styles.jan}>Sep</div>
          <div className={styles.jan}>Oct</div>
          <div className={styles.jan}>Nov</div>
          <div className={styles.jan}>Dec</div>
        </div>
      </div>
      <img
        className={styles.chartIcon}
        alt=""
        src={imageDimensionIds}
        style={chartIconStyle}
      />
      <div className={styles.number} style={numberStyle}>
        <div className={styles.div} style={div1Style}>
          100
        </div>
        <div className={styles.div1} style={div2Style}>
          75
        </div>
        <div className={styles.div2} style={div3Style}>
          50
        </div>
        <div className={styles.div3} style={div4Style}>
          25
        </div>
        <div className={styles.div4} style={div5Style}>
          0
        </div>
      </div>
    </div>
  );
};

export default ChartContainer;
