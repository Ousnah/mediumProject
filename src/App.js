import './App.css';

import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';

import HomeScreen from './Screens/HomeScreens';
import Navigation from './Components/Nav';
import { StoreProvider } from "./Providers/Store"
import RegisterScreen from './Screens/RegisterScreen';

function App() {

    return (
        <StoreProvider>
            <BrowserRouter>
                <Navigation />

                <Routes>
                    <Route path='/' element={<HomeScreen />}></Route>
                    <Route path='/register' element={<RegisterScreen />}></Route>
                </Routes>

            </BrowserRouter>
        </StoreProvider>
    )

}
export default App;
