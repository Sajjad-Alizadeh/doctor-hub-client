import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import {useState} from "react";

const data = [
    {
        name: 'فر',
        uv: 4000,
        currentStatus: 2400,
        target: 2400,
    },
    {
        name: 'ار',
        uv: 3000,
        currentStatus: 1398,
        target: 2210,
    },
    {
        name: 'خر',
        uv: 2000,
        currentStatus: 9800,
        target: 2290,
    },
    {
        name: 'تیر',
        uv: 2780,
        currentStatus: 3908,
        target: 2000,
    },
    {
        name: 'مردا',
        uv: 1890,
        currentStatus: 4800,
        target: 2181,
    },
    {
        name: 'شهر',
        uv: 2390,
        currentStatus: 3800,
        target: 2500,
    },
    {
        name: 'مهر',
        uv: 3490,
        currentStatus: 7000,
        target: 3100,
    },
    {
        name: 'آبا',
        uv: 3490,
        currentStatus: 4300,
        target: 2400,
    },
    {
        name: 'آذر',
        uv: 3490,
        currentStatus: 3512,
        target: 510,
    },
    {
        name: 'دی',
        uv: 3490,
        currentStatus: 3800,
        target: 5000,
    },
    {
        name: 'به',
        uv: 3490,
        currentStatus: 500,
        target: 1100,
    },
    {
        name: 'اسف',
        uv: 3490,
        currentStatus: 1300,
        target: 4100,
    },
];

const pageData = [
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

const Impression = () => {
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
        <ResponsiveContainer width="100%" height="40%" className={"flex gap-2 items-center justify-center"}>
            <div className="flex flex-col w-full py-2 justify-center items-center bg-white rounded-xl gap-4">
                <span className="font-medium">ورودی کاربران</span>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey="currentStatus" name={"ماه جاری"} stackId="a" fill="#10b981"/>
                    <Bar dataKey="target" name={"ماه قبل"} stackId="a" fill="#d1d5db"/>
                </BarChart>
            </div>
            <div className="bg-white rounded-xl py-2 w-full flex flex-col justify-center items-center gap-4">
                <span className="font-medium">بازدید صفحات</span>
                <LineChart
                    width={500}
                    height={300}
                    data={pageData}
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
            </div>

        </ResponsiveContainer>
    )
}

export default Impression