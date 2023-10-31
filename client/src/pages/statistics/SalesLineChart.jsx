import React,{useEffect,useState} from 'react'
import {
    Chart as ChartJS,
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
} from "chart.js"
import {Bar} from "react-chartjs-2"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const SalesLineChart = () => {
    const [chartData,setChartData] = useState({
        datasets:[]
    })
    const [chartOption,setChartOption] = useState({})
    useEffect(()=>{
        setChartData({
            labels:["Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            datasets:[{
                label:"Sales at this week",
                data:[23,58,69,74,15,44,77],
                borderColor:"rgba(75,55,25,0.4)",
            }]
        })
        setChartOption({
            responsive : true,
            Plugins:{
                legend:{
                    position:"top"
                },
                title:{
                    display:true,
                    text:"Sales at this week"
                }
            }
        })
    },[])
  return (
    <div>
        <Bar options={chartOption} data={chartData}/>
    </div>
  )
}

export default SalesLineChart