import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";
import Home from "./pages/public/Home";
import Activities from "./pages/public/Activities";
import ActivityDetail from "./pages/public/ActivityDetail";
import Skills from "./pages/public/Skills";
import SkillDetail from "./pages/public/SkillDetail";
import HealthCheck from "./pages/public/HealthCheck";
import About from "./pages/public/About";

// Pages Admin
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import ActivityManager from "./pages/admin/ActivityManager";
import AccountManager from "./pages/admin/AccountManager";
import HealthDataManager from "./pages/admin/HealthDataManager";
import ContentManager from "./pages/admin/ContentManager";

// Pages Volunteer
import VolunteerDashboard from "./pages/volunteer/VolunteerDashboard";
import AddPatient from "./pages/volunteer/AddPatient";
import VolunteerLogin from "./pages/volunteer/VolunteerLogin";
import PatientLookup from "./pages/shared/PatientLookup";
import Scanner from "./pages/volunteer/Scanner";
import PatientQRCode from './pages/shared/PatientQRCode';
import PatientDetail from './pages/shared/PatientDetail';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/activity/:id" element={<ActivityDetail />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/skills/:id" element={<SkillDetail />} />
            <Route path="/health-check" element={<HealthCheck />} />
            <Route path="/about" element={<About />} />

            <Route path="/admin/login" element={<Login />} />

            {/* NHÓM TRANG ADMIN (SỬ DỤNG ADMINLAYOUT) */}
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/activities" element={<ActivityManager />} />
            <Route path="/admin/accounts" element={<AccountManager />} />
            <Route path="/admin/health-data" element={<HealthDataManager />} />
            <Route path="/admin/content" element={<ContentManager />} />
            
            <Route path="/volunteer/dashboard" element={<VolunteerDashboard />} />
            {/* <Route path="/volunteer/AddPatient" element={<AddPatient />} /> */}
            <Route path="/volunteer/login" element={<VolunteerLogin />} />
            <Route path="/volunteer/add-patient" element={<AddPatient />} />
            <Route path="/volunteer/patient-lookup" element={<PatientLookup />} />
            <Route path="/volunteer/scanner" element={<Scanner />} />
            <Route path="/volunteer/patient-qr/:id" element={<PatientQRCode />} />
            <Route path="/volunteer/patient-detail/:id" element={<PatientDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
