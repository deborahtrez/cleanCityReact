import React, { Component } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import './index.css'
import Nav from './Nav'
import Menu from './Menu'
import ServiceRequest from './ServiceRequest';

class App extends Component {
   
    render() {
        return (
            <BrowserRouter>
                <Nav />
                    <div className='container'>
                        <Routes>
                            <Route path="/" element={<Menu />} />
                            <Route path='/home' element={<Home />} />
                            <Route path='/servicerequest' element={<ServiceRequest />} />
                        </Routes>
                    </div>
            </BrowserRouter>

        );
    }
}

export default App;
