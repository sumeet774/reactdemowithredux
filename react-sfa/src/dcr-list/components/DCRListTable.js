
import React,{Component} from 'react';

import CustomTable from './CustomTable'

import { connect } from 'react-redux';
import { getDCRList } from '../../actions/DCRList'

class DCRListTable extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: [],
            toggleHeader: this.props.toggleHeader
        }
        this.dcrList = this.dcrList.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.data !== nextProps.data)
            return {...prevState, data:nextProps.data}
        if(prevState.toggleHeader !== nextProps.toggleHeader)
            return {...prevState, toggleHeader:nextProps.toggleHeader}
        return null
    }

    componentDidMount(){
        this.dcrList()
    }

    dcrList(){
        var data={
            "index": "mydata",
            "Result":"0",
            "TableName": "",
            "ColumnName": "",
            "Data": [
                {
                    "year": "2018",
                    "month": "7",
                    "Result":"1"
                }
            ]
        }
        this.props.getDCRList(data)
    }

    render(){
        const header = [
            { title: 'DCR No' , prop: 'ReportNo', sortable: true, filterable: true },
            { title: 'DCR Date', prop: 'ReportDate', sortable: true },
            { title: 'Entry Date', prop: 'EntryDate', sortable: true },
            { title: 'Place of Work', prop: 'Area', sortable: true },
            { title: 'Docter Visited', prop: 'DoctorVisit', sortable: true },
            { title: 'Retailer Visited', prop: 'ChemistVisit', sortable: true },
            { title: 'Stocklist Visited', prop: 'StockistVisit', sortable: true },
            { title: 'Additional Docter Visited', prop: 'AdditionalDocVisit', sortable: true },
        ]
        
        const customLabels = {
            first: '<<',
            last: '>>',
            prev: '< Prev',
            next: 'Next >',
            show: 'Show',
            entries: 'items/page',
            filterPlaceholder: 'Search for DCR no',
            noResults: 'There is no data to be displayed',
        };

        const { data, toggleHeader } = this.state
        if (!data)
            return null
        return(
            <CustomTable
                tableHeader={header}
                tableBody={data}
                keyName="userTable"
                tableClass="striped hover table-responsive"
                rowsPerPage={10}
                rowsPerPageOption={[10, 15, 20]}
                initialSort={{prop: "username", isAscending: true}}
                labels={customLabels}
                toggleHeader = {toggleHeader}
            />
        )
    }
}

const mapStateToProps = state => ({
    data: state.DCRList.data,
    toggleHeader: state.DCRList.toggleHeader
})

const mapDispatchToProps = dispatch => ({
    getDCRList: (data) => dispatch(getDCRList(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(DCRListTable);
