
import React,{Component} from 'react';

import CustomTable from './CustomTable'
import { postToServer } from '../../lib/comm-utils'

import { connect } from 'react-redux';
import { getMASTERList } from '../../actions/master'


class DCRListTable extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: [],
            toggleHeader: this.props.toggleHeader,
            header:[],
        }
        this.dcrList = this.dcrList.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.data !== nextProps.data)
            return {...prevState, data:nextProps.data}
        if(prevState.header !== nextProps.header)
            return {...prevState, header:nextProps.header}
        if(prevState.Edit !== nextProps.Edit)
            return {...prevState, Edit:nextProps.Edit}


        

        return null
    }

    componentDidMount(){
       
        this.dcrList()
        
    }

    Rowhit(event){
        console.log(event)
    }

    dcrList(){
        var data={
            "index": "Master",
            "TableName":"26",
            "Result": "1",
            "From": "1",
            "To": "100",
            "Token": "Smstest|Kavitha Shetty|FS01|KNH0007|lzOBgZHekf2019-05-10T17:17:02+05:30",
            "Ipaddress": ""
          }
        this.props.getMASTERList(data)

    }

    render(){
       
        console.log(data, 'inside data part',header)
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

        const { data } = this.state
        const { header,Edit } = this.state


        console.log('kunal sss',Edit)

         
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

                clickrow={this.props.clickrow}

             //   onClick={this.Rowhit}
                // toggleHeader = {toggleHeader}
            />
        )
    }
}

const mapStateToProps = state => ({
    data: state.MASTERList.data,
    header: state.MASTERList.header,
    Edit :state.MASTERList.Edit
} )

const mapDispatchToProps = dispatch => ({
    getMASTERList: (data) => dispatch(getMASTERList(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(DCRListTable);
