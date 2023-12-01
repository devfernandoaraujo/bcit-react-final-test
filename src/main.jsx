 import ReactDOM from 'react-dom/client' 
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <div className='container-fluid text-center'>
    <div className='row justify-content-center'>
         <App />
    </div>
  </div>
   
  </BrowserRouter>,
)
