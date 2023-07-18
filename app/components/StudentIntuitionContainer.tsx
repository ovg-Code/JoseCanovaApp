import { FunctionComponent } from "react";
import styles from "./StudentIntuitionContainer.module.css";

type StudentIntuitionContainerType = {
  nameText?: string;
};

const StudentIntuitionContainer: FunctionComponent<
  StudentIntuitionContainerType
> = ({ nameText }) => {
  return (
    <div className={styles.div}>
      <div className={styles.placeholder} />
      <div className={styles.samanthaWilliam}>{nameText}</div>
      <div className={styles.inv0001234}>ID 123456789</div>
      <div className={styles.date}>$ 50,036</div>
      <div className={styles.class}>
        <div className={styles.text}>
          <div className={styles.viiA}>VII A</div>
          <div className={styles.inv00012341}>Class</div>
        </div>
        <img className={styles.icon} alt="" src="/icon3.svg" />
      </div>
      <img className={styles.menuIcon} alt="" src="/menu.svg" />
    </div>
  );
};

export default StudentIntuitionContainer;
