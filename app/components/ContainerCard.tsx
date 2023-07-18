import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./ContainerCard.module.css";

type ContainerCardType = {
  studentId?: string;
  studentName?: string;
  className?: string;
  classSection?: string;
  studentImageId?: string;

  /** Style props */
  propBackgroundColor?: Property.BackgroundColor;
};

const ContainerCard: FunctionComponent<ContainerCardType> = ({
  studentId,
  studentName,
  className,
  classSection,
  studentImageId,
  propBackgroundColor,
}) => {
  const statusStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className={styles.div}>
      <div className={styles.selected} />
      <div className={styles.contact}>
        <div className={styles.phone}>
          <div className={styles.placeholder} />
          <img className={styles.callIcon} alt="" src={studentId} />
        </div>
        <div className={styles.phone}>
          <div className={styles.placeholder} />
          <img className={styles.emailIcon} alt="" src="/email.svg" />
        </div>
      </div>
      <div className={styles.selected1} />
      <div className={styles.checkedbox}>
        <div className={styles.square} />
        <img className={styles.checkedboxChild} alt="" src="/vector-8.svg" />
      </div>
      <div className={styles.customer}>
        <div className={styles.placeholder2} />
        <div className={styles.name}>
          <b className={styles.samantaWilliam}>{studentName}</b>
        </div>
      </div>
      <div className={styles.march252021}>March 25, 2021</div>
      <div className={styles.manaWilliam}>{className}</div>
      <div className={styles.jakarta}>Jakarta</div>
      <div className={styles.div1}>#123456789</div>
      <div className={styles.status} style={statusStyle}>
        <div className={styles.content}>
          <div className={styles.samantaWilliam}>{classSection}</div>
        </div>
      </div>
      <img className={styles.dotsIcon} alt="" src={studentImageId} />
    </div>
  );
};

export default ContainerCard;
