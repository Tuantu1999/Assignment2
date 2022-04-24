import React, { useState } from 'react'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route } from 'react-router-dom'
import { STAFFS, DEPARTMENTS } from '../Shared/staffs'

function Main () {
    const [nhanvien, setNhanVien] = useState([]);
    return(
        <div>
            <Header/>
            
            <Footer/>
        </div>
    )
}

export default Main;