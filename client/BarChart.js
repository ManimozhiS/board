import React from 'react'
import {Bar} from 'react-chartjs-2';

function BarChart() {
    const data={
        labels:[ 'Jan','Feb','Mar','Apr','May' ],
        datasets:[{label:'Sales for 2020(M)',
        data: [3,2,2,1,5],
        borderColor: ['magenta'],
        backgroundColor:['magenta'],
        pointBackgroundColor:['magenta'],
        pointBorderColor:['magenta']
    },
    {
        label:'Sales for 2019(M)',
        data:[1,3,2,2,3],
        borderColor: ['darkblue'],
        backgroundColor:['darkblue'],
        pointBackgroundColor:['darkblue'],
        pointBorderColor:'[darkblue]'
    }]}
    
    const options={
        title:{
            display:true,
            text:'Bar Chart'},
            scales:{
                yAxes:[
                    {
                      ticks:{
                          min:0,max:6,stepSize:1
                      }  
                    }
                ]
            }
    }
    
    return <Bar data={data} options={options} />}


export default BarChart