import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {useState} from "react";

const data = [
    {
        name: 'index',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'categories',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'doctors',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'profile',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'consultations',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'doctor',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
];

const MostFavoritePage = () => {
    const [opacity, setOpacity] = useState({
        uv: 1,
        pv: 1,
    });

    const handleMouseEnter = (o) => {
        const {dataKey} = o;

        setOpacity((op) => ({...op, [dataKey]: 0.5}));
    };

    const handleMouseLeave = (o) => {
        const {dataKey} = o;

        setOpacity((op) => ({...op, [dataKey]: 1}));
    };

    return (
        <ResponsiveContainer width="80%" height="50%" className={"bg-white rounded-xl pb-10 pt-2"}>
            <span>نمودار بازدید صفحات</span>
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Legend onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
                <Line type="monotone" dataKey="pv" name={"ماه جاری"} strokeOpacity={opacity.pv} stroke="#10b981"
                      activeDot={{r: 8}}/>
                <Line type="monotone" dataKey="uv" name={"ماه قبل"} strokeOpacity={opacity.uv} stroke="#94a3b8"/>
            </LineChart>
        </ResponsiveContainer>
    )
}

export default MostFavoritePage;