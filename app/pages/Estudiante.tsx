import { FunctionComponent, useCallback } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ContainerCard from "../components/ContainerCard";
import FamilyContainer from "../components/FamilyContainer";
import MenuContainer from "../components/MenuContainer";
import styles from "./Estudiante.module.css";
const Estudiante: FunctionComponent = () => {
  const navigate = useNavigate();

  const onDashboardClick = useCallback(() => {
    navigate("/");
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

  const onNewStudentButtonClick = useCallback(() => {
    navigate("/add-new-student");
  }, [navigate]);

  return (
    <div className={styles.estudiante}>
      <div className={styles.sideMenu}>
        <div className={styles.background} />
        <div className={styles.list}>
          <button className={styles.dashboard} onClick={onDashboardClick}>
            <img className={styles.homeIcon} alt="" src="/images/home1.svg" />
            <div className={styles.dashboard1}>Tablero</div>
          </button>
          <div className={styles.students}>
            <img className={styles.homeIcon} alt="" src="/images/student1.svg" />
            <div className={styles.email}>Estudiantes</div>
          </div>
          <div className={styles.teachers} onClick={onTeachersContainerClick}>
            <img className={styles.homeIcon} alt="" src="/images/teacher.svg" />
            <div className={styles.email}>Profesores</div>
          </div>
          <div className={styles.teachers} onClick={onEventContainerClick}>
            <img className={styles.homeIcon} alt="" src="/images/calendar.svg" />
            <div className={styles.email}>Eventos</div>
          </div>
          <div className={styles.teachers} onClick={onFinanceContainerClick}>
            <img className={styles.homeIcon} alt="" src="/images/finance1.svg" />
            <div className={styles.email}>Finanzas</div>
          </div>
          <div className={styles.user}>
            <img className={styles.homeIcon} alt="" src="/images/user1.svg" />
            <div className={styles.email}>Usuarios</div>
          </div>
          <div className={styles.user}>
            <img className={styles.homeIcon} alt="" src="/images/chat1.svg" />
            <div className={styles.email}>Chat</div>
          </div>
          <div className={styles.user}>
            <img className={styles.homeIcon} alt="" src="/images/activity1.svg" />
            <div className={styles.email}>Ultima actividad</div>
          </div>
        </div>
        <b className={styles.joseCanova}>JOSE CANOVA</b>
        <img className={styles.logoIcon} alt="" src="/images/logo@2x.png" />
      </div>
      <b className={styles.estudiantes}>Estudiantes</b>
      <div className={styles.studentList}>
        <div className={styles.studentsList}>
          <div className={styles.background1} />
          <div className={styles.title}>
            <div className={styles.check} />
            <div className={styles.id}>ID</div>
            <div className={styles.name}>Name</div>
            <div className={styles.grade}>Grade</div>
            <div className={styles.date}>Date</div>
            <div className={styles.parentName}>Parent Name</div>
            <div className={styles.city}>City</div>
            <div className={styles.contact1}>Contact</div>
            <div className={styles.action}>Action</div>
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
              <img
                className={styles.dropdownIcon}
                alt=""
                src="/images/dropdown3.svg"
              />
              <div className={styles.div}>
                <div className={styles.selectedpage} />
                <div className={styles.div1}>1</div>
              </div>
              <div className={styles.div2}>
                <div className={styles.background2} />
                <div className={styles.div3}>2</div>
              </div>
              <div className={styles.div2}>
                <div className={styles.background2} />
                <div className={styles.div3}>3</div>
              </div>
              <img
                className={styles.dropdownIcon}
                alt=""
                src="/images/dropdown2.svg"
              />
            </div>
          </div>
          <div className={styles.border}>
            <div className={styles.border1} />
            <div className={styles.border2} />
            <div className={styles.border3} />
            <div className={styles.border4} />
            <div className={styles.border5} />
            <div className={styles.border6} />
          </div>
          <div className={styles.list1}>
            <ContainerCard
              studentId="/images/call.svg"
              studentName="Samanta William"
              className="Mana William "
              classSection="VII A"
              studentImageId="/images/dots.svg"
            />
            <div className={styles.div6}>
              <div className={styles.selected} />
              <div className={styles.contact2}>
                <div className={styles.phone}>
                  <div className={styles.placeholder} />
                  <img className={styles.callIcon} alt="" src="/images/call1.svg" />
                </div>
                <div className={styles.phone}>
                  <div className={styles.placeholder} />
                  <img className={styles.emailIcon} alt="" src="/images/email.svg" />
                </div>
              </div>
              <div className={styles.jakarta}>Jakarta</div>
              <div className={styles.status}>
                <div className={styles.content}>
                  <div className={styles.viiB}>VII B</div>
                </div>
              </div>
              <div className={styles.jamesSoap}>James Soap</div>
              <input className={styles.check1} type="checkbox" />
              <div className={styles.customer}>
                <div className={styles.placeholder2} />
                <div className={styles.name1}>
                  <b className={styles.viiB}>Tony Soap</b>
                </div>
              </div>
              <div className={styles.march252021}>March 25, 2021</div>
              <div className={styles.div7}>#123456789</div>
              <img className={styles.dotsIcon} alt="" src="/images/dots1.svg" />
            </div>
            <ContainerCard
              studentId="/images/call1.svg"
              studentName="Karen Hope"
              className="Justin Hope"
              classSection="VII C"
              studentImageId="/images/dots1.svg"
              propBackgroundColor="#00473e"
            />
            <FamilyContainer
              amandaNico="Amanda Nico"
              jordanNico="Jordan Nico"
            />
            <ContainerCard
              studentId="/call1.svg"
              studentName="Nadila Adja"
              className="Jack Adja"
              classSection="VII A"
              studentImageId="/images/dots1.svg"
              propBackgroundColor="#fb7d5b"
            />
            <FamilyContainer
              amandaNico="Danny Ahmad"
              jordanNico="Johnny Ahmad"
            />
          </div>
        </div>
      </div>
      <div className={styles.studentMenu}>
        <button
          className={styles.newStudentButton}
          onClick={onNewStudentButtonClick}
        >
          <div className={styles.content1}>
            <img className={styles.icon} alt="" src="/.svg" />
            <div className={styles.nuevosEstudiantes}>Nuevos Estudiantes</div>
          </div>
        </button>
        <div className={styles.sort}>
          <div className={styles.content2}>
            <div className={styles.viiB}>Nuevos</div>
            <img className={styles.dropdownIcon} alt="" src="/images/dropdown4.svg" />
          </div>
        </div>
        <div className={styles.searchBar}>
          <div className={styles.searchParent}>
            <img className={styles.dropdownIcon} alt="" src="/images/search1.svg" />
            <TextField
              className={styles.buscarEstudiante}
              color="primary"
              variant="standard"
              type="text"
              label="Buscar Estudiante"
              placeholder="Placeholder"
              size="medium"
              margin="none"
            />
          </div>
        </div>
      </div>
      <MenuContainer productId="/images/gear.svg" />
    </div>
  );
};

export default Estudiante;
