import { FunctionComponent } from "react";
import DataContainer from "../components/DataContainer";
import MessageFormContainer from "../components/MessageFormContainer";
import DetailsBox from "../components/DetailsBox";
import styles from "./FormElements.module.css";
const FormElements: FunctionComponent = () => {
  return (
    <div className={styles.formElements}>
      <DataContainer
        buttonText="/icon4.svg"
        navigationText="Badge/Label"
        backgroundIconTop="1025px"
        iconWidth="483px"
        iconLeft="176px"
        propTop="20px"
      />
      <DataContainer
        buttonText="/icon4.svg"
        navigationText="Icons"
        backgroundIconTop="2017px"
        iconWidth="301px"
        iconLeft="176px"
        propTop="20px"
      />
      <div className={styles.information}>
        <img className={styles.backgroundIcon} alt="" src="/background1.svg" />
        <div className={styles.content}>
          <img className={styles.icon} alt="" src="/icon5.svg" />
          <div className={styles.elementosDeFormulario}>
            Elementos de Formulario
          </div>
        </div>
      </div>
      <div className={styles.checkbox}>
        <div className={styles.themeColorParent}>
          <div className={styles.themeColor}>Checkbox</div>
          <div className={styles.inboxParent}>
            <div className={styles.inbox}>
              <div className={styles.checkedboxParent}>
                <div className={styles.checkedbox}>
                  <div className={styles.square} />
                  <img
                    className={styles.checkedboxChild}
                    alt=""
                    src="/vector-81.svg"
                  />
                </div>
                <div className={styles.title}>Check</div>
              </div>
            </div>
            <div className={styles.sentemails}>
              <div className={styles.sentemailsChild} />
              <div className={styles.title}>Uncheck</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.labelLegend}>
        <div className={styles.themeColor}>Label Legend</div>
        <div className={styles.online}>
          <div className={styles.onlineChild} />
          <div className={styles.online1}>Online</div>
        </div>
      </div>
      <div className={styles.searchBox}>
        <div className={styles.themeColor}>Busqueda</div>
        <div className={styles.searchBar}>
          <div className={styles.searchParent}>
            <img className={styles.searchIcon} alt="" src="/search2.svg" />
            <div className={styles.searchHere}>Search here...</div>
          </div>
        </div>
      </div>
      <div className={styles.textArea}>
        <div className={styles.themeColor}>Area de Texto</div>
        <MessageFormContainer
          productIds="/sent.svg"
          productDimensions="/attachment.svg"
        />
      </div>
      <div className={styles.input}>
        <div className={styles.themeColor3}>{`Default Input `}</div>
        <div className={styles.firstName}>
          <div className={styles.firstName1}>First Name *</div>
          <div className={styles.form}>
            <div className={styles.form1} />
            <div className={styles.maria}>Maria</div>
          </div>
        </div>
        <div className={styles.firstName}>
          <div className={styles.firstName1}>Address *</div>
          <div className={styles.form2}>
            <div className={styles.form3} />
            <div
              className={styles.loremIpsumDolor}
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `}</div>
            <div className={styles.div}>0/2000</div>
            <img className={styles.formChild} alt="" src="/vector-42.svg" />
          </div>
        </div>
      </div>
      <div className={styles.statusLabel}>
        <div className={styles.themeColor}>Status label</div>
        <div className={styles.completeParent}>
          <div className={styles.complete}>Complete</div>
          <div className={styles.pending}>Pending</div>
          <div className={styles.canceled}>Canceled</div>
        </div>
      </div>
      <div className={styles.notification}>
        <div className={styles.badgenotif}>
          <div className={styles.title4}>Notification</div>
        </div>
        <div className={styles.checkedbox}>
          <div className={styles.notifChild} />
          <img className={styles.icon1} alt="" src="/2.svg" />
        </div>
      </div>
      <div className={styles.formatIcon}>
        <div className={styles.themeColor}>Format Icon</div>
        <div className={styles.iconParent}>
          <img className={styles.icon2} alt="" src="/icon.svg" />
          <img className={styles.icon2} alt="" src="/icon1.svg" />
          <img className={styles.icon2} alt="" src="/icon6.svg" />
        </div>
      </div>
      <div className={styles.tooltip}>
        <div className={styles.themeColor}>Tooltip</div>
        <div className={styles.detailsParent}>
          <div className={styles.details}>
            <img className={styles.details} alt="" src="/union.svg" />
            <b className={styles.b}>42%</b>
            <div className={styles.income}>982 Income</div>
          </div>
          <DetailsBox />
        </div>
      </div>
      <div className={styles.iconTransaction}>
        <div className={styles.themeColor}>Icon Transaction</div>
        <div className={styles.iconWrapper}>
          <img className={styles.icon5} alt="" src="/icon7.svg" />
        </div>
      </div>
      <div className={styles.label}>
        <div className={styles.themeColor}>Label</div>
        <div className={styles.statusParent}>
          <div className={styles.status}>
            <div className={styles.content1}>
              <div className={styles.searchHere}>VII A</div>
            </div>
          </div>
          <div className={styles.status1}>
            <div className={styles.content1}>
              <div className={styles.searchHere}>VII B</div>
            </div>
          </div>
          <div className={styles.status2}>
            <div className={styles.content1}>
              <div className={styles.searchHere}>VII C</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.homeParent}>
        <img className={styles.homeIcon} alt="" src="/home2.svg" />
        <img className={styles.homeIcon} alt="" src="/food.svg" />
        <img className={styles.homeIcon} alt="" src="/sent1.svg" />
        <img className={styles.homeIcon} alt="" src="/student2.svg" />
        <img className={styles.homeIcon} alt="" src="/teacher1.svg" />
        <img className={styles.homeIcon} alt="" src="/bell.svg" />
        <img className={styles.homeIcon} alt="" src="/calendar1.svg" />
        <img className={styles.homeIcon} alt="" src="/chat2.svg" />
        <img className={styles.homeIcon} alt="" src="/clock.svg" />
        <img className={styles.homeIcon} alt="" src="/family.svg" />
        <img className={styles.homeIcon} alt="" src="/finance2.svg" />
        <img className={styles.homeIcon} alt="" src="/bell.svg" />
        <img className={styles.homeIcon} alt="" src="/dots2.svg" />
        <img className={styles.homeIcon} alt="" src="/print.svg" />
      </div>
      <div className={styles.gearParent}>
        <img className={styles.homeIcon} alt="" src="/gear2.svg" />
        <img className={styles.homeIcon} alt="" src="/email2.svg" />
        <img className={styles.homeIcon} alt="" src="/user2.svg" />
        <img className={styles.homeIcon} alt="" src="/chat2.svg" />
        <img className={styles.homeIcon} alt="" src="/activity2.svg" />
        <img className={styles.homeIcon} alt="" src="/dropdown8.svg" />
        <img className={styles.homeIcon} alt="" src="/call2.svg" />
        <img className={styles.homeIcon} alt="" src="/calendar1.svg" />
        <img className={styles.homeIcon} alt="" src="/clock.svg" />
        <img className={styles.homeIcon} alt="" src="/trending.svg" />
        <img className={styles.homeIcon} alt="" src="/location.svg" />
        <img className={styles.homeIcon} alt="" src="/quote.svg" />
        <img className={styles.homeIcon} alt="" src="/video.svg" />
        <img className={styles.homeIcon} alt="" src="/sent2.svg" />
      </div>
      <div className={styles.attachmentParent}>
        <img className={styles.attachmentIcon} alt="" src="/attachment1.svg" />
        <img className={styles.homeIcon} alt="" src="/search3.svg" />
      </div>
    </div>
  );
};

export default FormElements;
