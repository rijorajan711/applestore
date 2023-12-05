import React from 'react'
import {Bar} from "react-chartjs-2"
import {Chart as Chartjs} from "chart.js/auto" 
function UserBarChart({barChartData}) {
  return (
    <div className=' h-96 w-full '>

        <Bar data={barChartData} ></Bar>
      
    </div>
  )
}

export default UserBarChart
