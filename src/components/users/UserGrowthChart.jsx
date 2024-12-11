// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
// import { motion } from "framer-motion";

// const userGrowthData = [
// 	{ month: "Jan", users: 1000 },
// 	{ month: "Feb", users: 1500 },
// 	{ month: "Mar", users: 2000 },
// 	{ month: "Apr", users: 3000 },
// 	{ month: "May", users: 4000 },
// 	{ month: "Jun", users: 5000 },
// ];

// const UserGrowthChart = () => {
// 	return (
// 		<motion.div
// 			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
// 			initial={{ opacity: 0, y: 20 }}
// 			animate={{ opacity: 1, y: 0 }}
// 			transition={{ delay: 0.3 }}
// 		>
// 			<h2 className='text-xl font-semibold text-gray-100 mb-4'>User Growth</h2>
// 			<div className='h-[320px]'>
// 				<ResponsiveContainer width='100%' height='100%'>
// 					<LineChart data={userGrowthData}>
// 						<CartesianGrid strokeDasharray='3 3' stroke='#374151' />
// 						<XAxis dataKey='month' stroke='#9CA3AF' />
// 						<YAxis stroke='#9CA3AF' />
// 						<Tooltip
// 							contentStyle={{
// 								backgroundColor: "rgba(31, 41, 55, 0.8)",
// 								borderColor: "#4B5563",
// 							}}
// 							itemStyle={{ color: "#E5E7EB" }}
// 						/>
// 						<Line
// 							type='monotone'
// 							dataKey='users'
// 							stroke='#8B5CF6'
// 							strokeWidth={2}
// 							dot={{ fill: "#8B5CF6", strokeWidth: 2, r: 4 }}
// 							activeDot={{ r: 8 }}
// 						/>
// 					</LineChart>
// 				</ResponsiveContainer>
// 			</div>
// 		</motion.div>
// 	);
// };
// export default UserGrowthChart;


import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const userGrowthData = [
	{ month: "Jan", users: 1000 },
	{ month: "Feb", users: 1500 },
	{ month: "Mar", users: 2000 },
	{ month: "Apr", users: 3000 },
	{ month: "May", users: 4000 },
	{ month: "Jun", users: 5000 },
];

const UserGrowthChart = () => {
	return (
		<motion.div
			className="bg-gray-800 bg-opacity-60 backdrop-blur-md shadow-xl rounded-xl p-8 border border-gray-700"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.3 }}
		>
			<h2 className="text-2xl font-semibold text-gray-100 mb-6">User Growth Over Time</h2>
			<div className="h-[400px]">
				<ResponsiveContainer width="100%" height="100%">
					<LineChart data={userGrowthData}>
						<CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
						<XAxis dataKey="month" stroke="#D1D5DB" />
						<YAxis stroke="#D1D5DB" />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
								borderRadius: "8px",
								boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
							}}
							itemStyle={{ color: "#E5E7EB", fontWeight: "bold" }}
						/>
						<Line
							type="monotone"
							dataKey="users"
							stroke="url(#gradientLine)" // Added gradient
							strokeWidth={3}
							dot={{ fill: "#8B5CF6", strokeWidth: 2, r: 6 }}
							activeDot={{ r: 10 }}
							animationDuration={1000}
						/>
						<defs>
							<linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="100%">
								<stop offset="0%" stopColor="#8B5CF6" />
								<stop offset="100%" stopColor="#EC4899" />
							</linearGradient>
						</defs>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};

export default UserGrowthChart;
