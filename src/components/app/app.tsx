import { StrictMode, FC } from "react";
import { hot } from "react-hot-loader/root";

import MonitoringDashboard from "../monitoring-dashboard";

const App: FC = () => (
  <StrictMode>
    <MonitoringDashboard />
  </StrictMode>
);

export default hot(App);
