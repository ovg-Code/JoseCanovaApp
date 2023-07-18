import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SideMenuContainer from "../components/SideMenuContainer";
import MenuContainer from "../components/MenuContainer";
import styles from "./AddNewStudent.module.css";
const AddNewStudent: FunctionComponent = () => {
  const navigate = useNavigate();

  const onDashboardContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onStudentsContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.addNewStudent}>
      <SideMenuContainer
        home="/images/home3.svg"
        teacher="/images/teacher2.svg"
        contact="Profesores"
        calendar="/images/calendar.svg"
        finance="/images/finance4.svg"
        user1="/images/user4.svg"
        chat="/images/chat5.svg"
        activity="/images/activity5.svg"
        dashboard="Ultima Acividad"
        logoIcon
        backgroundHeight="1688px"
        listHeight="1688px"
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
      <b className={styles.aadirNuevoEstudiante}>Añadir Nuevo Estudiante</b>
      <MenuContainer productId="/images/gear4.svg" propLeft="1557px" />
      <div className={styles.studentDetails}>
        <div className={styles.bg} />
        <div className={styles.title}>
          <div className={styles.titleChild} />
          <b className={styles.detallesDeEstudiante}>Detalles de Estudiante</b>
        </div>
        <div className={styles.photo}>
          <div className={styles.foto}>Foto *</div>
          <div className={styles.form}>
            <div className={styles.form1} />
            <div className={styles.dragAndDropContainer}>
              <p className={styles.dragAndDrop}>{`Drag and drop or `}</p>
              <p className={styles.dragAndDrop}>click here to select file</p>
            </div>
          </div>
        </div>
        <div className={styles.firstName}>
          <div className={styles.foto}>Nombre Primer*</div>
          <input
            className={styles.form2}
            type="text"
            placeholder="Primer Nombre"
            maxLength={50}
            minLength={1}
          />
        </div>
        <div className={styles.SecondName}>
          <div className={styles.foto}>Segundo Nombre</div>
          <input
            className={styles.form2}
            type="text"
            placeholder="Segundo Nombre"
            maxLength={50}
            minLength={1}
          />
        </div>

        <div className={styles.firstLastName}>
          <div className={styles.foto}>Primer Apellido *</div>
          <input
            className={styles.form2}
            type="text"
            placeholder="William"
            maxLength={50}
            minLength={1}
          />
        </div>

        <div className={styles.secondLastName}>
          <div className={styles.foto}>segundo Apellido *</div>
          <input
            className={styles.form2}
            type="text"
            placeholder="William"
            maxLength={50}
            minLength={1}
          />
        </div>

        <div className={styles.address}>
          <div className={styles.foto}>Direccion *</div>
          <input
            className={styles.form4}
            type="text"
            defaultValue="0/2000"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            maxLength={50}
            minLength={1}
          />
        </div>
        <div className={styles.email}>
          <div className={styles.foto}>Email *</div>
          <input
            className={styles.form2}
            type="email"
            placeholder="william@mail.com"
            maxLength={50}
            minLength={1}
          />
        </div>
        <div className={styles.phone}>
          <div className={styles.foto}>Telefono*</div>
          <div className={styles.form6}>
            <input className={styles.form7} type="text" maxLength={50} minLength={1} />
            <div className={styles.div}>+1234567890</div>
          </div>
        </div>
        <div className={styles.dateBirth}>
          <div className={styles.fechaYLugar}>Fecha y Lugar de Nacimiento</div>
          <div className={styles.form8}>
            <input
              className={styles.form9}
              type="text"
              placeholder="24 Februari 1997"
              maxLength={50}
              minLength={1}
            />
            <div className={styles.form10}>
              <input className={styles.form7} type="text" maxLength={50} minLength={1} />
            </div>
          </div>
        </div>
        <div className={styles.parentName}>
          <div className={styles.nombreDelAcudiente}>Cedula del Acudiente</div>
          <input
            className={styles.form2}
            type="text"
            placeholder="Mana William"
            maxLength={50}
            minLength={1}
          />
        </div>
      </div>
      <div className={styles.parentDetails}>
        <div className={styles.bg1} />
        <div className={styles.payments}>
          <div className={styles.pagoParent}>
            <div className={styles.foto}>Pago *</div>
            <select className={styles.frameChild} />
          </div>
        </div>
        <div className={styles.title}>
          <div className={styles.titleChild} />
          <b className={styles.detallesDelAcudiente}>Detalles del Acudiente</b>
        </div>
        <div className={styles.firstName1}>
          <div className={styles.foto}>Nombre*</div>
          <input className={styles.form2} type="text" maxLength={50} minLength={1} />
        </div>
        <div className={styles.lastName1}>
          <div className={styles.foto}>Apellido*</div>
          <input
            className={styles.form2}
            type="text"
            placeholder="William"
            maxLength={50}
            minLength={1}
          />
        </div>
        <div className={styles.address1}>
          <div className={styles.foto}>Direccion *</div>
          <input
            className={styles.form4}
            type="text"
            defaultValue="0/2000"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            maxLength={50}
            minLength={1}
          />
        </div>
        <div className={styles.email2}>
          <div className={styles.foto}>Email *</div>
          <input
            className={styles.form2}
            type="email"
            placeholder="Mana@mail.com"
            maxLength={50}
            minLength={1}
          />
        </div>
        <div className={styles.phone1}>
          <div className={styles.foto}>Telefono*</div>
          <input
            className={styles.form2}
            type="text"
            placeholder="+1234567890"
            maxLength={50}
            minLength={1}
          />
        </div>
      </div>
      <div className={styles.button}>
        <button className={styles.submitButton}>
          <div className={styles.subir}>Subir</div>
        </button>
        <button className={styles.draftButton}>
          <div className={styles.guardar}>Guardar</div>
        </button>
      </div>
    </div>
  );
};

export default AddNewStudent;
