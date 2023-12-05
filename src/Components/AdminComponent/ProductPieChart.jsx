import React from 'react'
import {Pie} from "react-chartjs-2"
import {Chart as Chartjs} from "chart.js/auto" 
function ProductPieChart({PieChartData}) {
  return (
    <div className=' w-full h-96 mt-10 '>

    <Pie data={PieChartData} ></Pie>
  
</div>
  )
}

export default ProductPieChart
