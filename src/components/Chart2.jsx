import React from 'react'
import { Bar } from 'react-chartjs-2'

const Chart2 = () => {
    return (
        <div>
             <Bar 
                data ={{
                    labels : ["+  -", '+  -', "+  -", '+  -','+  -','+  -'],
                    datasets: [
                        {
                            label : 'No of cases',
                            data : [12 , 19 , 6 , 5, 9 , 7],
                            backgroundColor : ['blue'],
                        },
                        {
                            label : 'No of Deaths',
                            data : [10 , 3 , 4 ,2 ,5 ,3 ],
                            backgroundColor : ['orange'],
                        }
                    ],
                }}
                height={200}
                width = {270}
                option ={{ maintainAspectRatio : false,}}
           />   
        </div>
    )
}

export default Chart2
