import { useEffect } from 'react';
import './App.css';
import AppNavBar from './components/pages/AppNavBar';
import { Routes,Route } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import Home from './components/pages/Home';
import { useDispatch,useSelector } from 'react-redux';
import { getAuthUser } from './redux/actions/authactions';
import ProfileList from './components/pages/Profiles/ProfileList';
import DashboardAnnoncer from './components/pages/DashboardAnnoncer';
function App() {
  const dispatch=useDispatch()
  const getAuth=()=>{
  dispatch(getAuthUser())
  }
  useEffect(getAuth,[])
  const isAuth=useSelector((state)=>state.auth.isAuth)
  return (
    <div className="App">
    <AppNavBar />
    {isAuth &&
    <Routes>
      <Route path="/Dashboard" element={<Dashboard/>} />
      <Route path="/Profile" element={<ProfileList/>}/>
      </Routes>
        }
      <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/DashboardAnnoncer" element={<DashboardAnnoncer/>} />
</Routes>
  


    </div>
  );
}

export default App;
