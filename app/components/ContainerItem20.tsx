import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./ContainerItem20.module.css";

type ContainerItem20Type = {
  productIds?: string;
  quantity?: string;

  /** Style props */
  propLeft?: Property.Left;
  propBorder?: Property.Border;
};

const ContainerItem20: FunctionComponent<ContainerItem20Type> = ({
  productIds,
  quantity,
  propLeft,
  propBorder,
}) => {
  const itemStyle: CSS.Properties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const background1Style: CSS.Properties = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  return (
    <div className={styles.item} style={itemStyle}>
      <div className={styles.background} style={background1Style} />
      <img className={styles.dotsIcon} alt="" src={productIds} />
      <b className={styles.b}>{quantity}</b>
    </div>
  );
};

export default ContainerItem20;
