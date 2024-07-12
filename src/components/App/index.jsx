import React from 'react'
import Header from '../Header'
import Footer from '../Footer';
import Navigation from '../Navigation';
import ScrollToTopOnRouteChange from './ScrollToTopOnRouteChange';

import Main from '../../pages/Main';
import News from '../../pages/News';
import Stuff from '../../pages/Stuff';
import Structure from '../../pages/Structure';
import Education from '../../pages/Education';
import Master from '../../pages/Education/Master';
import Graduate from '../../pages/Education/Graduate';
import Council from '../../pages/Education/Council';
import Other from "../../pages/Other";
import Journals from "../../pages/Other/Journals";
import Anticorruption from '../../pages/Other/Anticorruption';
import Lab from '../../pages/Lab';
import Dev from '../../pages/Dev';

import {LABS_CONFIG} from '../../utils';

import {
    HashRouter as Router,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Header/>
            <Navigation/>
            <ScrollToTopOnRouteChange/>
            <Routes>
                <Route path="/" element={<Navigate to="/main" replace />} />
                <Route path="/main" element={<Main />}/>
                <Route path="/news" element={<News />}/>
                <Route path="/stuff" element={<Stuff />}/>
                <Route path="/structure" element={<Structure />}/>
                <Route path="/education" element={<Education />}/>
                <Route path="/education/master" element={<Master />}/>
                <Route path="/education/graduate" element={<Graduate />}/>
                <Route path="/education/council" element={<Council />}/>
                <Route path="/other" element={<Other />}/>
                <Route path="/other/journals" element={<Journals />}/>
                <Route path="/other/anticorruption" element={<Anticorruption />}/>
                <Route path="/dev" element={<Dev />}/>

                {LABS_CONFIG.map(lab =>
                    <Route
                        path={`/structure/${lab.path}`}
                        element={<Lab lab={lab} />}
                    />)}
            </Routes>
            <Footer/>
        </Router>
    )
}

export default App