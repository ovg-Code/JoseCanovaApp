import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SideMenuContainer from "../components/SideMenuContainer";
import SearchContainer from "../components/SearchContainer";
import MenuContainer from "../components/MenuContainer";
import ChartContainer from "../components/ChartContainer";
import DetailsBox from "../components/DetailsBox";
import styles from "./Finance.module.css";
const Finance: FunctionComponent = () => {
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

  return (
    <div className={styles.finance}>
      <SideMenuContainer
        home="/home5.svg"
        teacher="/teacher.svg"
        contact="Profesores"
        calendar="/calendar.svg"
        finance="/finance7.svg"
        user1="/user6.svg"
        chat="/chat7.svg"
        activity="/activity7.svg"
        dashboard="Ultima Actividad"
        logoIcon
        backgroundHeight="1640px"
        listHeight="1640px"
        dashboardLeft="46px"
        dashboardCursor="unset"
        homeIconCursor="pointer"
        studentIconCursor="pointer"
        teacherIconBackgroundColor="unset"
        teacherIconCursor="pointer"
        eventColor="#fffffe"
        calendarIconCursor="pointer"
        calendarIconBackgroundColor="unset"
        financeColor="#fffffe"
        financeIconCursor="unset"
        financeIconBackgroundColor="#f2f7f5"
        userColor="#00473e"
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
        onEventContainerClick={onEventContainerClick}
      />
      <b className={styles.finanzas}>Finanzas</b>
      <SearchContainer
        searchText="/search.svg"
        searchPlaceholderText="Search here..."
        propTop="50px"
        propLeft="calc(50% + 183px)"
      />
      <MenuContainer productId="/gear6.svg" propLeft="1557px" />
      <div className={styles.content}>
        <div className={styles.schoolPerformance}>
          <div className={styles.background} />
          <div className={styles.sort}>
            <div className={styles.content1}>
              <div className={styles.mes}>Mes</div>
              <img
                className={styles.dropdownIcon}
                alt=""
                src="/dropdown11.svg"
              />
            </div>
          </div>
          <div className={styles.hint}>
            <div className={styles.legend}>
              <div className={styles.legendChild} />
              <div className={styles.text}>
                <div className={styles.mes}>Ingresos</div>
                <b className={styles.b}>1.356</b>
              </div>
            </div>
            <div className={styles.legend1}>
              <div className={styles.legendItem} />
              <div className={styles.text1}>
                <div className={styles.mes}>Gastos</div>
                <b className={styles.b}>1.245</b>
              </div>
            </div>
          </div>
          <b className={styles.analisisDeBalance}>Analisis de Balance</b>
          <ChartContainer
            imageDimensions="/line2.svg"
            imageDimensionIds="/chart1.svg"
            propLeft="45.07px"
            propWidth="1366.38px"
            propLeft1="72.38px"
            propWidth1="1294px"
            propLeft2="17.25px"
            propWidth2="1266px"
            propGap="81px"
            propLeft3="88.51px"
            propWidth3="1271.42px"
            propWidth4="39.61px"
            propWidth5="39.61px"
            propWidth6="30.05px"
            propWidth7="31.41px"
            propWidth8="30.05px"
            propWidth9="16.39px"
          />
          <DetailsBox
            propPosition="absolute"
            propTop="109px"
            propLeft="772px"
          />
        </div>
        <div className={styles.unpaidStudent}>
          <div className={styles.background1} />
          <b className={styles.intuicinEstudiantilNo}>
            Intuición estudiantil no remunerada
          </b>
          <div className={styles.list}>
            <div className={styles.div}>
              <div className={styles.background2} />
              <div className={styles.profilepicture}>
                <div className={styles.placeholder} />
              </div>
              <div className={styles.samanthaW}>Samantha W.</div>
              <div className={styles.inv0001234}>ID 123456789</div>
              <div className={styles.total}>$ 50,036</div>
              <div className={styles.class}>
                <div className={styles.text2}>
                  <div className={styles.viiA}>VII A</div>
                  <div className={styles.inv00012341}>Class</div>
                </div>
                <div className={styles.icon}>
                  <div className={styles.bg} />
                  <img className={styles.userIcon} alt="" src="/user8.svg" />
                </div>
              </div>
              <img className={styles.menuIcon} alt="" src="/dots1.svg" />
            </div>
            <div className={styles.div}>
              <div className={styles.background2} />
              <div className={styles.profilepicture}>
                <div className={styles.placeholder} />
              </div>
              <div className={styles.samanthaW}>Tony Soap</div>
              <div className={styles.inv0001234}>ID 123456789</div>
              <div className={styles.total}>$ 50,036</div>
              <div className={styles.class}>
                <div className={styles.text2}>
                  <div className={styles.viiA}>VII A</div>
                  <div className={styles.inv00012341}>Class</div>
                </div>
                <div className={styles.icon}>
                  <div className={styles.bg} />
                  <img className={styles.userIcon} alt="" src="/user8.svg" />
                </div>
              </div>
              <img className={styles.menuIcon} alt="" src="/dots1.svg" />
            </div>
            <div className={styles.div}>
              <div className={styles.background2} />
              <div className={styles.profilepicture}>
                <div className={styles.placeholder} />
              </div>
              <div className={styles.samanthaW}>Jordan Nico</div>
              <div className={styles.inv0001234}>ID 123456789</div>
              <div className={styles.total}>$ 50,036</div>
              <div className={styles.class}>
                <div className={styles.text2}>
                  <div className={styles.viiA}>VII A</div>
                  <div className={styles.inv00012341}>Class</div>
                </div>
                <div className={styles.icon}>
                  <div className={styles.bg} />
                  <img className={styles.userIcon} alt="" src="/user8.svg" />
                </div>
              </div>
              <img className={styles.menuIcon} alt="" src="/dots1.svg" />
            </div>
            <div className={styles.div}>
              <div className={styles.background2} />
              <div className={styles.profilepicture}>
                <div className={styles.placeholder} />
              </div>
              <div className={styles.samanthaW}>Karen Hope</div>
              <div className={styles.inv0001234}>ID 123456789</div>
              <div className={styles.total}>$ 50,036</div>
              <div className={styles.class}>
                <div className={styles.text2}>
                  <div className={styles.viiA}>VII A</div>
                  <div className={styles.inv00012341}>Class</div>
                </div>
                <div className={styles.icon}>
                  <div className={styles.bg} />
                  <img className={styles.userIcon} alt="" src="/user8.svg" />
                </div>
              </div>
              <img className={styles.menuIcon} alt="" src="/dots1.svg" />
            </div>
            <div className={styles.div}>
              <div className={styles.background2} />
              <div className={styles.profilepicture}>
                <div className={styles.placeholder} />
              </div>
              <div className={styles.samanthaW}>Nadila Adja</div>
              <div className={styles.inv0001234}>ID 123456789</div>
              <div className={styles.total}>$ 50,036</div>
              <div className={styles.class}>
                <div className={styles.text2}>
                  <div className={styles.viiA}>VII A</div>
                  <div className={styles.inv00012341}>Class</div>
                </div>
                <div className={styles.icon}>
                  <div className={styles.bg} />
                  <img className={styles.userIcon} alt="" src="/user8.svg" />
                </div>
              </div>
              <img className={styles.menuIcon} alt="" src="/dots1.svg" />
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
              <img
                className={styles.dropdownIcon}
                alt=""
                src="/dropdown9.svg"
              />
              <div className={styles.div5}>
                <div className={styles.selectedpage} />
                <div className={styles.div6}>1</div>
              </div>
              <div className={styles.div7}>
                <div className={styles.background7} />
                <div className={styles.div8}>2</div>
              </div>
              <div className={styles.div7}>
                <div className={styles.background7} />
                <div className={styles.div8}>3</div>
              </div>
              <img
                className={styles.dropdownIcon}
                alt=""
                src="/dropdown10.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.overview}>
          <div className={styles.totalStudents}>
            <div className={styles.background9} />
            <div className={styles.div11}>
              <div className={styles.text7}>
                <div className={styles.totalEstudiantes}>Total Estudiantes</div>
                <b className={styles.b2}>932</b>
                <div className={styles.thanLastMonthContainer}>
                  <span className={styles.span3}>{`+10% `}</span>
                  <span className={styles.thanLastMonth}>than last month</span>
                </div>
              </div>
              <img className={styles.icon5} alt="" src="/icon.svg" />
            </div>
          </div>
          <div className={styles.totalTeachers}>
            <div className={styles.background9} />
            <div className={styles.div12}>
              <div className={styles.text8}>
                <div className={styles.totalEstudiantes}>Total Profesores</div>
                <b className={styles.b2}>754</b>
                <div className={styles.thanLastMonthContainer1}>
                  <span className={styles.span3}>{`-0,5% `}</span>
                  <span className={styles.thanLastMonth}>than last month</span>
                </div>
              </div>
              <img className={styles.icon5} alt="" src="/icon1.svg" />
            </div>
          </div>
          <div className={styles.totalBalance}>
            <div className={styles.background11} />
            <img className={styles.graphIcon} alt="" src="/graph.svg" />
            <div className={styles.div13}>
              <div className={styles.text9}>
                <div className={styles.totalEstudiantes}>Balance</div>
                <b className={styles.b2}>$123,456</b>
                <div className={styles.thanLastMonthContainer}>
                  <span className={styles.span3}>
                    <span>+23%</span>
                    <span className={styles.span6}>{` `}</span>
                  </span>
                  <span className={styles.thanLastMonth}>than last month</span>
                </div>
              </div>
              <img className={styles.icon5} alt="" src="/icon9.svg" />
            </div>
          </div>
        </div>
        <div className={styles.schoolExpense}>
          <div className={styles.bg5} />
          <div className={styles.pagination1}>
            <div className={styles.showing15FromContainer}>
              <span>{`Showing `}</span>
              <span className={styles.span}>1-5</span>
              <span className={styles.span1}>{` `}</span>
              <span>from</span>
              <span className={styles.span1}>{` 100 `}</span>
              <span>data</span>
            </div>
            <div className={styles.page1}>
              <img
                className={styles.dropdownIcon}
                alt=""
                src="/dropdown9.svg"
              />
              <div className={styles.div5}>
                <div className={styles.selectedpage} />
                <div className={styles.div6}>1</div>
              </div>
              <div className={styles.div7}>
                <div className={styles.background7} />
                <div className={styles.div8}>2</div>
              </div>
              <div className={styles.div7}>
                <div className={styles.background7} />
                <div className={styles.div8}>3</div>
              </div>
              <img
                className={styles.dropdownIcon}
                alt=""
                src="/dropdown10.svg"
              />
            </div>
          </div>
          <div className={styles.list1}>
            <div className={styles.div20}>
              <img className={styles.icon8} alt="" src="/icon10.svg" />
              <div className={styles.text10}>
                <div className={styles.div21}>#123456789</div>
                <div className={styles.march20211345}>
                  2 March 2021, 13:45 PM
                </div>
              </div>
              <div className={styles.complete}>Complete</div>
              <div className={styles.div22}>$ 50,036</div>
            </div>
            <div className={styles.div23}>
              <img className={styles.icon8} alt="" src="/icon10.svg" />
              <div className={styles.text10}>
                <div className={styles.div21}>#123456789</div>
                <div className={styles.march20211345}>
                  2 March 2021, 13:45 PM
                </div>
              </div>
              <div className={styles.pending}>Pending</div>
              <div className={styles.div22}>$ 50,036</div>
            </div>
            <div className={styles.div26}>
              <img className={styles.icon8} alt="" src="/icon10.svg" />
              <div className={styles.text10}>
                <div className={styles.div21}>#123456789</div>
                <div className={styles.march20211345}>
                  2 March 2021, 13:45 PM
                </div>
              </div>
              <div className={styles.canceled}>Canceled</div>
              <div className={styles.div22}>$ 50,036</div>
            </div>
            <div className={styles.div20}>
              <img className={styles.icon8} alt="" src="/icon10.svg" />
              <div className={styles.text10}>
                <div className={styles.div21}>#123456789</div>
                <div className={styles.march20211345}>
                  2 March 2021, 13:45 PM
                </div>
              </div>
              <div className={styles.complete}>Complete</div>
              <div className={styles.div22}>$ 50,036</div>
            </div>
            <div className={styles.div20}>
              <img className={styles.icon8} alt="" src="/icon10.svg" />
              <div className={styles.text10}>
                <div className={styles.div21}>#123456789</div>
                <div className={styles.march20211345}>
                  2 March 2021, 13:45 PM
                </div>
              </div>
              <div className={styles.complete}>Complete</div>
              <div className={styles.div22}>$ 50,036</div>
            </div>
            <div className={styles.div20}>
              <img className={styles.icon8} alt="" src="/icon10.svg" />
              <div className={styles.text10}>
                <div className={styles.div21}>#123456789</div>
                <div className={styles.march20211345}>
                  2 March 2021, 13:45 PM
                </div>
              </div>
              <div className={styles.complete}>Complete</div>
              <div className={styles.div22}>$ 50,036</div>
            </div>
          </div>
          <b className={styles.gastosEscolares}>Gastos Escolares</b>
        </div>
      </div>
    </div>
  );
};

export default Finance;
