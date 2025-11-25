import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Card from './components/Card';
import Sales from './components/Sales';

function AppRoutes(){
return(
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Result' element={<Card/>}/>
        <Route path='/Sales' element={<Sales/>}/>
    </Routes>
);

}
export default AppRoutes;