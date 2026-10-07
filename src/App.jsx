import { Navigate, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";

import Screenings from "./pages/Screenings";
import UploadScreening from "./pages/UploadScreening";
import ScreeningDetails from "./pages/ScreeningDetails";
import Reports from "./pages/Reports";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

import Patients from "./pages/Patients";
import PatientProfile from "./pages/PatientProfile";
import UrgentCases from "./pages/UrgentCases";
import Analytics from "./pages/Analytics";

import Recommendations from "./pages/Recommendations";
import Notifications from "./pages/Notifications";
import HelpSupport from "./pages/HelpSupport";

import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      {/* Default */}
      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />

      {/* Authentication */}
      <Route path="/login" element={<Login />} />

      {/* User Routes */}
      <Route
        path="/user-dashboard"
        element={<UserDashboard />}
      />

      <Route
        path="/screenings"
        element={<Screenings />}
      />

      <Route
        path="/upload-screening"
        element={<UploadScreening />}
      />

      <Route
        path="/screenings/:id"
        element={<ScreeningDetails />}
      />

      <Route
        path="/reports"
        element={<Reports />}
      />

      <Route
        path="/recommendations"
        element={<Recommendations />}
      />

      <Route
        path="/notifications"
        element={<Notifications />}
      />

      <Route
        path="/help-support"
        element={<HelpSupport />}
      />

      <Route
        path="/profile"
        element={<Profile />}
      />

      <Route
        path="/settings"
        element={<Settings />}
      />

      {/* Admin Routes */}
      <Route
        path="/patients"
        element={<Patients />}
      />

      <Route
        path="/patients/:id"
        element={<PatientProfile />}
      />

      <Route
        path="/admin-dashboard"
        element={<AdminDashboard />}
      />

      <Route
        path="/urgent-cases"
        element={<UrgentCases />}
      />

      <Route
        path="/analytics"
        element={<Analytics />}
      />

      {/* 404 */}
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
}

export default App;