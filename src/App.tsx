import { CssBaseline } from '@mui/material';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import {ThemeContextProvider} from './context/ThemeContext';
import Dashboard from './pages/Dashboard';
import ProjectBrief from './pages/Designer/Projects/Brief/ProjectBrief';
import ProjectsBriefs from './pages/Designer/Projects/Brief/ProjectsBriefs';
import ProjectNew from './pages/Designer/Projects/ProjectNew';
import ProjectOne from './pages/Designer/Projects/ProjectOne';
import ProjectsAll from './pages/Designer/Projects/ProjectsAll';
import ProjectsStats from './pages/Designer/Projects/ProjectsStats';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <CssBaseline/>
        <Navigation>
          <Router>
            <Routes>
              <Route path="/">
                <Route index element={<Dashboard/>}/>
                <Route path="login" element={<Login/>}/>
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
              </Route>
              <Route/>
            </Routes>
          </Router>
        </Navigation>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
