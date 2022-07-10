import axios from 'axios';

import { createRoot } from 'react-dom/client';

import App from './App';

// import { createRoot } from 'react-dom/client';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.withCredentials = true;

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);