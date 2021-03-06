import React from 'react'
import {Doughnut} from 'react-chartjs-2';

function DoughnutChart() {
    const data={
        labels:[ 'Jan','Feb','Mar','Apr','May' ],
        datasets:[{label:'Sales for 2020(M)',
        data: [3,2,2,1,5],
      
        backgroundColor:['red','blue','green','magenta','orange'],
       
    },
  ]}
    
    const options={
        title:{
            display:true,
            text:'Doughnut Chart'},
            
    }
    
    return <Doughnut data={data} options={options} />}


export default DoughnutChart