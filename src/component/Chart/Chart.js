import "./Chart.css";
import ChartBar from "./ChartBar";
function Chart(props) {
    const dataPointsValue=props.dataInfo.map((dataInfo)=>{return dataInfo.value});
    const max=Math.max(...dataPointsValue);

  return (
    <div className="chart">
      {props.dataInfo.map((data) => <ChartBar
          key={data.lable}
          value={data.value}
          maxValue={max}
          lable={data.lable}
        />)}
    </div>
  );
}
export default Chart;
