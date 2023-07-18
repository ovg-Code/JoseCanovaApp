import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SideMenuContainer from "../components/SideMenuContainer";
import MenuContainer from "../components/MenuContainer";
import SearchContainer from "../components/SearchContainer";
import styles from "./TeacherDetails.module.css";
const TeacherDetails: FunctionComponent = () => {
  const navigate = useNavigate();

  const onListContainerClick = useCallback(() => {
    navigate("/finance");
  }, [navigate]);

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

  return (
    <div className={styles.teacherDetails}>
      <div className={styles.background} />
      <SideMenuContainer
        home="/home5.svg"
        teacher="/teacher.svg"
        contact="Profesores"
        calendar="/calendar.svg"
        finance="/finance6.svg"
        user1="/user6.svg"
        chat="/chat7.svg"
        activity="/activity7.svg"
        dashboard="Ultima Actividad"
        logoIcon
        backgroundHeight="1255px"
        listHeight="1255px"
        dashboardLeft="46px"
        dashboardCursor="pointer"
        homeIconCursor="pointer"
        studentIconCursor="pointer"
        teacherIconBackgroundColor="unset"
        teacherIconCursor="pointer"
        eventColor="#fffffe"
        calendarIconCursor="pointer"
        calendarIconBackgroundColor="unset"
        financeColor="#fffffe"
        financeIconCursor="unset"
        financeIconBackgroundColor="unset"
        userColor="#fffffe"
        userIconBackgroundColor="unset"
        chatColor="#fffffe"
        chatIconBackgroundColor="unset"
        activityColor="#fffffe"
        activityIconBackgroundColor="unset"
        jOSECANOVAColor="#fffffe"
        logoIconLeft="110px"
        onListContainerClick={onListContainerClick}
        onDashboardContainerClick={onDashboardContainerClick}
        onStudentsContainerClick={onStudentsContainerClick}
        onTeachersContainerClick={onTeachersContainerClick}
        onEventContainerClick={onEventContainerClick}
      />
      <b className={styles.detallesDeProfesor}>Detalles de Profesor</b>
      <MenuContainer productId="/gear6.svg" propLeft="1557px" />
      <div className={styles.schedule}>
        <div className={styles.schedule1}>
          <div className={styles.background1} />
          <div className={styles.scheduleDetailsParent}>
            <b className={styles.scheduleDetails}>Schedule Details</b>
            <div className={styles.thursday10thApril}>
              Thursday, 10th April , 2021
            </div>
          </div>
        </div>
        <div className={styles.schedule11}>
          <div className={styles.background2} />
          <div className={styles.statuscolor} />
          <div className={styles.details}>
            <div className={styles.classViiB}>Class VII-B</div>
            <div className={styles.worldHistory}>World History</div>
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
          <div className={styles.background2} />
          <div className={styles.statuscolor1} />
          <div className={styles.details}>
            <div className={styles.classViiB}>Class VII-A</div>
            <div className={styles.worldHistory}>Ancient History</div>
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
          <div className={styles.background2} />
          <div className={styles.statuscolor2} />
          <div className={styles.details}>
            <div className={styles.classViiB}>Class VIII-A</div>
            <div className={styles.worldHistory}>Culture</div>
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
        <div className={styles.schedule4}>
          <div className={styles.background2} />
          <div className={styles.statuscolor} />
          <div className={styles.details}>
            <div className={styles.classViiB}>Class VII-C</div>
            <div className={styles.worldHistory}>World History</div>
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
        <div className={styles.btnviewmore}>
          <div className={styles.background6} />
          <div className={styles.verMs}>Ver Más</div>
        </div>
      </div>
      <div className={styles.teacherDetails1}>
        <div className={styles.background7} />
        <img className={styles.dotsIcon} alt="" src="/dots.svg" />
        <div className={styles.cover}>
          <div className={styles.card} />
          <div className={styles.cover}>
            <div className={styles.rectangle} />
            <div className={styles.rectangle1} />
          </div>
        </div>
        <b className={styles.title}>Maria Historia</b>
        <div className={styles.title1}>History Teacher</div>
        <div className={styles.avatar}>
          <div className={styles.placeholder} />
        </div>
        <div className={styles.contact}>
          <div className={styles.location}>
            <div className={styles.icon}>
              <div className={styles.bg} />
              <img
                className={styles.locationIcon}
                alt=""
                src="/location2.svg"
              />
            </div>
            <div className={styles.div}>Jakarta, Indonesia</div>
          </div>
          <div className={styles.phone}>
            <div className={styles.mail}>
              <div className={styles.icon}>
                <div className={styles.placeholder1} />
                <img className={styles.callIcon} alt="" src="/call4.svg" />
              </div>
              <div className={styles.div}>+12 345 6789 0</div>
            </div>
          </div>
          <div className={styles.email}>
            <div className={styles.mail}>
              <div className={styles.icon}>
                <div className={styles.placeholder1} />
                <img className={styles.callIcon} alt="" src="/email7.svg" />
              </div>
              <div className={styles.div}>Historia@mail.com</div>
            </div>
          </div>
        </div>
        <div className={styles.about}>
          <b className={styles.about1}>About:</b>
          <div
            className={styles.loremIpsumDolor}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `}</div>
        </div>
        <div className={styles.expertise}>
          <b className={styles.about1}>Expertise:</b>
          <div className={styles.loremIpsumDolor}>
            World History, Philosophy, Prehistoric, Culture, Ancient
          </div>
        </div>
        <div className={styles.education}>
          <b className={styles.about1}>Education:</b>
          <div className={styles.list}>
            <div className={styles.div1}>
              <div className={styles.historyMajorUniversityContainer}>
                <ul className={styles.historyMajorUniversity}>
                  History Major, University Akademi Historia
                </ul>
              </div>
              <div className={styles.div2}>2013-2017</div>
            </div>
            <div className={styles.div3}>
              <div className={styles.historyMajorUniversityContainer}>
                <ul className={styles.historyMajorUniversity}>
                  Master of History, University Akademi Historia
                </ul>
              </div>
              <div className={styles.div2}>2017-2020</div>
            </div>
          </div>
        </div>
      </div>
      <SearchContainer
        searchText="/search.svg"
        searchPlaceholderText="Search here..."
        propTop="50px"
        propLeft="calc(50% + 183px)"
      />
    </div>
  );
};

export default TeacherDetails;
