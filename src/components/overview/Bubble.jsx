import { BubbleChart, Bubble, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const BubbleChartComponent = () => {
    const data = [
        { x: 100, y: 200, z: 100, name: 'A' },
        { x: 200, y: 300, z: 150, name: 'B' },
        { x: 300, y: 400, z: 200, name: 'C' },
        { x: 400, y: 500, z: 250, name: 'D' },
    ];

    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
                <BubbleChart>
                    <CartesianGrid />
                    <XAxis dataKey="x" type="number" />
                    <YAxis dataKey="y" type="number" />
                    <Tooltip />
                    <Bubble data={data} dataKey="z" fill="#8884d8" />
                </BubbleChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BubbleChartComponent;
