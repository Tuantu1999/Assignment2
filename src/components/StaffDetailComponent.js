import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import dateFormat from "dateformat";

function StaffDetail(props){
    if(props.staffById != null){
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/staff">Nhân viên</Link>
                        </BreadcrumbItem>

                        <BreadcrumbItem active>
                            {props.staffById.name}
                        </BreadcrumbItem>
                    </Breadcrumb>

                    <div className="col-12">
                        <h3>{props.staffById.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row mb-3">
                    <RenderStaff staff={props.staffById} />
                </div>                    
            </div>
        );
    }else{
        return(
            <div></div>
        );
    }  
}


function RenderStaff({ staff }) {
    if (staff != null) {
        return (
            <div className="col-12">
                <Card>
                    {/* Ảnh nhân viên */}
                    <img src={staff.image} width="200px" height="200px" alt={staff.name} className="m-5" />

                    {/* Thẻ thông tin nhân viên */}
                    <CardBody>
                        <CardTitle>Họ và tên: {staff.name}</CardTitle>

                        <CardText>
                            Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}
                        </CardText>

                        <CardText>
                            Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
                        </CardText>

                        <CardText>
                            Phòng ban: {staff.department.name}
                        </CardText>

                        <CardText>
                            Số ngày nghỉ còn lại: {staff.annualLeave}
                        </CardText>

                        <CardText>
                            Số ngày đã làm thêm: {staff.overTime}
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        );

    } else {
        return <div></div>;
    }
}


export default StaffDetail;