import React from 'react'
import { useState ,useEffect,useDispatch,useSelector} from 'react'
import axios from "axios";
import {Line,Bar} from "react-chartjs-2"
import { getData, setData } from '../store/action/action';
import { connect } from 'react-redux';
function Chart(props) {
//const [chartData,setchartdata]=useState({});
const [name,setName]=useState("");
const [salary,setSalary]=useState(0);
//const [empAge,setEmpAge]=useState([]);
//const [empSal,setEmpSal]=useState([]);

//const dispatch= useDispatch();
useEffect(()=>{ 
   // console.log( props.chartData )
  props.initData();
 console.log( props.chartData )
}
, [])
     

//console.log(props.chartData);

           
        
    
        
        const  options= {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }

        
        
        
//props.settingData(setData(age,salary))
    
    return (
        <div>
            <div>
            <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
            <input type="number" placeholder="Salary" onChange={(e)=>setSalary(e.target.value)}/>
             <button onClick={()=>props.settingData(name,salary)}>Go!</button>
             </div>
             <div>
       <Line data={props.chartData} options={options}/>
        </div>
        </div>
    )
}

const mapStatetoProps=state=>{
    return{
        chartData:state.chartdata
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        initData:( )=>dispatch(getData()),
      settingData:(name,salary)=>dispatch(setData(name,salary))
    }
}
export default connect(mapStatetoProps,mapDispatchToProps)(Chart);
