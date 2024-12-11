
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import { LineChart, Line, CartesianGrid as LineCartesianGrid, XAxis as LineXAxis, YAxis as LineYAxis } from 'recharts';

const test = () => {

    // Example Data
    const barChartData = [
        { name: 'January', value: 4000 },
        { name: 'February', value: 3000 },
        { name: 'March', value: 5000 },
        { name: 'April', value: 6000 },
        { name: 'May', value: 7000 },
        { name: 'June', value: 8000 },
    ];

    const pieData = [
        { name: 'Direct', value: 60 },
        { name: 'Referral', value: 20 },
        { name: 'Social', value: 20 }
    ];

    const lineChartData = [
        { month: 'January', value: 30 },
        { month: 'February', value: 40 },
        { month: 'March', value: 50 },
        { month: 'April', value: 60 },
        { month: 'May', value: 70 },
        { month: 'June', value: 80 },
    ];

    return (
        <div>
            <h2>Overview Page</h2>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '50px' }}>
                {/* Pie Chart */}
                <div style={{ width: '300px', height: '300px' }}>
                    <PieChart width={300} height={300}>
                        <Pie data={pieData} dataKey="value" outerRadius={120} fill="#82ca9d" label>
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.name === 'Direct' ? '#0088FE' : entry.name === 'Referral' ? '#00C49F' : '#FFBB28'} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </div>

                {/* Bar Chart */}
                <div style={{ width: '400px', height: '300px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={barChartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="value" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Line Chart */}
            <div style={{ width: '100%', height: '300px' }}>
                <LineChart width={600} height={300} data={lineChartData}>
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                    <LineCartesianGrid strokeDasharray="3 3" />
                    <LineXAxis dataKey="month" />
                    <LineYAxis />
                    <Tooltip />
                </LineChart>
            </div>
        </div>
    );
}

export default test;
