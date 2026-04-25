import { PieChart } from '@mui/x-charts/PieChart';

const data = [
    { id: 0, value: 20, label: 'Admin', color: '#2563eb' },
    { id: 1, value: 44, label: 'Doctor', color: "#10b981" },
    { id: 2, value: 200, label: 'User', color: "#94a3b8" },
];

const RolesAnalysis = () => {
  return(
      <PieChart
          series={[
              {
                  data,
                  highlightScope: { faded: 'global', highlighted: 'item' },
                  faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
              },
          ]}
          height={200}
          width={400}
      />
  )
}

export default RolesAnalysis;