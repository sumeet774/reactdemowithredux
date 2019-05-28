import React,{Component} from 'react'
import {compareDesc, format} from 'date-fns'

function LastVisitList(props) {
   
    // let DSCName = props.DSCName
    let DSCName = "INDIA DRUG MEDICAL"
    let visitDetail = props.visitDetail
    
    let visitedDetails = []
    let visitedDates = []

    visitDetail.map((item, i) =>{
        if(DSCName == item.DSCName){
            visitedDetails.push(item)
            visitedDates.push(item.ReportedDate)
        }
    })

    var filteredDates = visitedDates.reduce(function(a,b){
        if (a.indexOf(b) < 0 ) a.push(b);
        return a;
    },[]);

    var sortedDates = filteredDates.sort(compareDesc)
    var visitList = []

    for(let i=0; i<3; i++){

        var date = sortedDates[i]
        var ExplainedItem = []
        var ClinicDiss = ""       

        visitedDetails.map(item => {
            if(date == item.ReportedDate){
                ClinicDiss = item.InclinicDiscussion
                ExplainedItem.push(item.ItemExplained)
            }
        })

        visitList.push(
            <VisitList key={i} date={date}  ClinicDiss={ClinicDiss} ExplainedItem={ExplainedItem} />
        )
    }

    return(
        <div className="dcrPopupPad">
            {visitList}
        </div>
    );   
}

function VisitList(props){
    const {
        date,
        ClinicDiss,
        ExplainedItem
    } = props

    if(!date && ExplainedItem)
        return null
    return(
        <div>
            <div className="clinicDiss">DCR Date</div>
            <div className="disscuss">{format(date, "Do MMMM, YYYY")}</div>
            <div className="clinicDiss">In Clinic Discussion Message</div>
            <div className="disscuss">{ClinicDiss}</div>
            <div className="clinicDiss">Detailed Product</div>
            <div className="disscuss">{ExplainedItem.map((item, i)=>(
                <div key={i}>{item}, </div>
            ))}</div>
            <div className="border-bottom"></div>
        </div>
    )
}
export default LastVisitList


