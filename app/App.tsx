import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Tablero from "./pages/Tablero";
import Estudiante from "./pages/Estudiante";
import DashboardLogin from "./pages/DashboardLogin";
import DashboardLoginDarkTheme from "./pages/DashboardLoginDarkTheme";
import ColorTextStyles from "./pages/ColorTextStyles";
import FormElements from "./pages/FormElements";
import NotificationLastestActivit from "./pages/NotificationLastestActivit";
import Chat from "./pages/Chat";
import AddNewStudent from "./pages/AddNewStudent";
import AddNewTeacher from "./pages/AddNewTeacher";
import UserDashboard from "./pages/UserDashboard";
import StudentDetails from "./pages/StudentDetails";
import TeacherDetails from "./pages/TeacherDetails";
import Finance from "./pages/Finance";
import Events from "./pages/Events";
import Teachers from "./pages/Teachers";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/estudiante":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-login":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-login-dark-theme":
        title = "";
        metaDescription = "";
        break;
      case "/color-text-styles":
        title = "";
        metaDescription = "";
        break;
      case "/form-elements":
        title = "";
        metaDescription = "";
        break;
      case "/notification-lastest-activity":
        title = "";
        metaDescription = "";
        break;
      case "/chat":
        title = "";
        metaDescription = "";
        break;
      case "/add-new-student":
        title = "";
        metaDescription = "";
        break;
      case "/add-new-teacher":
        title = "";
        metaDescription = "";
        break;
      case "/user-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/student-details":
        title = "";
        metaDescription = "";
        break;
      case "/teacher-details":
        title = "";
        metaDescription = "";
        break;
      case "/finance":
        title = "";
        metaDescription = "";
        break;
      case "/events":
        title = "";
        metaDescription = "";
        break;
      case "/teachers":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Tablero />} />
      <Route path="/estudiante" element={<Estudiante />} />
      <Route path="/dashboard-login" element={<DashboardLogin />} />
      <Route
        path="/dashboard-login-dark-theme"
        element={<DashboardLoginDarkTheme />}
      />
      <Route path="/color-text-styles" element={<ColorTextStyles />} />
      <Route path="/form-elements" element={<FormElements />} />
      <Route
        path="/notification-lastest-activity"
        element={<NotificationLastestActivit />}
      />
      <Route path="/chat" element={<Chat />} />
      <Route path="/add-new-student" element={<AddNewStudent />} />
      <Route path="/add-new-teacher" element={<AddNewTeacher />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
      <Route path="/student-details" element={<StudentDetails />} />
      <Route path="/teacher-details" element={<TeacherDetails />} />
      <Route path="/finance" element={<Finance />} />
      <Route path="/events" element={<Events />} />
      <Route path="/teachers" element={<Teachers />} />
    </Routes>
  );
}
export default App;
