import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./ChatContainer.module.css";

type ChatContainerType = {
  nameText?: string;

  /** Style props */
  propTop?: Property.Top;
};

const ChatContainer: FunctionComponent<ChatContainerType> = ({
  nameText,
  propTop,
}) => {
  const chat1Style: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className={styles.chat1} style={chat1Style}>
      <div className={styles.text}>
        <div className={styles.samanthaWilliam}>{nameText}</div>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet...
        </div>
      </div>
      <div className={styles.placeholder} />
      <div className={styles.chat1Child} />
      <div className={styles.pm}>12:45 PM</div>
      <div className={styles.div}>2</div>
    </div>
  );
};

export default ChatContainer;
