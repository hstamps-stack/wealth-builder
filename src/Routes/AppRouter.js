import { Switch, Route } from 'react-router-dom';
// page components
import HomePage from '../pages/HomePage';
import Stocks from '../pages/StocksPage';
// Components
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


const AppRouter = () =>{
    return (
        <div>
            <Navbar />
            <div className=''>
                <Switch>
                    <Route path='/' exact component={HomePage} />
                    <Route path='/stocks' component={Stocks}/>
                </Switch>
            </div>
            <Footer/>
        </div>
    )
}

export default AppRouter;