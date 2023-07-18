import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./MenuContainer.module.css";

type MenuContainerType = {
  productId?: string;

  /** Style props */
  propLeft?: Property.Left;
};

const MenuContainer: FunctionComponent<MenuContainerType> = ({
  productId,
  propLeft,
}) => {
  const menuStyle: CSS.Properties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={styles.menu} style={menuStyle}>
      <div className={styles.placeholder} />
      <div className={styles.name}>
        <div className={styles.nabilaA}>Nabila A.</div>
        <div className={styles.admin}>Admin</div>
      </div>
      <img className={styles.notificationIcon} alt="" src="/notification.svg" />
      <div className={styles.setting}>
        <div className={styles.bg} />
        <img className={styles.gearIcon} alt="" src={productId} />
      </div>
    </div>
  );
};

export default MenuContainer;
