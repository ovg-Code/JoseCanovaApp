import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./SideMenuContainer.module.css";

type SideMenuContainerType = {
  home?: string;
  teacher?: string;
  contact?: string;
  calendar?: string;
  finance?: string;
  user1?: string;
  chat?: string;
  activity?: string;
  dashboard?: string;
  logoIcon?: boolean;

  /** Style props */
  backgroundHeight?: Property.Height;
  listHeight?: Property.Height;
  dashboardLeft?: Property.Left;
  dashboardCursor?: Property.Cursor;
  homeIconCursor?: Property.Cursor;
  studentIconCursor?: Property.Cursor;
  teacherIconBackgroundColor?: Property.BackgroundColor;
  teacherIconCursor?: Property.Cursor;
  eventColor?: Property.Color;
  calendarIconCursor?: Property.Cursor;
  calendarIconBackgroundColor?: Property.BackgroundColor;
  financeColor?: Property.Color;
  financeIconCursor?: Property.Cursor;
  financeIconBackgroundColor?: Property.BackgroundColor;
  userColor?: Property.Color;
  userIconBackgroundColor?: Property.BackgroundColor;
  chatColor?: Property.Color;
  chatIconBackgroundColor?: Property.BackgroundColor;
  activityColor?: Property.Color;
  activityIconBackgroundColor?: Property.BackgroundColor;
  jOSECANOVAColor?: Property.Color;
  logoIconLeft?: Property.Left;

  /** Action props */
  onListContainerClick?: () => void;
  onDashboardContainerClick?: () => void;
  onStudentsContainerClick?: () => void;
  onTeachersContainerClick?: () => void;
  onEventContainerClick?: () => void;
  onFinanceContainerClick?: () => void;
};

const SideMenuContainer: FunctionComponent<SideMenuContainerType> = ({
  home,
  teacher,
  contact,
  calendar,
  finance,
  user1,
  chat,
  activity,
  dashboard,
  logoIcon,
  backgroundHeight,
  listHeight,
  dashboardLeft,
  dashboardCursor,
  homeIconCursor,
  studentIconCursor,
  teacherIconBackgroundColor,
  teacherIconCursor,
  eventColor,
  calendarIconCursor,
  calendarIconBackgroundColor,
  financeColor,
  financeIconCursor,
  financeIconBackgroundColor,
  userColor,
  userIconBackgroundColor,
  chatColor,
  chatIconBackgroundColor,
  activityColor,
  activityIconBackgroundColor,
  jOSECANOVAColor,
  logoIconLeft,
  onListContainerClick,
  onDashboardContainerClick,
  onStudentsContainerClick,
  onTeachersContainerClick,
  onEventContainerClick,
  onFinanceContainerClick,
}) => {
  const sideMenuStyle: CSS.Properties = useMemo(() => {
    return {
      height: backgroundHeight,
    };
  }, [backgroundHeight]);

  const backgroundStyle: CSS.Properties = useMemo(() => {
    return {
      height: listHeight,
    };
  }, [listHeight]);

  const listStyle: CSS.Properties = useMemo(() => {
    return {
      left: dashboardLeft,
      cursor: dashboardCursor,
    };
  }, [dashboardLeft, dashboardCursor]);

  const dashboardStyle: CSS.Properties = useMemo(() => {
    return {
      cursor: homeIconCursor,
    };
  }, [homeIconCursor]);

  const studentsStyle: CSS.Properties = useMemo(() => {
    return {
      cursor: studentIconCursor,
    };
  }, [studentIconCursor]);

  const teachersStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: teacherIconBackgroundColor,
      cursor: teacherIconCursor,
    };
  }, [teacherIconBackgroundColor, teacherIconCursor]);

  const contactStyle: CSS.Properties = useMemo(() => {
    return {
      color: eventColor,
    };
  }, [eventColor]);

  const eventStyle: CSS.Properties = useMemo(() => {
    return {
      cursor: calendarIconCursor,
      backgroundColor: calendarIconBackgroundColor,
    };
  }, [calendarIconCursor, calendarIconBackgroundColor]);

  const cryptoStyle: CSS.Properties = useMemo(() => {
    return {
      color: financeColor,
    };
  }, [financeColor]);

  const financeStyle: CSS.Properties = useMemo(() => {
    return {
      cursor: financeIconCursor,
      backgroundColor: financeIconBackgroundColor,
    };
  }, [financeIconCursor, financeIconBackgroundColor]);

  const dashboard1Style: CSS.Properties = useMemo(() => {
    return {
      color: userColor,
    };
  }, [userColor]);

  const userStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: userIconBackgroundColor,
    };
  }, [userIconBackgroundColor]);

  const dashboard2Style: CSS.Properties = useMemo(() => {
    return {
      color: chatColor,
    };
  }, [chatColor]);

  const chatStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: chatIconBackgroundColor,
    };
  }, [chatIconBackgroundColor]);

  const dashboard3Style: CSS.Properties = useMemo(() => {
    return {
      color: activityColor,
    };
  }, [activityColor]);

  const activityStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: activityIconBackgroundColor,
    };
  }, [activityIconBackgroundColor]);

  const dashboard4Style: CSS.Properties = useMemo(() => {
    return {
      color: jOSECANOVAColor,
    };
  }, [jOSECANOVAColor]);

  const jOSECANOVAStyle: CSS.Properties = useMemo(() => {
    return {
      left: logoIconLeft,
    };
  }, [logoIconLeft]);

  return (
    <div className={styles.sideMenu} style={sideMenuStyle}>
      <div className={styles.background} style={backgroundStyle} />
      <div
        className={styles.list}
        style={listStyle}
        onClick={onListContainerClick}
      >
        <div
          className={styles.dashboard}
          style={dashboardStyle}
          onClick={onDashboardContainerClick}
        >
          <img className={styles.homeIcon} alt="" src={home} />
          <div className={styles.email}>Tablero</div>
        </div>
        <div
          className={styles.students}
          style={studentsStyle}
          onClick={onStudentsContainerClick}
        >
          <img className={styles.homeIcon} alt="" src="/images/student3.svg" />
          <div className={styles.email}>Estudiantes</div>
        </div>
        <div
          className={styles.students}
          style={teachersStyle}
          onClick={onTeachersContainerClick}
        >
          <img className={styles.homeIcon} alt="" src={teacher} />
          <div className={styles.email} style={contactStyle}>
            {contact}
          </div>
        </div>
        <div
          className={styles.students}
          style={eventStyle}
          onClick={onEventContainerClick}
        >
          <img className={styles.homeIcon} alt="" src={calendar} />
          <div className={styles.email} style={cryptoStyle}>
            Eventos
          </div>
        </div>
        <div
          className={styles.students}
          style={financeStyle}
          onClick={onFinanceContainerClick}
        >
          <img className={styles.homeIcon} alt="" src={finance} />
          <div className={styles.email} style={dashboard1Style}>
            Finanzas
          </div>
        </div>
        <div className={styles.students} style={userStyle}>
          <img className={styles.homeIcon} alt="" src={user1} />
          <div className={styles.email} style={dashboard2Style}>
            Usuarios
          </div>
        </div>
        <div className={styles.students} style={chatStyle}>
          <img className={styles.homeIcon} alt="" src={chat} />
          <div className={styles.email} style={dashboard3Style}>
            Chat
          </div>
        </div>
        <div className={styles.activity} style={activityStyle}>
          <img className={styles.homeIcon} alt="" src={activity} />
          <div className={styles.email} style={dashboard4Style}>
            {dashboard}
          </div>
        </div>
      </div>
      <b className={styles.joseCanova} style={jOSECANOVAStyle}>
        JOSE CANOVA
      </b>
      {!logoIcon && (
        <img className={styles.logoIcon} alt="" src="/images/logo@2x.png" />
      )}
    </div>
  );
};

export default SideMenuContainer;
