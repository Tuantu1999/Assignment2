import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap'

const RenderStaffList = ({staff}) => (
    <Link 
        to={`/staff/${staff.id}`} 
        className="text-center text-decoration-none"
    >
        <Card className="card border-primary mt-3 mb-3 shadow">
            <CardImg 
                src={staff.image}
                alt={staff.name}
            />
            <CardText className="m-1">
                <h5 className>{staff.name}</h5>
                <hr/>
            </CardText>
        </Card>
    </Link>
)

const cols = [
    {
        name: "hiển thị 1 Cột",
        selectColumn: "col-12"
    },
    {
        name: "hiển thị 2 Cột",
        selectColumn: "col-6"
    },
    {
        name: "hiển thị 3 Cột",
        selectColumn: "col-6 col-md-4 col-lg-4"
    },
    {
        name: "hiển thị 4 Cột",
        selectColumn: "col-6 col-md-3 col-lg-3"
    },
    {
        name: "hiển thị 6 Cột",
        selectColumn: "col-6 col-md-2 col-lg-2"
    }
]

const StaffList = (props) => {
    const [name, setName] = useState("");
    const [column, setColumn] = useState("col-6 col-md-4 col-lg-2 mt-3 mb-3")
    const [sortId, setSortId] = useState()

    const staffList = props.staffs
    .sort((a,b) => sortId ? a.id - b.id : b.id - a.id)
    .filter((staff) => {
        if (name === "")
            return staff;
        else if (staff.name.toLowerCase().includes(name.toLowerCase()))
            return staff;
        return 0;
    })
    .map((staff) => {
        return (
            <div 
                key={staff.id}
                className={column}
            >
                <RenderStaffList staff={staff}/>
            </div>
        )
    })

    return (
        <div className="container">
            <h4 className="mt-2">Nhân Viên</h4>
            <div className="btn-group row">
                {/**Lựa chọn sắp xếp số cột */}
                    <select
                        className="custom-select btn btn-primary border col-12 col-md-4 col-lg-4"
                        onChange={e => setColumn(e.target.value)}
                    >
                        <option>Chọn số cột trình bày</option>
                        {cols.map((col) => (
                            <option
                                key={col.selectColumn}
                                value={col.selectColumn}
                            >
                                {col.name}
                            </option>
                        ))}
                    </select>
                    <button
                        className="btn btn-success border col-12 col-md-4 col-lg-4"
                        onClick={() => setSortId(!sortId)}
                    >
                        Sắp xếp theo mã số nhân viên
                    </button>
                    <input
                        className="btn border col-12 col-md-4 col-lg-4"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Tìm kiếm nhân viên"
                    />
            </div>
            <div className="row shadow mt-5 mb-5">
                {staffList}
            </div>
        </div>
    )
}

export default StaffList;