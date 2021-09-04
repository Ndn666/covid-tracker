import React from 'react'
import { Bar } from 'react-chartjs-2'

const Chart = () => {
    return (
        <div>
           <Bar 
                data ={{
                    labels : ["kerala", 'Goa', "Punjab", 'Karnataka','gujarath','Delhi','madya pradesh','Orissa','Assam','Delhi','Hariyana'],
                    datasets: [
                        {
                            label : 'No of cases in lakhs',
                            data : [12 , 9 , 3 , 5,  10 , 3, 7,4,6,9,5],
                            backgroundColor : ['red'],
                        },
                    ],
                }}
                height={200}
                width = {270}
                option ={{ maintainAspectRatio : false,}}
           />   
        </div>
    )
}

export default Chart
