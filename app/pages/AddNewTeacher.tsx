import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SideMenuContainer from "../components/SideMenuContainer";
import MenuContainer from "../components/MenuContainer";
import styles from "./AddNewTeacher.module.css";
const AddNewTeacher: FunctionComponent = () => {
  const navigate = useNavigate();

  const onDashboardContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onStudentsContainerClick = useCallback(() => {
    navigate("/estudiante");
  }, [navigate]);

  return (
    <div className={styles.addNewTeacher}>
      <SideMenuContainer
        home="/home3.svg"
        teacher="/teacher2.svg"
        contact="Profesores"
        calendar="/calendar.svg"
        finance="/finance4.svg"
        user1="/user4.svg"
        chat="/chat5.svg"
        activity="/activity5.svg"
        dashboard="Ultima Acividad"
        logoIcon
        backgroundHeight="1408px"
        listHeight="1408px"
        dashboardLeft="46px"
        dashboardCursor="unset"
        homeIconCursor="pointer"
        studentIconCursor="pointer"
        teacherIconBackgroundColor="#f2f7f5"
        teacherIconCursor="unset"
        eventColor="#00473e"
        calendarIconCursor="unset"
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
        onDashboardContainerClick={onDashboardContainerClick}
        onStudentsContainerClick={onStudentsContainerClick}
      />
      <b className={styles.agregarNuevoProfesor}>Agregar Nuevo Profesor</b>
      <MenuContainer productId="/gear4.svg" propLeft="1557px" />
      <div className={styles.personalDetail}>
        <div className={styles.bg} />
        <div className={styles.title}>
          <div className={styles.titleChild} />
          <b className={styles.detallesPersonales}>Detalles Personales</b>
        </div>
        <div className={styles.firstName}>
          <div className={styles.nombre}>Nombre*</div>
          <input
            className={styles.form}
            type="text"
            placeholder="Elian"
            maxLength={50}
            minLength={1}
          />
        </div>
        <div className={styles.lastName}>
          <div className={styles.nombre}>Apellido*</div>
          <input
            className={styles.form}
            type="text"
            placeholder="Gonzalez"
            maxLength={50}
            minLength={1}
          />
        </div>
        <div className={styles.photo}>
          <div className={styles.nombre}>Foto *</div>
          <input
            className={styles.form2}
            type="text"
            placeholder={`Drag and drop or 
click here to select file`}
            maxLength={50}
            minLength={1}
          />
        </div>
        <div className={styles.address}>
          <div className={styles.nombre}>Direccion *</div>
          <input
            className={styles.form3}
            type="text"
            defaultValue="0/2000"
            placeholder="lugar de nacimiento..."
            maxLength={50}
            minLength={1}
          />
        </div>
        <div className={styles.email}>
          <div className={styles.nombre}>Email *</div>
          <input
            className={styles.form}
            type="email"
            placeholder="correo@mail.om"
            maxLength={50}
            minLength={1}
          />
        </div>
        <div className={styles.phone}>
          <div className={styles.nombre}>Celular *</div>
          <input
            className={styles.form}
            type="text"
            placeholder="+507 12345678"
            maxLength={50}
            minLength={1}
          />
        </div>
        <div className={styles.dateBirth}>
          <div className={styles.fechaDeNaciemiento}>Fecha de Naciemiento*</div>
          <input
            className={styles.form}
            type="date"
            placeholder="24 Februari 1997"
            maxLength={50}
            minLength={1}
          />
        </div>
        <div className={styles.birthPlace}>
          <div className={styles.nombre}>Lugar de Nacimiento</div>
          <input
            className={styles.form}
            type="text"
            placeholder="Atalaya, Panamá"
            maxLength={50}
            minLength={1}
          />
        </div>
      </div>
      <div className={styles.education}>
        <div className={styles.bg1} />
        <div className={styles.title1}>
          <div className={styles.titleChild} />
          <b className={styles.educacion}>Educacion</b>
        </div>
        <div className={styles.firstName}>
          <div className={styles.nombre}>Universidad *</div>
          <div className={styles.form8}>
            <div className={styles.form9} />
            <div className={styles.universityAkademiHistoria}>
              University Akademi Historia
            </div>
          </div>
        </div>
        <div className={styles.lastName}>
          <div className={styles.nombre}>Titulo *</div>
          <div className={styles.form8}>
            <div className={styles.form9} />
            <div className={styles.universityAkademiHistoria}>
              History Major
            </div>
          </div>
        </div>
        <div className={styles.email}>
          <div className={styles.fechaDeIniciofinalizacion}>
            Fecha de Inicio/Finalizacion
          </div>
          <div className={styles.form12}>
            <div className={styles.form13}>
              <div className={styles.form9} />
              <div className={styles.september2013}>September 2013</div>
            </div>
            <div className={styles.form13}>
              <div className={styles.form9} />
              <div className={styles.september2013}>September 2017</div>
            </div>
          </div>
        </div>
        <div className={styles.phone}>
          <div className={styles.nombre}>Ciudada *</div>
          <div className={styles.form8}>
            <div className={styles.form9} />
            <div className={styles.universityAkademiHistoria}>
              Yogyakarta, Indonesia
            </div>
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <div className={styles.submitButton}>
          <div className={styles.subir}>Subir</div>
        </div>
        <div className={styles.draftButton}>
          <div className={styles.subir}>Guardar</div>
        </div>
      </div>
    </div>
  );
};

export default AddNewTeacher;
