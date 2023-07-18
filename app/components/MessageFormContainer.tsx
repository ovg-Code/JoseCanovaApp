import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./MessageFormContainer.module.css";

type MessageFormContainerType = {
  productIds?: string;
  productDimensions?: string;

  /** Style props */
  propPosition?: Property.Position;
  propTop?: Property.Top;
  propLeft?: Property.Left;
  propBackgroundColor?: Property.BackgroundColor;
};

const MessageFormContainer: FunctionComponent<MessageFormContainerType> = ({
  productIds,
  productDimensions,
  propPosition,
  propTop,
  propLeft,
  propBackgroundColor,
}) => {
  const typeFormStyle: CSS.Properties = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
    };
  }, [propPosition, propTop, propLeft]);

  const bgStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className={styles.typeForm} style={typeFormStyle}>
      <div className={styles.form}>
        <div className={styles.bg} style={bgStyle} />
        <div className={styles.writeYourMessage}>Write your message...</div>
      </div>
      <div className={styles.sendButton}>
        <div className={styles.send}>Send</div>
        <img className={styles.sentIcon} alt="" src={productIds} />
      </div>
      <img className={styles.attachmentIcon} alt="" src={productDimensions} />
    </div>
  );
};

export default MessageFormContainer;
