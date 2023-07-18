import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SideMenuContainer from "../components/SideMenuContainer";
import SearchContainer from "../components/SearchContainer";
import MenuContainer from "../components/MenuContainer";
import styles from "./StudentDetails.module.css";
const StudentDetails: FunctionComponent = () => {
  const navigate = useNavigate();

  const onDashboardContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onStudentsContainerClick = useCallback(() => {
    navigate("/estudiante");
  }, [navigate]);

  const onTeachersContainerClick = useCallback(() => {
    navigate("/teachers");
  }, [navigate]);

  const onEventContainerClick = useCallback(() => {
    navigate("/events");
  }, [navigate]);

  const onFinanceContainerClick = useCallback(() => {
    navigate("/finance");
  }, [navigate]);

  return (
    <div className={styles.studentDetails}>
      <SideMenuContainer
        home="/home5.svg"
        teacher="/teacher.svg"
        contact="Profesores"
        calendar="/calendar.svg"
        finance="/finance6.svg"
        user1="/user6.svg"
        chat="/chat7.svg"
        activity="/activity7.svg"
        dashboard="Utima Actividad"
        logoIcon
        backgroundHeight="1325px"
        listHeight="1325px"
        dashboardLeft="calc(50% - 126.5px)"
        dashboardCursor="unset"
        homeIconCursor="pointer"
        studentIconCursor="pointer"
        teacherIconBackgroundColor="unset"
        teacherIconCursor="pointer"
        eventColor="#fffffe"
        calendarIconCursor="pointer"
        calendarIconBackgroundColor="unset"
        financeColor="#fffffe"
        financeIconCursor="pointer"
        financeIconBackgroundColor="unset"
        userColor="#fffffe"
        userIconBackgroundColor="unset"
        chatColor="#fffffe"
        chatIconBackgroundColor="unset"
        activityColor="#fffffe"
        activityIconBackgroundColor="unset"
        jOSECANOVAColor="#fffffe"
        logoIconLeft="calc(50% - 62.5px)"
        onDashboardContainerClick={onDashboardContainerClick}
        onStudentsContainerClick={onStudentsContainerClick}
        onTeachersContainerClick={onTeachersContainerClick}
        onEventContainerClick={onEventContainerClick}
        onFinanceContainerClick={onFinanceContainerClick}
      />
      <b className={styles.detallesDeEstudiante}>Detalles de Estudiante</b>
      <SearchContainer
        searchText="/search.svg"
        searchPlaceholderText="Search here..."
        propTop="50px"
        propLeft="calc(50% + 183px)"
      />
      <MenuContainer productId="/gear6.svg" propLeft="1557px" />
      <div className={styles.studentProfile}>
        <div className={styles.background} />
        <img className={styles.dotsIcon} alt="" src="/dots.svg" />
        <div className={styles.cover}>
          <div className={styles.card} />
          <div className={styles.cover}>
            <div className={styles.rectangle} />
            <div className={styles.rectangle1} />
          </div>
        </div>
        <b className={styles.title}>Karen Hope</b>
        <div className={styles.title1}>Estudiante</div>
        <div className={styles.avatar}>
          <div className={styles.placeholder} />
        </div>
        <div className={styles.contact}>
          <div className={styles.parent}>
            <div className={styles.email}>
              <div className={styles.parents}>
                <div className={styles.icon}>
                  <div className={styles.placeholder1} />
                  <img className={styles.userIcon} alt="" src="/user7.svg" />
                </div>
                <div className={styles.justinHope}>Justin Hope</div>
              </div>
            </div>
            <div className={styles.padres}>Padres:</div>
          </div>
          <div className={styles.address}>
            <div className={styles.location}>
              <div className={styles.icon}>
                <div className={styles.bg} />
                <img
                  className={styles.locationIcon}
                  alt=""
                  src="/location2.svg"
                />
              </div>
              <div className={styles.justinHope}>Jakarta, Indonesia</div>
            </div>
            <div className={styles.padres}>Direccion::</div>
          </div>
          <div className={styles.phone}>
            <div className={styles.phone1}>
              <div className={styles.parents}>
                <div className={styles.icon}>
                  <div className={styles.placeholder1} />
                  <img className={styles.userIcon} alt="" src="/call4.svg" />
                </div>
                <div className={styles.justinHope}>+12 345 6789 0</div>
              </div>
            </div>
            <div className={styles.padres}>Telefono:</div>
          </div>
          <div className={styles.email1}>
            <div className={styles.email2}>
              <div className={styles.parents}>
                <div className={styles.icon}>
                  <div className={styles.placeholder1} />
                  <img className={styles.userIcon} alt="" src="/email7.svg" />
                </div>
                <div className={styles.justinHope}>Hope@mail.com</div>
              </div>
            </div>
            <div className={styles.padres}>Email:</div>
          </div>
        </div>
      </div>
      <div className={styles.group}>
        <div className={styles.paymentHistory}>
          <div className={styles.bg1} />
          <div className={styles.list}>
            <div className={styles.div1}>
              <img className={styles.icon1} alt="" src="/icon8.svg" />
              <div className={styles.text}>
                <div className={styles.justinHope}>#123456789</div>
              </div>
              <div className={styles.march20211345}>2 March 2021, 13:45 PM</div>
              <div className={styles.complete}>Complete</div>
              <div className={styles.div3}>$ 50,036</div>
            </div>
            <div className={styles.div4}>
              <img className={styles.icon1} alt="" src="/icon8.svg" />
              <div className={styles.text1}>
                <div className={styles.justinHope}>#123456789</div>
              </div>
              <div className={styles.march20211345}>2 March 2021, 13:45 PM</div>
              <div className={styles.pending}>Pending</div>
              <div className={styles.div3}>$ 50,036</div>
            </div>
            <div className={styles.div7}>
              <img className={styles.icon1} alt="" src="/icon8.svg" />
              <div className={styles.text}>
                <div className={styles.justinHope}>#123456789</div>
              </div>
              <div className={styles.march20211345}>2 March 2021, 13:45 PM</div>
              <div className={styles.canceled}>Canceled</div>
              <div className={styles.div3}>$ 50,036</div>
            </div>
            <div className={styles.div1}>
              <img className={styles.icon1} alt="" src="/icon8.svg" />
              <div className={styles.text}>
                <div className={styles.justinHope}>#123456789</div>
              </div>
              <div className={styles.march20211345}>2 March 2021, 13:45 PM</div>
              <div className={styles.complete}>Complete</div>
              <div className={styles.div3}>$ 50,036</div>
            </div>
          </div>
          <b className={styles.historial}>{`Historial `}</b>
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
            <img className={styles.dropdownIcon} alt="" src="/dropdown9.svg" />
            <div className={styles.div13}>
              <div className={styles.selectedpage} />
              <div className={styles.div14}>1</div>
            </div>
            <div className={styles.div15}>
              <div className={styles.background1} />
              <div className={styles.div16}>2</div>
            </div>
            <div className={styles.div15}>
              <div className={styles.background1} />
              <div className={styles.div16}>3</div>
            </div>
            <img className={styles.dropdownIcon} alt="" src="/dropdown10.svg" />
          </div>
        </div>
      </div>
      <div className={styles.schedule}>
        <div className={styles.schedule1}>
          <div className={styles.background3} />
          <div className={styles.calendarioDeEstudianteParent}>
            <b className={styles.calendarioDeEstudiante}>
              Calendario de Estudiante
            </b>
            <div className={styles.thursday10thApril}>
              Thursday, 10th April , 2021
            </div>
          </div>
        </div>
        <div className={styles.schedule11}>
          <div className={styles.background4} />
          <div className={styles.statuscolor} />
          <div className={styles.profilepicture}>
            <div className={styles.placeholder4} />
          </div>
          <div className={styles.details}>
            <div className={styles.algorithm}>Algorithm</div>
            <div className={styles.basicAlgorithm}>Basic Algorithm</div>
            <div className={styles.date}>
              <img
                className={styles.calendarIcon}
                alt=""
                src="/calendar2.svg"
              />
              <div className={styles.am}>March 20, 2021</div>
            </div>
            <div className={styles.hours}>
              <img className={styles.calendarIcon} alt="" src="/clock1.svg" />
              <div className={styles.am}>09.00 - 10.00 AM</div>
            </div>
          </div>
        </div>
        <div className={styles.schedule2}>
          <div className={styles.background4} />
          <div className={styles.statuscolor1} />
          <div className={styles.profilepicture}>
            <div className={styles.placeholder4} />
          </div>
          <div className={styles.details}>
            <div className={styles.algorithm}>Art</div>
            <div className={styles.basicAlgorithm}>Basic Art</div>
            <div className={styles.date}>
              <img
                className={styles.calendarIcon}
                alt=""
                src="/calendar2.svg"
              />
              <div className={styles.am}>March 20, 2021</div>
            </div>
            <div className={styles.hours}>
              <img className={styles.calendarIcon} alt="" src="/clock1.svg" />
              <div className={styles.am}>09.00 - 10.00 AM</div>
            </div>
          </div>
        </div>
        <div className={styles.schedule3}>
          <div className={styles.background4} />
          <div className={styles.statuscolor2} />
          <div className={styles.profilepicture}>
            <div className={styles.placeholder4} />
          </div>
          <div className={styles.details2}>
            <div className={styles.programming}>Programming</div>
            <div className={styles.htmlCss}>{`HTML & CSS Class`}</div>
            <div className={styles.date2}>
              <img
                className={styles.calendarIcon}
                alt=""
                src="/calendar2.svg"
              />
              <div className={styles.am}>March 20, 2021</div>
            </div>
            <div className={styles.hours2}>
              <img className={styles.calendarIcon} alt="" src="/clock1.svg" />
              <div className={styles.am}>09.00 - 10.00 AM</div>
            </div>
          </div>
        </div>
        <div className={styles.schedule4}>
          <div className={styles.background4} />
          <div className={styles.statuscolor} />
          <div className={styles.profilepicture}>
            <div className={styles.placeholder4} />
          </div>
          <div className={styles.details3}>
            <div className={styles.english}>English</div>
            <div className={styles.simplePastTense}>Simple Past Tense</div>
            <div className={styles.date3}>
              <img
                className={styles.calendarIcon}
                alt=""
                src="/calendar2.svg"
              />
              <div className={styles.am}>March 20, 2021</div>
            </div>
            <div className={styles.hours3}>
              <img className={styles.calendarIcon} alt="" src="/clock1.svg" />
              <div className={styles.am}>09.00 - 10.00 AM</div>
            </div>
          </div>
        </div>
        <div className={styles.btnviewmore}>
          <div className={styles.background8} />
          <div className={styles.verMs}>Ver Más</div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
