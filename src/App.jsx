import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Login from './pages/Login/Login';
import BoardPage from './pages/Board/Board';
import Calendar from './pages/Calendar/Calendar';


const App = () => {
  return <div id="dashboard">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>

          <Route path="calendar" element={<Calendar/>}/>
          <Route path="board" element={<BoardPage/>}/>
          <Route path="login" element={<Login/>}/>
          
        </Route>

      </Routes>
    </BrowserRouter>
  </div>
};



export default App;
