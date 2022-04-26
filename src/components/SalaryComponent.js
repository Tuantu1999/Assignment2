import React, { useState } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from "react-router-dom"


const salaryBase = 3000000;
const salaryHour = 200000 / 8;

function RenderSalary ({salary}) {
    return(
        <Card>
            <CardTitle className="p-3 bg-white rounded m-2">{salary.name}</CardTitle>
            <CardBody>
                <CardText>Mã nhân viên: {salary.id}</CardText>
                <CardText>Hệ số lương: {salary.salaryScale}</CardText>
                <CardText>Số giờ làm thêm: {salary.overTime}</CardText>
                <CardText className="bg-light p-2 shadow">
                    Lương: {" "}
                    {(salary.salaryScale * salaryBase + salary.overTime * salaryHour).toFixed(0)}
                </CardText>
            </CardBody>
        </Card>
    )
}



export default Salary;