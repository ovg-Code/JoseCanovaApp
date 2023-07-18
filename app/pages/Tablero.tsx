import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SearchContainer from "../components/SearchContainer";
import StudentContainer from "../components/StudentContainer";
import ChartContainer from "../components/ChartContainer";
import SunContainer from "../components/SunContainer";
import StudentIntuitionContainer from "../components/StudentIntuitionContainer";
import ChatContainer from "../components/ChatContainer";
import styles from "./Tablero.module.css";


const Tablero: FunctionComponent = () => {
  const navigate = useNavigate();

  const onStudentsClick = useCallback(() => {
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
    <div className={styles.tablero}>
      <div className={styles.sideMenu}>
        <div className={styles.list}>
          <div className={styles.dashboard}>
            <img className={styles.homeIcon} alt="" src="/images/home.svg" />
            <div className={styles.contact}>Tablero</div>
          </div>
          <button
            className={styles.students}
            autoFocus
            onClick={onStudentsClick}
          >
            <img className={styles.studentIcon} alt="" src="images/student.svg" />
            <div className={styles.email}>Estudiantes</div>
          </button>
          <div className={styles.teachers} onClick={onTeachersContainerClick}>
            <img className={styles.homeIcon} alt="" src="/images/teacher.svg" />
            <div className={styles.contact}>Profesores</div>
          </div>
          <div className={styles.teachers} onClick={onEventContainerClick}>
            <img className={styles.homeIcon} alt="" src="/images/calendar.svg" />
            <div className={styles.contact}>Eventos</div>
          </div>
          <div className={styles.teachers} onClick={onFinanceContainerClick}>
            <img className={styles.homeIcon} alt="" src="/images/finance.svg" />
            <div className={styles.contact}>Finanzas</div>
          </div>
          <div className={styles.user}>
            <img className={styles.homeIcon} alt="" src="/images/user.svg" />
            <div className={styles.contact}>Usuarios</div>
          </div>
          <div className={styles.user}>
            <img className={styles.homeIcon} alt="" src="/images/chat.svg" />
            <div className={styles.contact}>Chat</div>
          </div>
          <div className={styles.user}>
            <img className={styles.homeIcon} alt="" src="/images/activity.svg" />
            <div className={styles.contact}>Ultima actividad</div>
          </div>
        </div>
        <b className={styles.joseCanova}>JOSE CANOVA</b>
        <img className={styles.logoIcon} alt="" src="/images/logo@2x.png" />
      </div>
      <div className={styles.content}>
        <b className={styles.tablero1}>TABLERO</b>
        <SearchContainer
          searchText="/images/search.svg"
          searchPlaceholderText="Search here..."
        />
        <div className={styles.overview}>
          <div className={styles.content1}>
            <StudentContainer
              userType="Estudiantes"
              userCount="932"
              userImageUrl="/images/icon.svg"
            />
            <StudentContainer
              userType="Profesores"
              userCount="754"
              userImageUrl="/images/icon1.svg"
              propLeft="264px"
              propWidth="198px"
              propWidth1="94px"
              propBorderRadius="unset"
            />
            <StudentContainer
              userType="Eventos"
              userCount="40"
              userImageUrl="/images/icon2.svg"
              propLeft="530px"
              propWidth="174px"
              propWidth1="70px"
              propBorderRadius="var(--br-21xl) 0px 0px 40px"
            />
          </div>
        </div>
        <div className={styles.schoolPerformance}>
          <div className={styles.hint}>
            <div className={styles.legend}>
              <div className={styles.legendChild} />
              <div className={styles.text}>
                <div className={styles.ultimoTrimeste}>Ultimo Trimeste</div>
                <b className={styles.b}>1.356</b>
              </div>
            </div>
            <div className={styles.legend1}>
              <div className={styles.legendItem} />
              <div className={styles.text1}>
                <div className={styles.ultimoTrimeste}>Este trimestre</div>
                <b className={styles.b}>1.245</b>
              </div>
            </div>
          </div>
          <b className={styles.rendimientoEscolar}>Rendimiento escolar</b>
          <ChartContainer
            imageDimensions="/images/line.svg"
            imageDimensionIds="/images/chart.svg"
          />
        </div>
        <div className={styles.schoolFinance}>
          <b className={styles.finanzasEscolares}>Finanzas escolares</b>
          <div className={styles.chart}>
            <div className={styles.lines}>
              <div className={styles.lines1}>
                <div className={styles.line} />
                <div className={styles.line1} />
                <div className={styles.line2} />
                <div className={styles.line3} />
                <div className={styles.line4} />
                <div className={styles.line5} />
              </div>
              <div className={styles.lines2}>
                <div className={styles.line6} />
                <div className={styles.line7} />
                <div className={styles.line8} />
                <div className={styles.line9} />
                <div className={styles.line10} />
                <div className={styles.line11} />
              </div>
            </div>
            <div className={styles.numbers}>
              <div className={styles.div}>100</div>
              <div className={styles.div1}>80</div>
              <div className={styles.div2}>60</div>
              <div className={styles.div3}>40</div>
              <div className={styles.div4}>20</div>
              <div className={styles.div5}>0</div>
            </div>
            <div className={styles.day}>
              <div className={styles.mon}>Mon</div>
              <div className={styles.tue}>Tue</div>
              <div className={styles.wed}>Wed</div>
              <div className={styles.thu}>Thu</div>
              <div className={styles.fri}>Fri</div>
              <div className={styles.sat}>Sat</div>
              <div className={styles.sun}>Sun</div>
            </div>
            <div className={styles.graph}>
              <div className={styles.div6}>
                <div className={styles.bar} />
                <div className={styles.bar1} />
              </div>
              <div className={styles.div7}>
                <div className={styles.bar2} />
                <div className={styles.bar3} />
              </div>
              <div className={styles.div8}>
                <div className={styles.bar4} />
                <div className={styles.bar5} />
              </div>
              <div className={styles.div9}>
                <div className={styles.bar6} />
                <div className={styles.bar7} />
              </div>
              <div className={styles.div10}>
                <div className={styles.bar8} />
                <div className={styles.bar9} />
              </div>
              <div className={styles.div11}>
                <div className={styles.bar10} />
                <div className={styles.bar11} />
              </div>
              <div className={styles.div12}>
                <div className={styles.bar12} />
                <div className={styles.bar13} />
              </div>
            </div>
            <div className={styles.details}>
              <img className={styles.unionIcon} alt="" src="/images/union.svg" />
              <b className={styles.b2}>42%</b>
              <div className={styles.income}>982 Income</div>
            </div>
          </div>
          <div className={styles.hint1}>
            <div className={styles.legend2}>
              <div className={styles.legendInner} />
              <div className={styles.text2}>
                <div className={styles.ultimoTrimeste}>{`Pasada `}</div>
                <b className={styles.b}>1.356</b>
              </div>
            </div>
            <div className={styles.legend3}>
              <div className={styles.ellipseDiv} />
              <div className={styles.text3}>
                <div className={styles.ultimoTrimeste}>Esta Semana</div>
                <b className={styles.b}>1.245</b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.schoolCalendar}>
          <img className={styles.backgroundIcon} alt="" src="/images/background.svg" />
          <b className={styles.calendarioEscolar}>Calendario escolar</b>
          <div className={styles.month}>
            <div className={styles.title}>March 2021</div>
            <img className={styles.dropdownIcon} alt="" src="/images/dropdown.svg" />
          </div>
          <div className={styles.week}>
            <SunContainer
              prop="4"
              prop1="31"
              prop2="1"
              prop3="2"
              prop4="3"
              prop5="5"
              prop6="6"
            />
            <div className={styles.week02}>
              <div className={styles.date}>
                <div className={styles.date1}>
                  <div className={styles.ultimoTrimeste}>11</div>
                </div>
              </div>
              <div className={styles.date2}>
                <div className={styles.date3}>
                  <div className={styles.ultimoTrimeste}>7</div>
                </div>
              </div>
              <div className={styles.date4}>
                <div className={styles.date5}>
                  <div className={styles.tag}>
                    <div className={styles.bg} />
                    <div className={styles.div15}>8</div>
                  </div>
                </div>
              </div>
              <div className={styles.date6}>
                <div className={styles.date7}>
                  <div className={styles.ultimoTrimeste}>9</div>
                </div>
              </div>
              <div className={styles.date8}>
                <div className={styles.date9}>
                  <div className={styles.ultimoTrimeste}>10</div>
                </div>
              </div>
              <div className={styles.date10}>
                <div className={styles.date11}>
                  <div className={styles.ultimoTrimeste}>12</div>
                </div>
              </div>
              <div className={styles.date12}>
                <div className={styles.date3}>
                  <div className={styles.ultimoTrimeste}>13</div>
                </div>
              </div>
            </div>
            <div className={styles.week03}>
              <div className={styles.date}>
                <div className={styles.date1}>
                  <div className={styles.ultimoTrimeste}>18</div>
                </div>
              </div>
              <div className={styles.date2}>
                <div className={styles.date3}>
                  <div className={styles.ultimoTrimeste}>14</div>
                </div>
              </div>
              <div className={styles.date18}>
                <div className={styles.date5}>
                  <div className={styles.ultimoTrimeste}>15</div>
                </div>
              </div>
              <div className={styles.date6}>
                <div className={styles.date7}>
                  <div className={styles.ultimoTrimeste}>16</div>
                </div>
              </div>
              <div className={styles.date8}>
                <div className={styles.date9}>
                  <div className={styles.ultimoTrimeste}>17</div>
                </div>
              </div>
              <div className={styles.date10}>
                <div className={styles.date11}>
                  <div className={styles.ultimoTrimeste}>19</div>
                </div>
              </div>
              <div className={styles.date26}>
                <div className={styles.date3}>
                  <div className={styles.tag}>
                    <div className={styles.bg1} />
                    <div className={styles.div26}>20</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.week04}>
              <div className={styles.date}>
                <div className={styles.date1}>
                  <div className={styles.ultimoTrimeste}>25</div>
                </div>
              </div>
              <div className={styles.date2}>
                <div className={styles.date3}>
                  <div className={styles.ultimoTrimeste}>21</div>
                </div>
              </div>
              <div className={styles.date18}>
                <div className={styles.date5}>
                  <div className={styles.ultimoTrimeste}>22</div>
                </div>
              </div>
              <div className={styles.date34}>
                <div className={styles.date7}>
                  <div className={styles.tag}>
                    <div className={styles.bg2} />
                    <div className={styles.div30}>23</div>
                  </div>
                </div>
              </div>
              <div className={styles.date8}>
                <div className={styles.date9}>
                  <div className={styles.ultimoTrimeste}>24</div>
                </div>
              </div>
              <div className={styles.date10}>
                <div className={styles.date11}>
                  <div className={styles.ultimoTrimeste}>26</div>
                </div>
              </div>
              <div className={styles.date12}>
                <div className={styles.date3}>
                  <div className={styles.ultimoTrimeste}>27</div>
                </div>
              </div>
            </div>
            <SunContainer
              prop="1"
              prop1="28"
              prop2="29"
              prop3="30"
              prop4="31"
              prop5="2"
              prop6="3"
              propTop="296px"
              propColor="#475d5b"
              propColor1="#fb7d5b"
              propBackgroundColor="unset"
              propColor2="#475d5b"
              propColor3="#475d5b"
            />
          </div>
          <div className={styles.days}>
            <div className={styles.sunday}>
              <div className={styles.ultimoTrimeste}>Sun</div>
            </div>
            <div className={styles.monday}>
              <div className={styles.ultimoTrimeste}>Mon</div>
            </div>
            <div className={styles.tuesday}>
              <div className={styles.ultimoTrimeste}>Tue</div>
            </div>
            <div className={styles.wednesday}>
              <div className={styles.ultimoTrimeste}>Wed</div>
            </div>
            <div className={styles.thursday}>
              <div className={styles.ultimoTrimeste}>Thu</div>
            </div>
            <div className={styles.friday}>
              <div className={styles.ultimoTrimeste}>Fri</div>
            </div>
            <div className={styles.saturday}>
              <div className={styles.ultimoTrimeste}>Sat</div>
            </div>
          </div>
        </div>
        <div className={styles.unpaidStudent}>
          <b className={styles.intuicinEstudiantilNo}>
            Intuición estudiantil no remunerada
          </b>
          <div className={styles.list1}>
            <StudentIntuitionContainer nameText="Samantha William" />
            <StudentIntuitionContainer nameText="Tony Soap" />
            <StudentIntuitionContainer nameText="Jordan Nico" />
            <StudentIntuitionContainer nameText="Karen Hope" />
            <StudentIntuitionContainer nameText="Nadila Adja" />
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
                className={styles.dropdownIcon1}
                alt=""
                src="/images/dropdown1.svg"
              />
              <div className={styles.div34}>
                <div className={styles.div35}>1</div>
              </div>
              <div className={styles.div36}>
                <div className={styles.div37}>2</div>
              </div>
              <div className={styles.div36}>
                <div className={styles.div37}>3</div>
              </div>
              <img
                className={styles.dropdownIcon1}
                alt=""
                src="/images/dropdown2.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightMenu}>
        <div className={styles.menu}>
          <div className={styles.placeholder} />
          <div className={styles.name}>
            <div className={styles.nabilaA}>Nabila A.</div>
            <div className={styles.admin}>Admin</div>
          </div>
          <img
            className={styles.notificationIcon}
            alt=""
            src="/images/notification.svg"
          />
          <img className={styles.settingIcon} alt="" src="/images/setting.svg" />
        </div>
        <div className={styles.contact1}>
          <div className={styles.btncta}>
            <b className={styles.b5}>+</b>
          </div>
          <div className={styles.title1}>
            <b className={styles.alumnosRecientes}>Alumnos Recientes</b>
            <div className={styles.youHave456Container}>
              <span>{`You have `}</span>
              <span className={styles.span3}>456</span>
              <span> students</span>
            </div>
          </div>
          <div className={styles.div40}>
            <img
              className={styles.mailButtonIcon}
              alt=""
              src="/images/mail-button.svg"
            />
            <div className={styles.text4}>
              <div className={styles.samanthaWilliam}>Samantha William</div>
              <div className={styles.classViiA}>Class VII A</div>
            </div>
            <div className={styles.placeholder1} />
          </div>
          <div className={styles.div41}>
            <img
              className={styles.mailButtonIcon}
              alt=""
              src="/images/mail-button1.svg"
            />
            <div className={styles.text5}>
              <div className={styles.samanthaWilliam}>Tony Soap</div>
              <div className={styles.classViiA}>Class VII A</div>
            </div>
            <div className={styles.placeholder1} />
          </div>
          <div className={styles.div42}>
            <img
              className={styles.mailButtonIcon}
              alt=""
              src="/images/mail-button2.svg"
            />
            <div className={styles.text6}>
              <div className={styles.samanthaWilliam}>Karen Hope</div>
              <div className={styles.classViiA}>Class VII A</div>
            </div>
            <div className={styles.placeholder1} />
          </div>
          <div className={styles.div43}>
            <img
              className={styles.mailButtonIcon}
              alt=""
              src="/images/mail-button2.svg"
            />
            <div className={styles.text7}>
              <div className={styles.samanthaWilliam}>Jordan Nico</div>
              <div className={styles.classViiA}>Class VII B</div>
            </div>
            <div className={styles.placeholder1} />
          </div>
          <div className={styles.div44}>
            <img
              className={styles.mailButtonIcon}
              alt=""
              src="/images/mail-button2.svg"
            />
            <div className={styles.text6}>
              <div className={styles.samanthaWilliam}>Nadila Adja</div>
              <div className={styles.classViiA}>Class VII B</div>
            </div>
            <div className={styles.placeholder1} />
          </div>
          <div className={styles.btnviewmore}>
            <div className={styles.viewMore}>View More</div>
          </div>
        </div>
        <div className={styles.message}>
          <b className={styles.title}>Mensajes</b>
          <div className={styles.btnviewmore1}>
            <div className={styles.verMs}>Ver Más</div>
          </div>
          <div className={styles.chat1}>
            <ChatContainer nameText="Samantha William" />
            <ChatContainer nameText="Tony Soap" propTop="92px" />
            <ChatContainer nameText="Jordan Nico" propTop="184px" />
            <ChatContainer nameText="Nadila Adja" propTop="276px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tablero;
