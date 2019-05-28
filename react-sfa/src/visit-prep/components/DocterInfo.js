import React , { Component } from 'react' 

function DoctorInfo(props){
    
    const {
        DocterDetails 
    } = props
    console.log(DocterDetails)
    return(
        <div className="visit-container">
            <div className="">
                <div className="display-inline">
                    <div className="imageanddetail">
                        <div className="imagedotcon">
                            <div className="greendot"></div>
                            <img className="innerframe" src="../public/assets/images/123.jpg"/>
                            <img className="frame" src="../public/assets/images/dr_frame.png"/>
                            <img className="diamond" src="../public/assets/images/diamond.png"/>
                        </div>
                    </div>
                    <div className="imagenamebox pb-0">
                        <div className="nopad0 dr_name">Dr. {DocterDetails[0].DSCName}</div>
                        <div className="nopad0 inline-blk">
                            <div className="drrectac">{DocterDetails[0].DSCcode}</div>
                        </div>
                        <div className="nopad0 docdetail">{DocterDetails[0].Category}</div>
                        <div className="nopad0 docdetail">{DocterDetails[0].DSCQualification}</div>
                        <div className="nopad0 markerdetail"><i className="fa fa-map-marker" aria-hidden="true"></i>  {DocterDetails[0].AreaName}({DocterDetails[0].SubareName})</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorInfo