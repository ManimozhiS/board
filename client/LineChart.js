import React from 'react'
import {Line} from 'react-chartjs-2';

function LineChart() {
    const data={
        labels:[ 'Jan','Feb','Mar','Apr','May' ],
        datasets:[{label:'Sales for 2020(M)',
        data: [3,2,2,1,5],
        borderColor: ['red'],
        backgroundColor:['red'],
        pointBackgroundColor:'red',
        pointBorderColor:'red'
    },
    {
        label:'Sales for 2019(M)',
        data:[1,3,2,2,3],
        borderColor: ['blue'],
        backgroundColor:['blue'],
        pointBackgroundColor:'blue',
        pointBorderColor:'blue'
    }]}
    
    const options={
        title:{
            display:true,
            text:'Line Chart'},
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
    
    return <Line data={data} options={options} />}


export default LineChart



