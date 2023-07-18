import { FunctionComponent } from "react";
import styles from "./SortContainer.module.css";

type SortContainerType = {
  monthLabel?: string;
  monthData?: string;
};

const SortContainer: FunctionComponent<SortContainerType> = ({
  monthLabel,
  monthData,
}) => {
  return (
    <div className={styles.sort}>
      <div className={styles.content}>
        <div className={styles.newest}>{monthLabel}</div>
        <img className={styles.dropdownIcon} alt="" src={monthData} />
      </div>
    </div>
  );
};

export default SortContainer;
