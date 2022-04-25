import React from "react";

function StaffList(props) {
    const listNhanvien = props.staffs.map((nv) => {
        return(
            <div key={nv.id}>
                <div className="col-12 m-2">
                    <img src={nv.image} alt={nv.name} />
                    <p>{nv.name}</p>
                </div>
            </div>
        )
    });
    return(
        <div className="container">
            <div className="row">{listNhanvien}</div>
        </div>
    )
}

export default StaffList;