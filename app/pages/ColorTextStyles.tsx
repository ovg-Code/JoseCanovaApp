import { FunctionComponent } from "react";
import DataContainer from "../components/DataContainer";
import NewStudentButtonContainer from "../components/NewStudentButtonContainer";
import SortContainer from "../components/SortContainer";
import SearchContainer from "../components/SearchContainer";
import styles from "./ColorTextStyles.module.css";
const ColorTextStyles: FunctionComponent = () => {
  return (
    <div className={styles.colorTextStyles}>
      <DataContainer buttonText="/icon4.svg" navigationText="Button" />
      <DataContainer
        buttonText="/icon4.svg"
        navigationText="Navigation"
        backgroundIconTop="2432px"
        iconWidth="436px"
        iconLeft="180px"
        propTop="16px"
      />
      <div className={styles.themeColor}>
        <div className={styles.color}>
          <div className={styles.div}>
            <div className={styles.grey1} />
            <div className={styles.grey11}>Grey 1</div>
          </div>
          <div className={styles.div1}>
            <div className={styles.grey2} />
            <div className={styles.grey21}>Grey 2</div>
          </div>
          <div className={styles.div2}>
            <div className={styles.white} />
            <div className={styles.white1}>White</div>
          </div>
          <div className={styles.div3}>
            <div className={styles.grey3} />
            <div className={styles.grey21}>Grey 3</div>
          </div>
          <div className={styles.div4}>
            <div className={styles.primary} />
            <div className={styles.primary1}>Green</div>
          </div>
          <div className={styles.div5}>
            <div className={styles.secondary} />
            <div className={styles.secondary1}>Orange</div>
          </div>
          <div className={styles.div6}>
            <div className={styles.tertiary} />
            <div className={styles.tertiary1}>Yellow</div>
          </div>
          <div className={styles.div7}>
            <div className={styles.quatinery} />
            <div className={styles.quatinery1}>Text</div>
          </div>
          <div className={styles.div8}>
            <div className={styles.success} />
            <div className={styles.grey21}>Green</div>
          </div>
          <div className={styles.div9}>
            <div className={styles.danger} />
            <div className={styles.danger1}>Red</div>
          </div>
          <div className={styles.div10}>
            <div className={styles.warning} />
            <div className={styles.warning1}>Background</div>
          </div>
        </div>
        <div className={styles.themeColor1}>Theme Color</div>
      </div>
      <div className={styles.transparant}>
        <div className={styles.color1}>
          <div className={styles.div11}>
            <div className={styles.primary2} />
            <div className={styles.primary3}>Purple 10%</div>
          </div>
        </div>
        <div className={styles.themeColor1}>Transparent Color</div>
      </div>
      <div className={styles.gradientColor}>
        <div className={styles.color2}>
          <div className={styles.div12}>
            <div className={styles.primary4} />
            <div className={styles.primary5}>Linear 1</div>
          </div>
          <div className={styles.div13}>
            <div className={styles.secondary2} />
            <div className={styles.primary6}>Linear 2</div>
          </div>
          <div className={styles.div14}>
            <div className={styles.tertiary2} />
            <div className={styles.tertiary1}>Linear 3</div>
          </div>
        </div>
        <div className={styles.themeColor1}>Gradient Color</div>
      </div>
      <DataContainer
        buttonText="/icon5.svg"
        navigationText="Colors"
        backgroundIconTop="825px"
        iconWidth="327px"
        iconLeft="180px"
        propTop="16px"
      />
      <div className={styles.text}>
        <div className={styles.text1}>
          <div className={styles.paragraphBold}>Text Regular 2</div>
          <div className={styles.paragraphSemiBold}>Text Regular 1</div>
        </div>
        <div className={styles.text2}>
          <div className={styles.paragraphBold1}>Text Medium 2</div>
          <div className={styles.paragraphSemiBold1}>Text Medium 1</div>
        </div>
        <div className={styles.text3}>
          <div className={styles.paragraph}>{`Text Semi Bold 2 `}</div>
          <div className={styles.paragraphLead}>{`Text Semi Bold 1 `}</div>
        </div>
      </div>
      <div className={styles.heading}>
        <b className={styles.h1Heading}>H1 Heading</b>
        <b className={styles.h2Heading}>H2 Heading</b>
        <b className={styles.h3Heading}>H3 Heading</b>
        <b className={styles.h4Heading}>H4 Heading</b>
        <b className={styles.h5Heading}>H5 Heading</b>
        <b className={styles.h5Heading1}>H6 Heading</b>
      </div>
      <DataContainer
        buttonText="/icon5.svg"
        navigationText="Typography"
        backgroundIconTop="0px"
        iconWidth="466px"
        iconLeft="176px"
        propTop="16px"
      />
      <div className={styles.button}>
        <div className={styles.btncta}>
          <div className={styles.background} />
          <b className={styles.b}>+</b>
        </div>
        <div className={styles.mailButton}>
          <div className={styles.background1} />
          <img className={styles.emailIcon} alt="" src="/email1.svg" />
        </div>
        <div className={styles.btnviewmore}>
          <div className={styles.background2} />
          <div className={styles.viewMore}>View More</div>
        </div>
        <div className={styles.button1}>
          <div className={styles.submitButton}>
            <div className={styles.submit}>Submit</div>
          </div>
          <div className={styles.draftButton}>
            <div className={styles.submit}>Save as Draft</div>
          </div>
        </div>
        <NewStudentButtonContainer productId="/1.svg" />
        <SortContainer monthLabel="Newest" monthData="/dropdown5.svg" />
      </div>
      <div className={styles.navigation}>
        <b className={styles.h1Heading}>Food Details</b>
        <div className={styles.menu}>
          <img
            className={styles.placeholderIcon}
            alt=""
            src="/placeholder@2x.png"
          />
          <div className={styles.name}>
            <div className={styles.nabilaA}>Nabila A.</div>
            <div className={styles.admin}>Admin</div>
          </div>
          <img
            className={styles.notificationIcon}
            alt=""
            src="/notification.svg"
          />
          <div className={styles.setting}>
            <div className={styles.bg} />
            <img className={styles.gearIcon} alt="" src="/gear1.svg" />
          </div>
        </div>
        <SearchContainer
          searchText="/search2.svg"
          searchPlaceholderText="Search here..."
          propTop="0px"
          propLeft="calc(50% + 10.5px)"
        />
      </div>
      <div className={styles.pagination}>
        <div className={styles.showing15FromContainer}>
          <span>{`Showing `}</span>
          <span className={styles.span}>1-5</span>
          <span className={styles.span1}>{` `}</span>
          <span>from</span>
          <span className={styles.span1}>{` 100 `}</span>
          <span>data</span>
        </div>
        <div className={styles.page}>
          <img className={styles.dropdownIcon} alt="" src="/dropdown6.svg" />
          <div className={styles.div15}>
            <div className={styles.selectedpage} />
            <div className={styles.div16}>1</div>
          </div>
          <div className={styles.div17}>
            <div className={styles.background3} />
            <div className={styles.div18}>2</div>
          </div>
          <div className={styles.div17}>
            <div className={styles.background3} />
            <div className={styles.div18}>3</div>
          </div>
          <img className={styles.dropdownIcon} alt="" src="/dropdown7.svg" />
        </div>
      </div>
    </div>
  );
};

export default ColorTextStyles;
