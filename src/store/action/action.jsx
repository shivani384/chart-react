import axios from "axios";
import * as actionTypes from "./actionTypes";



 export const getData= ()=>{
    const empName=[];
    const empSal=[];
return (dispatch)=>{
  axios.get("http://dummy.restapiexample.com/api/v1/employees")
    .then(res=>{    
             
           for(const dataObj of res.data.data) {
            
    empName.push((dataObj.employee_name));
    empSal.push(parseInt(dataObj.employee_salary));
    }
    dispatch({
        type:actionTypes.GET_DATA,
        EmpName:empName,
        EmpSal:empSal
})
})
.catch(err=>{alert("please refresh");
console.log(err)
})
 }
//console.log(EmpName,empSal);
     
    
    }



 export const setData=(name,salary)=>{
    return{
        type:actionTypes.SET_DATA,
        name:name,
        salary:salary
    }
}