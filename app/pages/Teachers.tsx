import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SideMenuContainer from "../components/SideMenuContainer";
import SearchContainer from "../components/SearchContainer";
import MenuContainer from "../components/MenuContainer";
import styles from "./Teachers.module.css";
const Teachers: FunctionComponent = () => {
  const navigate = useNavigate();

  const onDashboardContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onStudentsContainerClick = useCallback(() => {
    navigate("/estudiante");
  }, [navigate]);

  const onEventContainerClick = useCallback(() => {
    navigate("/events");
  }, [navigate]);

  const onFinanceContainerClick = useCallback(() => {
    navigate("/finance");
  }, [navigate]);

  const onNewStudentButtonClick = useCallback(() => {
    navigate("/add-new-teacher");
  }, [navigate]);

  return (
    <div className={styles.teachers}>
      <SideMenuContainer
        home="/home5.svg"
        teacher="/teacher2.svg"
        contact="Docente"
        calendar="/calendar.svg"
        finance="/finance8.svg"
        user1="/user9.svg"
        chat="/chat8.svg"
        activity="/activity8.svg"
        dashboard="Ultima  Actividad"
        logoIcon
        backgroundHeight="1517px"
        listHeight="1517px"
        dashboardLeft="46px"
        dashboardCursor="unset"
        homeIconCursor="pointer"
        studentIconCursor="pointer"
        teacherIconBackgroundColor="#f2f7f5"
        teacherIconCursor="unset"
        eventColor="#00473e"
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
        logoIconLeft="110px"
        onDashboardContainerClick={onDashboardContainerClick}
        onStudentsContainerClick={onStudentsContainerClick}
        onEventContainerClick={onEventContainerClick}
        onFinanceContainerClick={onFinanceContainerClick}
      />
      <b className={styles.profesores}>Profesores</b>
      <div className={styles.studentMenu}>
        <div
          className={styles.newStudentButton}
          onClick={onNewStudentButtonClick}
        >
          <div className={styles.content}>
            <img className={styles.icon} alt="" src="/.svg" />
            <div className={styles.nuevosEstudiantes}>Nuevos Estudiantes</div>
          </div>
        </div>
        <div className={styles.sort}>
          <div className={styles.content1}>
            <div className={styles.nuevos}>Nuevos</div>
            <img className={styles.dropdownIcon} alt="" src="/dropdown13.svg" />
          </div>
        </div>
        <SearchContainer
          searchText="/search1.svg"
          searchPlaceholderText="Buscar Profesor"
          propTop="0px"
          propLeft="calc(50% - 755px)"
        />
      </div>
      <MenuContainer productId="/gear7.svg" propLeft="1557px" />
      <div className={styles.list}>
        <div className={styles.row1}>
          <div className={styles.div}>
            <div className={styles.background} />
            <div className={styles.profile}>
              <div className={styles.placeholder} />
              <div className={styles.name}>
                <b className={styles.nuevos}>Dimitres Viga</b>
                <div className={styles.matematica}>Matematica</div>
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.phone}>
                <div className={styles.placeholder1} />
                <img className={styles.callIcon} alt="" src="/call5.svg" />
              </div>
              <div className={styles.phone}>
                <div className={styles.placeholder1} />
                <img className={styles.emailIcon} alt="" src="/email8.svg" />
              </div>
            </div>
            <img className={styles.dotsIcon} alt="" src="/dots9.svg" />
          </div>
          <div className={styles.div1}>
            <div className={styles.background} />
            <div className={styles.profile1}>
              <div className={styles.placeholder3} />
              <div className={styles.name}>
                <b className={styles.nuevos}>Tom Housenburg</b>
                <div className={styles.matematica}>Ciencia</div>
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.phone}>
                <div className={styles.placeholder1} />
                <img className={styles.callIcon} alt="" src="/call5.svg" />
              </div>
              <div className={styles.phone}>
                <div className={styles.placeholder1} />
                <img className={styles.emailIcon} alt="" src="/email8.svg" />
              </div>
            </div>
            <img className={styles.dotsIcon} alt="" src="/dots9.svg" />
          </div>
          <div className={styles.div2}>
            <div className={styles.background} />
            <div className={styles.profile2}>
              <div className={styles.placeholder6} />
              <div className={styles.name}>
                <b className={styles.nuevos}>Dana Benevista</b>
                <div className={styles.matematica}>Artistica</div>
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.phone}>
                <div className={styles.placeholder1} />
                <img className={styles.callIcon} alt="" src="/call5.svg" />
              </div>
              <div className={styles.phone}>
                <div className={styles.placeholder1} />
                <img className={styles.emailIcon} alt="" src="/email8.svg" />
              </div>
            </div>
            <img className={styles.dotsIcon} alt="" src="/dots9.svg" />
          </div>
          <div className={styles.div3}>
            <div className={styles.background} />
            <div className={styles.profile3}>
              <div className={styles.placeholder9} />
              <div className={styles.name}>
                <b className={styles.nuevos}>Salvadore Morbeau</b>
                <div className={styles.matematica}>Biologia</div>
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.phone}>
                <div className={styles.placeholder1} />
                <img className={styles.callIcon} alt="" src="/call5.svg" />
              </div>
              <div className={styles.phone}>
                <div className={styles.placeholder1} />
                <img className={styles.emailIcon} alt="" src="/email8.svg" />
              </div>
            </div>
            <img className={styles.dotsIcon} alt="" src="/dots9.svg" />
          </div>
        </div>
        <div className={styles.row2}>
          <div className={styles.div}>
            <div className={styles.background} />
            <div className={styles.profile4}>
              <div className={styles.placeholder12} />
              <div className={styles.name}>
                <b className={styles.nuevos}>Maria Historia</b>
                <div className={styles.matematica}>Historia</div>
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.phone}>
                <div className={styles.placeholder1} />
                <img className={styles.callIcon} alt="" src="/call5.svg" />
              </div>
              <div className={styles.phone}>
                <div className={styles.placeholder1} />
                <img className={styles.emailIcon} alt="" src="/email8.svg" />
              </div>
            </div>
            <img className={styles.dotsIcon} alt="" src="/dots1.svg" />
          </div>
          <div className={styles.div1}>
            <div className={styles.background} />
            <div className={styles.profile5}>
              <div className={styles.placeholder15} />
              <div className={styles.name5}>
                <b className={styles.nuevos}>Jack Sally</b>
                <div className={styles.matematica}>Fisica</div>
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.phone}>
                <div className={styles.placeholder1} />
                <img className={styles.callIcon} alt="" src="/call5.svg" />
              </div>
              <div className={styles.phone}>
                <div className={styles.placeholder1} />
                <img className={styles.emailIcon} alt="" src="/email8.svg" />
              </div>
            </div>
            <img className={styles.dotsIcon} alt="" src="/dots1.svg" />
          </div>
          <div className={styles.div2}>
            <div className={styles.background} />
            <div className={styles.profile6}>
              <div className={styles.placeholder18} />
              <div className={styles.name}>
                <b className={styles.nuevos}>Lula Beatrice</b>
                <div className={styles.matematica}>Algoritmos</div>
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.phone}>
                <div className={styles.placeholder1} />
                <img className={styles.callIcon} alt="" src="/call5.svg" />
              </div>
              <div className={styles.phone}>
                <div className={styles.placeholder1} />
                <img className={styles.emailIcon} alt="" src="/email8.svg" />
              </div>
            </div>
            <img className={styles.dotsIcon} alt="" src="/dots1.svg" />
          </div>
          <div className={styles.div3}>
            <div className={styles.background} />
            <div className={styles.profile7}>
              <div className={styles.placeholder15} />
              <div className={styles.name7}>
                <b className={styles.nuevos}>Nella Vita</b>
                <div className={styles.matematica}>Ingles</div>
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.phone}>
                <div className={styles.placeholder1} />
                <img className={styles.callIcon} alt="" src="/call5.svg" />
              </div>
              <div className={styles.phone}>
                <div className={styles.placeholder1} />
                <img className={styles.emailIcon} alt="" src="/email8.svg" />
              </div>
            </div>
            <img className={styles.dotsIcon} alt="" src="/dots1.svg" />
          </div>
        </div>
        <div className={styles.row3}>
          <div className={styles.div}>
            <div className={styles.background} />
            <div className={styles.profile8}>
              <div className={styles.placeholder24} />
              <div className={styles.name}>
                <b className={styles.nuevos}>Nadia Laravela</b>
                <div className={styles.matematica}>Programacion</div>
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.phone}>
                <div className={styles.placeholder1} />
                <img className={styles.callIcon} alt="" src="/call5.svg" />
              </div>
              <div className={styles.phone}>
                <div className={styles.placeholder1} />
                <img className={styles.emailIcon} alt="" src="/email8.svg" />
              </div>
            </div>
            <img className={styles.dotsIcon} alt="" src="/dots1.svg" />
          </div>
          <div className={styles.div1}>
            <div className={styles.background} />
            <div className={styles.profile9}>
              <div className={styles.placeholder} />
              <div className={styles.name}>
                <b className={styles.nuevos}>Dakota Farral</b>
                <div className={styles.matematica}>Ciencias</div>
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.phone}>
                <div className={styles.placeholder1} />
                <img className={styles.callIcon} alt="" src="/call5.svg" />
              </div>
              <div className={styles.phone}>
                <div className={styles.placeholder1} />
                <img className={styles.emailIcon} alt="" src="/email8.svg" />
              </div>
            </div>
            <img className={styles.dotsIcon} alt="" src="/dots1.svg" />
          </div>
          <div className={styles.div2}>
            <div className={styles.background} />
            <div className={styles.profile4}>
              <div className={styles.placeholder12} />
              <div className={styles.name}>
                <b className={styles.nuevos}>Miranda Adila</b>
                <div className={styles.matematica}>Artistica</div>
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.phone}>
                <div className={styles.placeholder1} />
                <img className={styles.callIcon} alt="" src="/call5.svg" />
              </div>
              <div className={styles.phone}>
                <div className={styles.placeholder1} />
                <img className={styles.emailIcon} alt="" src="/email8.svg" />
              </div>
            </div>
            <img className={styles.dotsIcon} alt="" src="/dots1.svg" />
          </div>
          <div className={styles.div3}>
            <div className={styles.background} />
            <div className={styles.profile11}>
              <div className={styles.placeholder33} />
              <div className={styles.name}>
                <b className={styles.nuevos}>Indiana Barker</b>
                <div className={styles.matematica}>Biologia</div>
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.phone}>
                <div className={styles.placeholder1} />
                <img className={styles.callIcon} alt="" src="/call5.svg" />
              </div>
              <div className={styles.phone}>
                <div className={styles.placeholder1} />
                <img className={styles.emailIcon} alt="" src="/email8.svg" />
              </div>
            </div>
            <img className={styles.dotsIcon} alt="" src="/dots1.svg" />
          </div>
        </div>
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
          <img className={styles.dropdownIcon} alt="" src="/dropdown3.svg" />
          <div className={styles.div12}>
            <div className={styles.selectedpage} />
            <div className={styles.div13}>1</div>
          </div>
          <div className={styles.div14}>
            <div className={styles.background12} />
            <div className={styles.div15}>2</div>
          </div>
          <div className={styles.div14}>
            <div className={styles.background12} />
            <div className={styles.div15}>3</div>
          </div>
          <img className={styles.dropdownIcon} alt="" src="/dropdown2.svg" />
        </div>
      </div>
    </div>
  );
};

export default Teachers;
