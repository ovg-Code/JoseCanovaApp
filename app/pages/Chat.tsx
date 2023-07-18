import { FunctionComponent } from "react";
import SideMenuContainer from "../components/SideMenuContainer";
import MenuContainer from "../components/MenuContainer";
import SearchBarContainer from "../components/SearchBarContainer";
import MessageFormContainer from "../components/MessageFormContainer";
import SearchContainer from "../components/SearchContainer";
import styles from "./Chat.module.css";
const Chat: FunctionComponent = () => {
  return (
    <div className={styles.chat}>
      <SideMenuContainer
        home="/home3.svg"
        teacher="/teacher.svg"
        contact="Profesores"
        calendar="/calendar.svg"
        finance="/finance3.svg"
        user1="/user3.svg"
        chat="/chat4.svg"
        activity="/activity4.svg"
        dashboard="Ultima Actividad"
        logoIcon
        backgroundHeight="1197px"
        listHeight="1197px"
        dashboardLeft="46px"
        dashboardCursor="unset"
        homeIconCursor="unset"
        studentIconCursor="unset"
        teacherIconBackgroundColor="unset"
        teacherIconCursor="unset"
        eventColor="#fffffe"
        calendarIconCursor="unset"
        calendarIconBackgroundColor="unset"
        financeColor="#fffffe"
        financeIconCursor="unset"
        financeIconBackgroundColor="unset"
        userColor="#fffffe"
        userIconBackgroundColor="unset"
        chatColor="#fffffe"
        chatIconBackgroundColor="#f2f7f5"
        activityColor="#00473e"
        activityIconBackgroundColor="unset"
        jOSECANOVAColor="#fffffe"
        logoIconLeft="110px"
      />
      <b className={styles.chat1}>Chat</b>
      <MenuContainer productId="/gear3.svg" propLeft="1557px" />
      <div className={styles.chat2}>
        <div className={styles.messages}>
          <div className={styles.bg} />
          <div className={styles.btnviewmore}>
            <div className={styles.background} />
            <div className={styles.verMs}>Ver Más</div>
          </div>
          <b className={styles.mensajes}>Mensajes</b>
          <div className={styles.groups}>
            <div className={styles.chat3}>
              <div className={styles.div}>
                <div className={styles.line} />
                <div className={styles.text}>
                  <div className={styles.classHistoryViiA}>
                    Class History VII-A
                  </div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet...
                  </div>
                </div>
                <div className={styles.placeholder} />
                <div className={styles.pm}>12:45 PM</div>
                <div className={styles.notif}>
                  <div className={styles.notifChild} />
                  <img className={styles.icon} alt="" src="/2.svg" />
                </div>
              </div>
              <div className={styles.div}>
                <div className={styles.line} />
                <div className={styles.text}>
                  <div className={styles.classHistoryViiA}>Class VII-A</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet...
                  </div>
                </div>
                <div className={styles.placeholder1} />
                <div className={styles.pm}>12:45 PM</div>
                <div className={styles.notif}>
                  <div className={styles.notifChild} />
                  <img className={styles.icon} alt="" src="/2.svg" />
                </div>
              </div>
              <div className={styles.div}>
                <div className={styles.line} />
                <div className={styles.text}>
                  <div className={styles.classHistoryViiA}>All Student VII</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet...
                  </div>
                </div>
                <div className={styles.placeholder2} />
                <div className={styles.pm}>12:45 PM</div>
              </div>
            </div>
            <div className={styles.grupos}>Grupos</div>
          </div>
          <SearchBarContainer />
          <div className={styles.chats}>
            <div className={styles.classHistoryViiA}>Chats</div>
            <div className={styles.chat4}>
              <div className={styles.div}>
                <div className={styles.line} />
                <div className={styles.text}>
                  <div className={styles.classHistoryViiA}>
                    Samantha William
                  </div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet...
                  </div>
                </div>
                <div className={styles.placeholder3} />
                <div className={styles.pm}>12:45 PM</div>
                <div className={styles.notif}>
                  <div className={styles.notifChild} />
                  <img className={styles.icon} alt="" src="/2.svg" />
                </div>
              </div>
              <div className={styles.div}>
                <div className={styles.line} />
                <div className={styles.text}>
                  <div className={styles.classHistoryViiA}>Tony Soap</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet...
                  </div>
                </div>
                <div className={styles.placeholder3} />
                <div className={styles.pm}>12:45 PM</div>
                <div className={styles.notif}>
                  <div className={styles.notifChild} />
                  <img className={styles.icon} alt="" src="/2.svg" />
                </div>
              </div>
              <div className={styles.div}>
                <div className={styles.line} />
                <div className={styles.text}>
                  <div className={styles.classHistoryViiA}>Karen Hope</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet...
                  </div>
                </div>
                <div className={styles.placeholder3} />
                <div className={styles.pm}>12:45 PM</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.chat5}>
          <div className={styles.bg1} />
          <img className={styles.dotsIcon} alt="" src="/dots3.svg" />
          <img className={styles.videoIcon} alt="" src="/video1.svg" />
          <div className={styles.line6} />
          <div className={styles.chat6}>
            <div className={styles.chat7}>
              <div className={styles.bg2} />
              <div className={styles.helloNabila}>Hello Nabila!</div>
            </div>
            <div className={styles.chat8}>
              <div className={styles.bgParent}>
                <div className={styles.bg3} />
                <div
                  className={styles.canISee}
                >{`Can i see your history lesson homework? `}</div>
              </div>
              <div className={styles.pm6}>12:45 PM</div>
            </div>
          </div>
          <div className={styles.chat9}>
            <div className={styles.chat10}>
              <div className={styles.bg4} />
              <div className={styles.helloSamantha}>Hello Samantha!</div>
            </div>
            <div className={styles.chat11}>
              <div className={styles.bg5} />
              <div className={styles.imNotFinishedContainer}>
                <p
                  className={styles.imNotFinished}
                >{`I’m not finished yet, why don’t work `}</p>
                <p className={styles.imNotFinished}>
                  together to finish homework?
                </p>
              </div>
            </div>
            <div className={styles.pm7}>12:45 PM</div>
          </div>
          <div className={styles.profile}>
            <div className={styles.placeholder6} />
            <div className={styles.name}>
              <b className={styles.samanthaWilliam1}>Samantha WIlliam</b>
              <div className={styles.online}>
                <div className={styles.onlineChild} />
                <div className={styles.online1}>Online</div>
              </div>
            </div>
          </div>
          <div className={styles.chatForm}>
            <div className={styles.rectangle} />
            <MessageFormContainer
              productIds="/sent3.svg"
              productDimensions="/attachment2.svg"
              propPosition="absolute"
              propTop="32px"
              propLeft="33.38px"
              propBackgroundColor="unset"
            />
            <div className={styles.line7} />
          </div>
        </div>
        <div className={styles.border} />
      </div>
      <SearchContainer
        searchText="/search2.svg"
        searchPlaceholderText="Search here..."
        propTop="50px"
        propLeft="calc(50% + 183px)"
      />
    </div>
  );
};

export default Chat;
