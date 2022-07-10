import { CssBaseline } from '@mui/material';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Outlet
// } from 'react-router-dom';
import { 
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet
} from 'react-router-dom';
import "typeface-source-sans-pro";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Provider from 'react-redux/es/components/Provider';

import { SWRConfigProvider } from './components/Common/SWRConfigProvider/SWEConfigProvider';
import {ThemeContextProvider} from './context/ThemeContext';
import Wrapper from './components/Wrapper/Wrapper';
import AccountStats from './pages/Common/AccountStats';
import Dashboard from './pages/Common/Dashboard';
import ProjectBrief from './pages/Designer/Brief/ProjectBrief';
import ProjectsBriefs from './pages/Designer/Brief/ProjectsBriefs';
import ClientBrief from './pages/Designer/Clients/ClientBrief';
import ClientProject from './pages/Designer/Clients/ClientProject';
import ClientProjects from './pages/Designer/Clients/ClientProjects';
import ClientsAll from './pages/Designer/Clients/ClientsAll';
import ClientsBriefs from './pages/Designer/Clients/ClientsBriefs';
import ClientView from './pages/Designer/Clients/ClientView';
import ProjectNew from './pages/Designer/Projects/ProjectNew/ProjectNew';
import ProjectOne from './pages/Designer/Projects/ProjectOne';
import ProjectsAll from './pages/Designer/Projects/ProjectsAll';
import ProjectsStats from './pages/Designer/Projects/ProjectsStats';
import Invoices from './pages/Common/Invoices';
import Login from './pages/Common/Login';
import Notifications from './pages/Common/Notifications';
import Register from './pages/Register/Register';
import User from './pages/Common/User/User';
import Management from './pages/Common/Management';


import store from './app/store';

function App() {
  return (
    <div className="App">
        <ThemeContextProvider>
          <Provider store={store}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <SWRConfigProvider>
                <Router>
                  <CssBaseline/>
                  <Routes>
                    <Route path="/">
                      <Route path="/login" element={<Login/>}/>
                      <Route path="/register" element={<Register/>}/>
                      <Route element={<Wrapper><Outlet/></Wrapper>}>
                          <Route index element={<Dashboard/>}/>
                          <Route path="projects">
                              <Route index element={<ProjectsAll/>}/>
                              <Route path=":projectUuid" element={<ProjectOne/>}/>
                              <Route path="new" element={<ProjectNew/>}/>
                              <Route path="stats" element={<ProjectsStats/>}/>
                          </Route>
                          <Route path="briefs">
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
                          <Route path="account-stats" element={<AccountStats/>}/>
                          <Route path="business/invoices" element={<Invoices/>}/>
                          <Route path="business" element={<Management/>}/>
                          <Route path="notifications" element={<Notifications/>}/>
                          <Route path="user" element={<User/>}/>
                      </Route>
                    </Route>
                  </Routes>
                </Router>
              </SWRConfigProvider>
            </LocalizationProvider>
          </Provider>
        </ThemeContextProvider>
    </div>
  );
}

export default App;
