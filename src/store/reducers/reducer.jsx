import * as actionTypes from "../action/actionTypes"

const initialstate={
   chartdata :{
    labels: ["akshat","vaani","james"],
    datasets: [{
        label: 'Employee salary',
        fill:true,
        data: [10000,20000,30000],
        backgroundColor: ['lightgreen'],
         borderColor: ['green'],
         pointBorderColor: ['darkgreen '],
         borderWidth: 1
    }]
   }
}
 const  reducer =(state=initialstate,action)=>{
switch(action.type)
{
    case actionTypes.GET_DATA:
    { const newSal=[...state.chartdata.datasets];
        newSal[0].data=action.EmpSal;
        const newName={...state.chartdata};
        newName.labels=action.EmpName;
        newName.datasets=newSal;
       // console.log(action.EmpName,action.EmpSal,newName);
        return{
         ...state,
         chartdata:newName 
            
    }
    
        }

        

        case actionTypes.SET_DATA:
            return{
                chartdata :{
                    labels: [...state.chartdata.labels,action.name],
                    datasets: [{
                        label: 'Employee salary',
                        fill:true,
                        data: [...state.chartdata.datasets[0].data,action.salary],
                        backgroundColor: ['lightgreen'],
                         borderColor: ['green'],
                         pointBorderColor: ['red'],
                         borderWidth: 1
                    }]
                   }
                
                //state.chartdata.labels.push(action.age),
            
                //state.chartdata.datasets[0].data.push(action.salary)
            }
        default:return state
}
}
export default reducer;