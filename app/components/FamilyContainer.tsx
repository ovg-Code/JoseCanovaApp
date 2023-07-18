import { FunctionComponent } from "react";
import styles from "./FamilyContainer.module.css";

type FamilyContainerType = {
  amandaNico?: string;
  jordanNico?: string;
};

const FamilyContainer: FunctionComponent<FamilyContainerType> = ({
  amandaNico,
  jordanNico,
}) => {
  return (
    <div className={styles.div}>
      <div className={styles.selected} />
      <div className={styles.contact}>
        <div className={styles.phone}>
          <div className={styles.placeholder} />
          <img className={styles.callIcon} alt="" src="/call1.svg" />
        </div>
        <div className={styles.phone}>
          <div className={styles.placeholder} />
          <img className={styles.emailIcon} alt="" src="/email.svg" />
        </div>
      </div>
      <div className={styles.jakarta}>Jakarta</div>
      <div className={styles.status}>
        <div className={styles.content}>
          <div className={styles.viiA}>VII A</div>
        </div>
      </div>
      <div className={styles.amandaNico}>{amandaNico}</div>
      <div className={styles.check} />
      <div className={styles.customer}>
        <div className={styles.placeholder2} />
        <div className={styles.name}>
          <b className={styles.viiA}>{jordanNico}</b>
        </div>
      </div>
      <div className={styles.march252021}>March 25, 2021</div>
      <div className={styles.div1}>#123456789</div>
      <img className={styles.dotsIcon} alt="" src="/dots1.svg" />
    </div>
  );
};

export default FamilyContainer;
