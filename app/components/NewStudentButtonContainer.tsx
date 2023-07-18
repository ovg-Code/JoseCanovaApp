import { FunctionComponent } from "react";
import styles from "./NewStudentButtonContainer.module.css";

type NewStudentButtonContainerType = {
  productId?: string;
};

const NewStudentButtonContainer: FunctionComponent<
  NewStudentButtonContainerType
> = ({ productId }) => {
  return (
    <div className={styles.newStudentButton}>
      <div className={styles.content}>
        <img className={styles.icon} alt="" src={productId} />
        <div className={styles.newStudent}>New Student</div>
      </div>
    </div>
  );
};

export default NewStudentButtonContainer;
