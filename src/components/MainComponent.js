import React, { useState } from 'react'
import Header from './HeaderComponent';
import StaffList from './StaffListComponent';
import Footer from './FooterComponent';
import Department from './DepartmentComponent';
import { Switch, Route } from 'react-router-dom'
import { STAFFS, DEPARTMENTS } from '../Shared/staffs'
import StaffDetail from './StaffDetailComponent';
import Salary from './SalaryComponent';

function Main() {
    const [nhanvien, setNhanvien] = useState({
        staffs: STAFFS,
        departments: DEPARTMENTS
    });

    const StaffWithId = ({ match }) => {
        return (
            <StaffDetail
                staffById={
                    nhanvien.staffs.filter(
                        (item) => item.id === parseInt(match.params.nhanvienId, 10))[0]
                }
            />
        );
    };

    return (
        <div>
            <Header />
            <Switch>
                <Route
                    exact
                    path="/staff"
                    component={() => <StaffList staffs={nhanvien.staffs} />}
                />

                <Route path="/staff/:nhanvienId" component={StaffWithId} />

                <Route path="/department"
                    component={() => <Department dept={nhanvien.departments} />}
                />

                <Route path="/salary"
                    component={() => <Salary salar={nhanvien.Salaries} />}
                />
            </Switch>
            <Footer />
        </div>
    )
}

export default Main;