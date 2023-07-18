import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SideMenuContainer from "../components/SideMenuContainer";
import SearchContainer from "../components/SearchContainer";
import MenuContainer from "../components/MenuContainer";
import ContainerItem20 from "../components/ContainerItem20";
import SortContainer from "../components/SortContainer";
import NewStudentButtonContainer from "../components/NewStudentButtonContainer";
import styles from "./Events.module.css";
const Events: FunctionComponent = () => {
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

  const onFinanceContainerClick = useCallback(() => {
    navigate("/finance");
  }, [navigate]);

  return (
    <div className={styles.events}>
      <SideMenuContainer
        home="/home5.svg"
        teacher="/teacher.svg"
        contact="Profesores"
        calendar="/calendar3.svg"
        finance="/finance8.svg"
        user1="/user9.svg"
        chat="/chat8.svg"
        activity="/activity8.svg"
        dashboard="Ultima Actividad"
        logoIcon
        backgroundHeight="1256px"
        listHeight="1256px"
        dashboardLeft="46px"
        dashboardCursor="unset"
        homeIconCursor="pointer"
        studentIconCursor="pointer"
        teacherIconBackgroundColor="unset"
        teacherIconCursor="pointer"
        eventColor="#fffffe"
        calendarIconCursor="unset"
        calendarIconBackgroundColor="#f2f7f5"
        financeColor="#00473e"
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
        onTeachersContainerClick={onTeachersContainerClick}
        onFinanceContainerClick={onFinanceContainerClick}
      />
      <b className={styles.eventos}>Eventos</b>
      <SearchContainer
        searchText="/search.svg"
        searchPlaceholderText="Search here..."
        propTop="50px"
        propLeft="calc(50% + 183px)"
      />
      <MenuContainer productId="/gear7.svg" propLeft="1557px" />
      <div className={styles.calendar}>
        <div className={styles.background} />
        <b className={styles.calendario}>Calendario</b>
        <div className={styles.row05}>
          <div className={styles.item}>
            <div className={styles.background1} />
            <b className={styles.b}>28</b>
          </div>
          <div className={styles.item1}>
            <div className={styles.background2} />
            <b className={styles.b}>29</b>
            <div className={styles.invoices}>
              <div className={styles.inidcator} />
              <div className={styles.johnny}>Johnny</div>
            </div>
          </div>
          <div className={styles.item2}>
            <div className={styles.background1} />
            <b className={styles.b}>30</b>
          </div>
          <div className={styles.item3}>
            <div className={styles.background4} />
            <b className={styles.b}>1</b>
          </div>
          <div className={styles.item4}>
            <div className={styles.background4} />
            <b className={styles.b}>2</b>
          </div>
          <div className={styles.item5}>
            <div className={styles.background4} />
            <b className={styles.b}>3</b>
          </div>
          <div className={styles.item6}>
            <div className={styles.background4} />
            <b className={styles.b}>4</b>
          </div>
        </div>
        <div className={styles.row04}>
          <div className={styles.item7}>
            <div className={styles.background1} />
            <b className={styles.b}>21</b>
          </div>
          <div className={styles.item8}>
            <div className={styles.background1} />
            <b className={styles.b}>22</b>
          </div>
          <div className={styles.item9}>
            <div className={styles.background1} />
            <b className={styles.b}>23</b>
          </div>
          <div className={styles.item3}>
            <div className={styles.background2} />
            <b className={styles.b}>24</b>
            <img className={styles.dotsIcon} alt="" src="/dots6.svg" />
          </div>
          <div className={styles.item4}>
            <div className={styles.background1} />
            <b className={styles.b}>25</b>
          </div>
          <div className={styles.item5}>
            <div className={styles.background1} />
            <b className={styles.b}>26</b>
          </div>
          <div className={styles.item6}>
            <div className={styles.background1} />
            <b className={styles.b}>27</b>
          </div>
        </div>
        <div className={styles.row03}>
          <div className={styles.item7}>
            <div className={styles.background1} />
            <b className={styles.b}>14</b>
          </div>
          <div className={styles.item15}>
            <div className={styles.background2} />
            <div className={styles.placeholder} />
            <div className={styles.placeholder1} />
            <div className={styles.placeholder2} />
            <div className={styles.div}>2+</div>
            <b className={styles.b15}>15</b>
          </div>
          <div className={styles.item9}>
            <div className={styles.background1} />
            <b className={styles.b}>16</b>
          </div>
          <div className={styles.item3}>
            <div className={styles.background1} />
            <b className={styles.b}>17</b>
          </div>
          <div className={styles.item18}>
            <div className={styles.background2} />
            <div className={styles.invoices1}>
              <div className={styles.inidcator1} />
              <div className={styles.tony2}>Tony, 2+</div>
            </div>
            <b className={styles.b18}>18</b>
          </div>
          <div className={styles.item5}>
            <div className={styles.background1} />
            <b className={styles.b}>19</b>
          </div>
          <ContainerItem20 productIds="/dots7.svg" quantity="20" />
        </div>
        <div className={styles.row02}>
          <div className={styles.item20}>
            <div className={styles.background1} />
            <b className={styles.b}>7</b>
          </div>
          <div className={styles.item21}>
            <div className={styles.background1} />
            <b className={styles.b}>8</b>
          </div>
          <div className={styles.item22}>
            <div className={styles.background1} />
            <b className={styles.b}>9</b>
          </div>
          <div className={styles.item23}>
            <div className={styles.background24} />
            <div className={styles.background25} />
            <b className={styles.b}>10</b>
            <div className={styles.invoices2}>
              <div className={styles.inidcator} />
              <div className={styles.karen2}>Karen, 2+</div>
            </div>
          </div>
          <div className={styles.item24}>
            <div className={styles.background1} />
            <b className={styles.b}>11</b>
          </div>
          <div className={styles.item25}>
            <div className={styles.background1} />
            <b className={styles.b}>12</b>
          </div>
          <div className={styles.item26}>
            <div className={styles.background1} />
            <b className={styles.b}>13</b>
          </div>
        </div>
        <div className={styles.row01}>
          <div className={styles.item27}>
            <div className={styles.background4} />
            <b className={styles.b}>31</b>
          </div>
          <div className={styles.item28}>
            <div className={styles.background1} />
            <b className={styles.b}>1</b>
          </div>
          <ContainerItem20
            productIds="/dots8.svg"
            quantity="2"
            propLeft="calc(50% - 193.5px)"
            propBorder="2px solid var(--green1)"
          />
          <div className={styles.item29}>
            <div className={styles.background1} />
            <b className={styles.b}>3</b>
          </div>
          <div className={styles.item30}>
            <div className={styles.background1} />
            <b className={styles.b}>4</b>
          </div>
          <div className={styles.item31}>
            <div className={styles.background2} />
            <b className={styles.b}>5</b>
          </div>
          <div className={styles.item32}>
            <div className={styles.background34} />
            <div className={styles.placeholder} />
            <div className={styles.placeholder1} />
            <div className={styles.placeholder2} />
            <div className={styles.div}>7+</div>
            <b className={styles.b32}>6</b>
          </div>
        </div>
        <div className={styles.days}>
          <div className={styles.lunes}>Lunes</div>
          <div className={styles.martes}>Martes</div>
          <div className={styles.miercoles}>Miercoles</div>
          <div className={styles.jueves}>Jueves</div>
          <div className={styles.viernes}>Viernes</div>
          <div className={styles.sabado}>Sabado</div>
          <div className={styles.domingo}>Domingo</div>
        </div>
        <div className={styles.button}>
          <SortContainer monthLabel="January" monthData="/dropdown12.svg" />
          <SortContainer monthLabel="2021" monthData="/dropdown12.svg" />
          <NewStudentButtonContainer productId="/4.svg" />
        </div>
      </div>
      <div className={styles.schedule}>
        <div className={styles.schedule1}>
          <div className={styles.background35} />
          <div className={styles.detallesDelHorarioParent}>
            <b className={styles.detallesDelHorario}>Detalles del Horario</b>
            <div className={styles.thursday10thApril}>
              Thursday, 10th April , 2021
            </div>
          </div>
        </div>
        <div className={styles.schedule11}>
          <div className={styles.background36} />
          <div className={styles.statuscolor} />
          <div className={styles.profilepicture}>
            <div className={styles.placeholder6} />
          </div>
          <div className={styles.details}>
            <div className={styles.algoritmos}>Algoritmos</div>
            <div className={styles.algoritmosBasicos}>Algoritmos Basicos</div>
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
          <div className={styles.background36} />
          <div className={styles.statuscolor1} />
          <div className={styles.profilepicture}>
            <div className={styles.placeholder6} />
          </div>
          <div className={styles.details1}>
            <div className={styles.artistica}>Artistica</div>
            <div className={styles.artisticaBasica}>Artistica Basica</div>
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
          <div className={styles.background36} />
          <div className={styles.statuscolor2} />
          <div className={styles.profilepicture}>
            <div className={styles.placeholder6} />
          </div>
          <div className={styles.details2}>
            <div className={styles.programacion}>Programacion</div>
            <div className={styles.clasesDeHtml}>{`Clases de HTML & CSS `}</div>
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
          <div className={styles.background36} />
          <div className={styles.statuscolor} />
          <div className={styles.profilepicture}>
            <div className={styles.placeholder6} />
          </div>
          <div className={styles.details3}>
            <div className={styles.ingles}>Ingles</div>
            <div className={styles.simplePastTense}>Simple Past Tense</div>
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
          <div className={styles.background40} />
          <div className={styles.verMs}>Ver Más</div>
        </div>
      </div>
    </div>
  );
};

export default Events;
