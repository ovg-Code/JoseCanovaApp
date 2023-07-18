import { FunctionComponent } from "react";
import SideMenuContainer from "../components/SideMenuContainer";
import MenuContainer from "../components/MenuContainer";
import SearchContainer from "../components/SearchContainer";
import styles from "./NotificationLastestActivit.module.css";
const NotificationLastestActivit: FunctionComponent = () => {
  return (
    <div className={styles.notificationLastestActivit}>
      <SideMenuContainer
        home="/home3.svg"
        teacher="/teacher.svg"
        contact="Profesores"
        calendar="/calendar.svg"
        finance="/finance3.svg"
        user1="/user3.svg"
        chat="/chat3.svg"
        activity="/activity3.svg"
        dashboard="Ultima Actividad"
        logoIcon={false}
      />
      <b
        className={styles.notificacionesYUltimas}
      >{`Notificaciones y ultimas actividades `}</b>
      <MenuContainer productId="/gear3.svg" propLeft="1557px" />
      <SearchContainer
        searchText="/search2.svg"
        searchPlaceholderText="Search here..."
        propTop="50px"
        propLeft="calc(50% + 183px)"
      />
      <div className={styles.activity}>
        <div className={styles.bg} />
        <div className={styles.yesterday}>
          <div className={styles.divider} />
          <div className={styles.yesterday1}>
            <div className={styles.title}>
              <b className={styles.ayer}>Ayer</b>
            </div>
            <div className={styles.activity1}>
              <div className={styles.div}>
                <div className={styles.text}>
                  <div className={styles.ayer}>Sunday, June 30 2020</div>
                  <div className={styles.johnnyAhmadMentionedContainer}>
                    <span>
                      <b className={styles.johnnyAhmad}>{`Johnny Ahmad `}</b>
                      <span className={styles.johnnyAhmad}>
                        mentioned you at
                      </span>
                      <b className={styles.b}>{` `}</b>
                    </span>
                    <b className={styles.b}>
                      <span>Art Class Homework</span>
                    </b>
                  </div>
                </div>
                <div className={styles.icon}>
                  <div className={styles.background} />
                </div>
              </div>
              <div className={styles.div1}>
                <div className={styles.text1}>
                  <div className={styles.ayer}>Sunday, June 30 2020</div>
                  <div className={styles.johnnyAhmadMentionedContainer}>
                    <b>{`Nadila Adja `}</b>
                    <span>mentioned you at</span>
                    <b> Programming Homework</b>
                  </div>
                </div>
                <div className={styles.icon}>
                  <div className={styles.background} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.today}>
          <div className={styles.title1}>
            <b className={styles.ayer}>Hoy</b>
          </div>
          <div className={styles.activity2}>
            <div className={styles.divider1} />
            <div className={styles.div2}>
              <div className={styles.text2}>
                <div className={styles.ayer}>Monday, June 31 2020</div>
                <div className={styles.karenHopeHasContainer}>
                  <span>
                    <b className={styles.johnnyAhmad}>Karen Hope</b>
                    <b className={styles.b1}>{` `}</b>
                    <span>has created new task at</span>
                    <b className={styles.johnnyAhmad}>{` `}</b>
                  </span>
                  <span className={styles.historyLesson}>HIstory Lesson</span>
                </div>
              </div>
              <div className={styles.icon2}>
                <div className={styles.background} />
              </div>
            </div>
            <div className={styles.div3}>
              <div className={styles.text3}>
                <div className={styles.ayer}>Monday, June 31 2020</div>
                <div className={styles.johnnyAhmadMentionedContainer}>
                  <span>
                    <span className={styles.reminder}>
                      <span className={styles.reminder1}>[REMINDER]</span>
                    </span>
                    <span className={styles.dueDateO}>
                      <span className={styles.reminder}>{` `}</span>
                      <span>Due date o</span>
                    </span>
                  </span>
                  <span className={styles.dueDateO}>
                    <span>
                      <span>f</span>
                    </span>
                  </span>
                  <span>
                    <span className={styles.scienceHomework}>
                      <span className={styles.dueDateO}>{` `}</span>
                      <span className={styles.reminder1}>Science Homework</span>
                    </span>
                    <span>
                      <span className={styles.scienceHomework}>{` `}</span>
                      <span>task will be coming</span>
                    </span>
                  </span>
                </div>
              </div>
              <div className={styles.icon}>
                <div className={styles.background} />
              </div>
            </div>
            <div className={styles.div4}>
              <div className={styles.text4}>
                <div className={styles.ayer}>Monday, June 31 2020</div>
                <div className={styles.johnnyAhmadMentionedContainer}>
                  <span>
                    <b className={styles.johnnyAhmad}>Tony Soap</b>
                    <span className={styles.scienceHomework}>{` `}</span>
                    <span>commented at</span>
                  </span>
                  <b className={styles.b3}>{` `}</b>
                  <span className={styles.scienceHomework2}>
                    Science Homework
                  </span>
                </div>
              </div>
              <div className={styles.icon}>
                <div className={styles.background} />
              </div>
            </div>
            <div className={styles.div5}>
              <div className={styles.text5}>
                <div className={styles.ayer}>Monday, June 31 2020</div>
                <div className={styles.johnnyAhmadMentionedContainer}>
                  <b>Samantha William</b>
                  <span className={styles.reminder}>{` `}</span>
                  <span>add 4 files on</span>
                  <span className={styles.reminder}>{` Art Class `}</span>
                </div>
              </div>
              <div className={styles.icon}>
                <div className={styles.background} />
              </div>
              <div className={styles.placeholder}>
                <div className={styles.placeholder1} />
                <div className={styles.placeholder2} />
                <div className={styles.placeholder3} />
                <div className={styles.placeholder4} />
              </div>
            </div>
            <div className={styles.div6}>
              <div className={styles.text6}>
                <div className={styles.ayer}>Monday, June 31 2020</div>
                <div className={styles.johnnyAhmadMentionedContainer}>
                  <span>
                    <b className={styles.johnnyAhmad}>{`You `}</b>
                    <span>has moved</span>
                    <span className={styles.scienceHomework}>{` `}</span>
                  </span>
                  <b
                    className={styles.biologyHomework}
                  >{`“Biology Homework” `}</b>
                  <span>
                    <span>{`task to `}</span>
                    <span className={styles.scienceHomework}>Done</span>
                  </span>
                </div>
              </div>
              <div className={styles.icon}>
                <div className={styles.background} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationLastestActivit;
