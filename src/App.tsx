import { BrowserRouter } from 'react-router-dom';
import './assets/styles/nullstyle.scss'
import { Routes } from './routes';


 
export function App() {
  return (
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>  
  );
}

