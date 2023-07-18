import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SideMenuContainer from "../components/SideMenuContainer";
import SearchContainer from "../components/SearchContainer";
import SearchBarContainer from "../components/SearchBarContainer";
import MenuContainer from "../components/MenuContainer";
import styles from "./UserDashboard.module.css";
const UserDashboard: FunctionComponent = () => {
  const navigate = useNavigate();

  const onDashboardContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onStudentsContainerClick = useCallback(() => {
    navigate("/estudiante");
  }, [navigate]);

  return (
    <div className={styles.userDashboard}>
      <SideMenuContainer
        home="/home4.svg"
        teacher="/teacher.svg"
        contact="Profesores"
        calendar="/calendar.svg"
        finance="/finance5.svg"
        user1="/user5.svg"
        chat="/chat6.svg"
        activity="/activity6.svg"
        dashboard="Ultima Actividad"
        logoIcon
        backgroundHeight="1370px"
        listHeight="1370px"
        dashboardLeft="46px"
        dashboardCursor="unset"
        homeIconCursor="pointer"
        studentIconCursor="pointer"
        teacherIconBackgroundColor="unset"
        teacherIconCursor="unset"
        eventColor="#fffffe"
        calendarIconCursor="unset"
        calendarIconBackgroundColor="unset"
        financeColor="#fffffe"
        financeIconCursor="unset"
        financeIconBackgroundColor="unset"
        userColor="#fffffe"
        userIconBackgroundColor="#f2f7f5"
        chatColor="#00473e"
        chatIconBackgroundColor="unset"
        activityColor="#fffffe"
        activityIconBackgroundColor="unset"
        jOSECANOVAColor="#fffffe"
        logoIconLeft="110px"
        onDashboardContainerClick={onDashboardContainerClick}
        onStudentsContainerClick={onStudentsContainerClick}
      />
      <b className={styles.tableroDeActividades}>Tablero de Actividades</b>
      <SearchContainer
        searchText="/search2.svg"
        searchPlaceholderText="Search here..."
        propTop="50px"
        propLeft="calc(50% + 92px)"
      />
      <div className={styles.contact}>
        <div className={styles.background} />
        <div className={styles.content}>
          <div className={styles.title}>
            <b className={styles.contactos}>Contactos</b>
            <div className={styles.youHave741Container}>
              <span>{`You have `}</span>
              <span className={styles.span}>741</span>
              <span> contacts</span>
            </div>
          </div>
          <div className={styles.searchBar}>
            <div className={styles.magnifierParent}>
              <img
                className={styles.magnifierIcon}
                alt=""
                src="/magnifier.svg"
              />
              <div className={styles.searchHere}>Search here...</div>
            </div>
          </div>
          <div className={styles.list}>
            <div className={styles.div}>
              <div className={styles.mailButton}>
                <div className={styles.background1} />
                <img className={styles.emailIcon} alt="" src="/email3.svg" />
              </div>
              <div className={styles.text}>
                <div className={styles.samanthaWilliam}>Samantha William</div>
                <div className={styles.classViiA}>Class VII-A</div>
              </div>
              <div className={styles.profilepicture}>
                <div className={styles.placeholder} />
              </div>
            </div>
            <div className={styles.div1}>
              <div className={styles.mailButton}>
                <div className={styles.background2} />
                <img className={styles.emailIcon} alt="" src="/email4.svg" />
              </div>
              <div className={styles.text1}>
                <div className={styles.samanthaWilliam}>Tony Soap</div>
                <div className={styles.classViiA}>Class VII-A</div>
              </div>
              <div className={styles.profilepicture}>
                <div className={styles.placeholder} />
              </div>
            </div>
            <div className={styles.div2}>
              <div className={styles.mailButton}>
                <div className={styles.background1} />
                <img className={styles.emailIcon} alt="" src="/email3.svg" />
              </div>
              <div className={styles.text2}>
                <div className={styles.samanthaWilliam}>Karen Hope</div>
                <div className={styles.classViiA}>Class VII-A</div>
              </div>
              <div className={styles.profilepicture}>
                <div className={styles.placeholder} />
              </div>
            </div>
            <div className={styles.div3}>
              <div className={styles.mailButton}>
                <div className={styles.background1} />
                <img className={styles.emailIcon} alt="" src="/email5.svg" />
              </div>
              <div className={styles.text3}>
                <div className={styles.samanthaWilliam}>Jordan Nico</div>
                <div className={styles.classViiA}>Class VII-B</div>
              </div>
              <div className={styles.profilepicture}>
                <div className={styles.placeholder} />
              </div>
            </div>
            <div className={styles.div4}>
              <div className={styles.mailButton}>
                <div className={styles.background1} />
                <img className={styles.emailIcon} alt="" src="/email5.svg" />
              </div>
              <div className={styles.text2}>
                <div className={styles.samanthaWilliam}>Nadila Adja</div>
                <div className={styles.classViiA}>Class VII-C</div>
              </div>
              <div className={styles.profilepicture}>
                <div className={styles.placeholder} />
              </div>
            </div>
          </div>
          <div className={styles.btnviewmore}>
            <div className={styles.background6} />
            <div className={styles.verMs}>Ver Más</div>
          </div>
        </div>
        <div className={styles.btncta}>
          <div className={styles.background2} />
          <img className={styles.icon} alt="" src="/3.svg" />
        </div>
      </div>
      <div className={styles.profile}>
        <div className={styles.background8} />
        <img className={styles.dotsIcon} alt="" src="/dots4.svg" />
        <div className={styles.cover}>
          <div className={styles.card} />
          <div className={styles.cover}>
            <div className={styles.rectangle} />
            <div className={styles.rectangle1} />
          </div>
        </div>
        <b className={styles.title1}>Nabila Azalea</b>
        <div className={styles.title2}>Admin</div>
        <div className={styles.location}>
          <img className={styles.locationIcon} alt="" src="/location1.svg" />
          <div className={styles.searchHere}>Jakarta, Indonesia</div>
        </div>
        <div className={styles.avatar}>
          <div className={styles.placeholder5} />
        </div>
        <div className={styles.email}>
          <div className={styles.contactos}>Email</div>
          <div className={styles.mail}>
            <div className={styles.mail1}>
              <div className={styles.placeholder6} />
              <img className={styles.callIcon} alt="" src="/email6.svg" />
            </div>
            <div className={styles.jordanmailcom}>jordan@mail.com</div>
          </div>
        </div>
        <div className={styles.phone}>
          <div className={styles.contactos}>Telefono</div>
          <div className={styles.mail}>
            <div className={styles.mail1}>
              <div className={styles.placeholder6} />
              <img className={styles.callIcon} alt="" src="/call3.svg" />
            </div>
            <div className={styles.jordanmailcom}>+12 345 6789 0</div>
          </div>
        </div>
      </div>
      <div className={styles.message}>
        <div className={styles.bg} />
        <div className={styles.btnviewmore1}>
          <div className={styles.background9} />
          <div className={styles.verMs1}>Ver Más</div>
        </div>
        <b className={styles.mensajes}>Mensajes</b>
        <div className={styles.chat}>
          <div className={styles.div6}>
            <div className={styles.line} />
            <div className={styles.text5}>
              <div className={styles.samanthaWilliam}>Samantha William</div>
              <div className={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet...
              </div>
            </div>
            <div className={styles.placeholder} />
            <div className={styles.pm}>12:45 PM</div>
            <div className={styles.notif}>
              <div className={styles.notifChild} />
              <img className={styles.icon1} alt="" src="/2.svg" />
            </div>
          </div>
          <div className={styles.div6}>
            <div className={styles.line} />
            <div className={styles.text5}>
              <div className={styles.samanthaWilliam}>Tony Soap</div>
              <div className={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet...
              </div>
            </div>
            <div className={styles.placeholder} />
            <div className={styles.pm}>12:45 PM</div>
            <div className={styles.notif}>
              <div className={styles.notifChild} />
              <img className={styles.icon1} alt="" src="/2.svg" />
            </div>
          </div>
          <div className={styles.div6}>
            <div className={styles.line} />
            <div className={styles.text5}>
              <div className={styles.samanthaWilliam}>Karen Hope</div>
              <div className={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet...
              </div>
            </div>
            <div className={styles.placeholder} />
            <div className={styles.pm}>12:45 PM</div>
          </div>
          <div className={styles.div6}>
            <div className={styles.line} />
            <div className={styles.text5}>
              <div className={styles.samanthaWilliam}>Jordan Nico</div>
              <div className={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet...
              </div>
            </div>
            <div className={styles.placeholder} />
            <div className={styles.pm}>12:45 PM</div>
            <div className={styles.notif}>
              <div className={styles.notifChild} />
              <img className={styles.icon1} alt="" src="/2.svg" />
            </div>
          </div>
          <div className={styles.div10}>
            <div className={styles.text5}>
              <div className={styles.samanthaWilliam}>Nadila Adja</div>
              <div className={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet...
              </div>
            </div>
            <div className={styles.placeholder} />
            <div className={styles.pm}>12:45 PM</div>
          </div>
        </div>
        <SearchBarContainer
          propBorder="1px solid var(--color-gray-3)"
          propBoxShadow="0px 20px 50px rgba(191, 21, 108, 0.05)"
        />
      </div>
      <div className={styles.rightMenu}>
        <div className={styles.bg1} />
        <MenuContainer productId="/gear5.svg" propLeft="105px" />
        <div className={styles.plan}>
          <div className={styles.background10} />
          <div className={styles.masking1}>
            <div className={styles.rectangle2} />
            <div className={styles.rectangle3} />
          </div>
          <div className={styles.buttonprimarysmalllight}>
            <div className={styles.jordanmailcom}>Upgrade Plan</div>
          </div>
          <div className={styles.title7}>Your Plan</div>
          <b className={styles.title8}>Free</b>
          <div
            className={styles.title9}
          >{`Upgrade to Premium Plan to get more Features & Storage memory `}</div>
          <img className={styles.dotsIcon1} alt="" src="/dots5.svg" />
          <div className={styles.parent}>
            <div className={styles.div11}>
              <div className={styles.title10}>50 GB Storage</div>
              <div className={styles.dot} />
            </div>
            <div className={styles.div12}>
              <div className={styles.dot} />
              <div className={styles.title10}>Limited Features</div>
            </div>
          </div>
        </div>
        <div className={styles.lastestActivity}>
          <b className={styles.ultimaActividad}>Ultima Actividad</b>
          <img className={styles.lineIcon} alt="" src="/line1.svg" />
          <div className={styles.div13}>
            <div className={styles.text10}>
              <div className={styles.karenHopeMovedContainer}>
                <span className={styles.karenHopeMovedTask}>
                  <b className={styles.movedTask}>Karen Hope</b>
                  <span className={styles.span1}>{` `}</span>
                  <span className={styles.movedTask}>moved task</span>
                  <span className={styles.span1}>{` `}</span>
                  <b>“</b>
                </span>
                <b>
                  <span>User Research</span>
                </b>
                <span>
                  <b>“</b>
                  <span className={styles.span1}>{` `}</span>
                  <span className={styles.movedTask}>from</span>
                  <span className={styles.span1}>{` `}</span>
                  <b className={styles.movedTask}>On Progress</b>
                  <span className={styles.span1}>{` `}</span>
                  <span className={styles.movedTask}>to</span>
                  <span className={styles.span1}>{` `}</span>
                  <b className={styles.movedTask}>Done</b>
                </span>
              </div>
              <div className={styles.march20211345}>2 March 2021, 13:45 PM</div>
            </div>
            <div className={styles.rectangle4} />
          </div>
          <div className={styles.div14}>
            <div className={styles.text10}>
              <div className={styles.karenHopeMovedContainer}>
                <span>
                  <b className={styles.movedTask}>{`Samantha William `}</b>
                  <span className={styles.movedTask}>add new</span>
                  <b className={styles.movedTask}>{` 4 `}</b>
                  <span>attached files on task</span>
                  <b className={styles.photosAssets}> “</b>
                </span>
                <b className={styles.photosAssets}>
                  <span>Photo’s Assets</span>
                  <span className={styles.karenHopeMovedTask}>“</span>
                </b>
              </div>
              <div className={styles.march20211345}>2 March 2021, 13:45 PM</div>
            </div>
            <div className={styles.rectangle4} />
          </div>
          <div className={styles.div15}>
            <div className={styles.text10}>
              <div className={styles.karenHopeMovedContainer}>
                <span>
                  <b className={styles.movedTask}>{`Tony Soap `}</b>
                  <span>invite you in task</span>
                  <b className={styles.movedTask}>{` “Wireframing“ `}</b>
                  <span className={styles.movedTask}>and</span>
                  <b className={styles.hiFidelity}> “</b>
                </span>
                <b className={styles.hiFidelity}>
                  <span>Hi-fidelity</span>
                  <span className={styles.karenHopeMovedTask}>“</span>
                </b>
              </div>
              <div className={styles.march20211345}>2 March 2021, 13:45 PM</div>
            </div>
            <div className={styles.rectangle4} />
          </div>
          <div className={styles.div16}>
            <div className={styles.text13}>
              <div className={styles.karenHopeMovedContainer}>
                <span>
                  <b>{`Samantha William `}</b>
                  <span className={styles.movedTask}>created new</span>
                  <b className={styles.task}>{` `}</b>
                </span>
                <b className={styles.task}>
                  <span>Task</span>
                </b>
              </div>
              <div className={styles.march202113453}>
                2 March 2021, 13:45 PM
              </div>
            </div>
            <div className={styles.rectangle4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
