import React, { useState } from 'react'
import Header from './HeaderComponent';
import StaffList from './StaffListComponent';
import Footer from './FooterComponent';
import { Switch, Route } from 'react-router-dom'
import { STAFFS, DEPARTMENTS } from '../Shared/staffs'

function Main () {
    const [nhanvien, setNhanVien] = useState({
        staffs: STAFFS,
        departments: DEPARTMENTS
    });
    return(
        <div>
            <Header/>
                <Route path='/nhanvien' component={() => <StaffList staffs={nhanvien.staffs}/>} />
            <Footer/>
        </div>
    )
}

export default Main;