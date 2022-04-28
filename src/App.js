import React, { Suspense, useState} from "react";
import useWindowSize from "./components/UseWindowSize/UseWindowSize";
import { Route, Switch, Redirect} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Exhibition from "./components/Exhibition/Exhibition";
import Header from "./components/Header/Header";
import GridPage from "./components/GridPage/GridPage";
import Yarat from "./components/YaratStudio/Yarat";
import Painting from "./components/PaintingMuseeum/Painting";
import YayGallery from "./components/YayGallery/YayGallery";
import Space from "./components/Space/Space";
import YaratCenter from "./components/YaratCenter/YaratCenter";
import MenuList from "./components/MenuList/MenuList";
const Menu = React.lazy(() => import('./components/Menu/Menu'))

const App = () => {
    const [isMenu, setIsMenu] = useState(false);
    const windowSize = useWindowSize()
    return (
        <div className="App">
            <Header menu={isMenu} />
            <Switch>
                <Suspense fallback="...loading">
                    <Route path='/home' >
                        <HomePage />
                         {windowSize}
                    </Route>

                    <Route path='/space'>
                        <Space menuHandler={setIsMenu} />
                    </Route>
                    <Route path="/yaratcenter">
                        <YaratCenter menuHandler={setIsMenu}/>
                    </Route>

                    <Route path="/yarat">
                        <Yarat  menuHandler={setIsMenu} />
                    </Route>

                    <Route path="/yaygalerry">
                        <YayGallery menuHandler={setIsMenu}/>
                    </Route>

                    <Route path="/painting">
                        <Painting  menuHandler={setIsMenu}/>
                    </Route>



                    <Route path="/exhibition" >
                        <Exhibition menuHandler={setIsMenu}  />

                    </Route>

                    <Route  path="/gridpage">
                        <GridPage menuHandler={setIsMenu}/>
                    </Route>
                    






                    <Route path='*'>
                        <Redirect to='/home' />

                    </Route>

                </Suspense>
            </Switch>
           
        </div>


    )
}
export default App;