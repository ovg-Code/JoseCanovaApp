import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./SearchBarContainer.module.css";

type SearchBarContainerType = {
  /** Style props */
  propBorder?: Property.Border;
  propBoxShadow?: Property.BoxShadow;
};

const SearchBarContainer: FunctionComponent<SearchBarContainerType> = ({
  propBorder,
  propBoxShadow,
}) => {
  const searchBar1Style: CSS.Properties = useMemo(() => {
    return {
      border: propBorder,
      boxShadow: propBoxShadow,
    };
  }, [propBorder, propBoxShadow]);

  return (
    <div className={styles.searchBar} style={searchBar1Style}>
      <div className={styles.text}>
        <img className={styles.magnifierIcon} alt="" src="/magnifier.svg" />
        <div className={styles.searchHere}>Search here...</div>
      </div>
    </div>
  );
};

export default SearchBarContainer;
