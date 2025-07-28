import { Navigate, Route, Routes } from "react-router-dom";
import User from "../pages/User";
import MainLayout from "../layouts/MainLayout";
import NotFound from "@pages/NotFound";
import Dashboard from "../pages/Dashboard";
import Supplements from "../pages/Supplements";
import BioScore from "../pages/BioScore";
import AICoach from "../pages/AICoach";
import Protocols from "../pages/Protocols";
import Settings from "../pages/Settings"
import UserDetail from "../pages/UserDeatil";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="/user" element={<User />} />
        <Route path="/supplements" element={<Supplements  />}/>
        <Route path = "/bioScore" element={<BioScore/>}/>
        <Route path = "/aicoach" element={<AICoach/>}/>
        <Route path = "/protocols" element={<Protocols/>}/>
        <Route path = "/settings" element={<Settings/>}/>
<Route path="/user-detail/:id" element={<UserDetail />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
