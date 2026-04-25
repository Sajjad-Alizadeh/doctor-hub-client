import {Gauge} from "@mui/x-charts";

const DoctorRateAvg = () => {
    return (
        <Gauge height={200}
               width={400}
               value={75}
               valueMin={0}
               valueMax={100}/>
    )
}

export default DoctorRateAvg;