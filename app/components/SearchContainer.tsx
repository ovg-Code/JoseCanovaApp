import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./SearchContainer.module.css";

type SearchContainerType = {
  searchText?: string;
  searchPlaceholderText?: string;

  /** Style props */
  propTop?: Property.Top;
  propLeft?: Property.Left;
};

const SearchContainer: FunctionComponent<SearchContainerType> = ({
  searchText,
  searchPlaceholderText,
  propTop,
  propLeft,
}) => {
  const searchBarStyle: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={styles.searchBar} style={searchBarStyle}>
      <div className={styles.searchParent}>
        <img className={styles.searchIcon} alt="" src={searchText} />
        <div className={styles.searchHere}>{searchPlaceholderText}</div>
      </div>
    </div>
  );
};

export default SearchContainer;
