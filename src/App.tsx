import { CssBaseline } from '@mui/material';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import "typeface-source-sans-pro";
import Navigation from './components/Navigation/Navigation';
import {ThemeContextProvider} from './context/ThemeContext';
import AccountStats from './pages/AccountStats';
import Dashboard from './pages/Dashboard';
import ProjectBrief from './pages/Designer/Brief/ProjectBrief';
import ProjectsBriefs from './pages/Designer/Brief/ProjectsBriefs';
import ClientBrief from './pages/Designer/Clients/ClientBrief';
import ClientProject from './pages/Designer/Clients/ClientProject';
import ClientProjects from './pages/Designer/Clients/ClientProjects';
import ClientsAll from './pages/Designer/Clients/ClientsAll';
import ClientsBriefs from './pages/Designer/Clients/ClientsBriefs';
import ClientView from './pages/Designer/Clients/ClientView';
import ProjectNew from './pages/Designer/Projects/ProjectNew';
import ProjectOne from './pages/Designer/Projects/ProjectOne';
import ProjectsAll from './pages/Designer/Projects/ProjectsAll';
import ProjectsStats from './pages/Designer/Projects/ProjectsStats';
import Login from './pages/Login';
import Notifications from './pages/Notifications';
import Register from './pages/Register/Register';
import Settings from './pages/Settings';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Router>
          <CssBaseline/>
          <Routes>
              <Route path="/">
                  <Route index element={<Register/>}/>
                  <Route path="login" element={<Login/>}/>
                  <Route path="dashboard" element={<Dashboard/>}/>
                  <Route path="projects">
                      <Route index element={<ProjectsAll/>}/>
                      <Route path=":projectUuid" element={<ProjectOne/>}/>
                      <Route path="new" element={<ProjectNew/>}/>
                      <Route path="stats" element={<ProjectsStats/>}/>
                  </Route>
                  <Route path="brief">
                      <Route index element={<ProjectsBriefs/>}/>
                      <Route path=":briefUuid" element={<ProjectBrief/>}/>
                  </Route>
                  <Route path="clients">
                      <Route index element={<ClientsAll/>}/>
                      <Route path=":clientUuid">
                          <Route index element={<ClientView/>}/>                        
                          <Route path="briefs">
                              <Route index element={<ClientsBriefs/>}/>
                              <Route path=":briefUuid" element={<ClientBrief/>}/>
                          </Route>
                          <Route path="projects">
                            <Route index element={<ClientProjects/>}/>
                            <Route path=":projectUuid" element={<ClientProject/>}/>
                          </Route>
                      </Route>
                      <Route path="briefs" element={<ClientsBriefs/>}/>
                  </Route>
                  <Route path="notifications" element={<Notifications/>}/>
                  <Route path="account-stats" element={<AccountStats/>}/>
                  <Route path="settings" element={<Settings/>}/>
              </Route>
          </Routes>
        </Router>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
