// นำเข้าโมดูลที่จำเป็น
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"; // ใช้สร้างกราฟเส้น
import { motion } from "framer-motion"; // ใช้สำหรับเอฟเฟกต์เคลื่อนไหว

// ข้อมูลยอดขายรายเดือน
const salesData = [
	{ name: "Jul", sales: 4200 }, // เดือนกรกฎาคม ยอดขาย 4200
	{ name: "Aug", sales: 3800 }, // เดือนสิงหาคม ยอดขาย 3800
	{ name: "Sep", sales: 5100 }, // เดือนกันยายน ยอดขาย 5100
	{ name: "Oct", sales: 4600 }, // เดือนตุลาคม ยอดขาย 4600
	{ name: "Nov", sales: 5400 }, // เดือนพฤศจิกายน ยอดขาย 5400
	{ name: "Dec", sales: 7200 }, // เดือนธันวาคม ยอดขาย 7200
	{ name: "Jan", sales: 6100 }, // เดือนมกราคม ยอดขาย 6100
	{ name: "Feb", sales: 5900 }, // เดือนกุมภาพันธ์ ยอดขาย 5900
	{ name: "Mar", sales: 6800 }, // เดือนมีนาคม ยอดขาย 6800
	{ name: "Apr", sales: 6300 }, // เดือนเมษายน ยอดขาย 6300
	{ name: "May", sales: 7100 }, // เดือนพฤษภาคม ยอดขาย 7100
	{ name: "Jun", sales: 7500 }, // เดือนมิถุนายน ยอดขาย 7500
];

// คอมโพเนนต์สำหรับแสดงกราฟยอดขาย
const SalesOverviewChart = () => {
	return (
		// การ์ดที่มีเอฟเฟกต์เคลื่อนไหว
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700' // ออกแบบสไตล์การ์ด
			initial={{ opacity: 0, y: 20 }} // เริ่มต้นโปร่งใสและเลื่อนลงมาจากตำแหน่งปัจจุบัน
			animate={{ opacity: 1, y: 0 }} // เมื่อแสดงผลแล้วจะปรากฏขึ้นและเลื่อนกลับตำแหน่งเดิม
			transition={{ delay: 0.2 }} // ดีเลย์ 0.2 วินาทีก่อนเริ่มแอนิเมชัน
		>
			{/* ส่วนหัวของการ์ด */}
			<h2 className='text-lg font-medium mb-4 text-gray-100'>Sales Overview</h2> {/* ข้อความหัวเรื่อง */}

			{/* ส่วนแสดงกราฟ */}
			<div className='h-80'>
				{/* กำหนดให้กราฟตอบสนองต่อหน้าจอ */}
				<ResponsiveContainer width={"100%"} height={"100%"}>
					{/* กราฟเส้น */}
					<LineChart data={salesData}>
						{/* เส้นกริดในกราฟ */}
						<CartesianGrid strokeDasharray='3 3' stroke='#4B5563' /> {/* เส้นประในพื้นหลัง */}
						
						{/* แกน X (ชื่อเดือน) */}
						<XAxis dataKey={"name"} stroke='#9ca3af' /> {/* สีแกน X เป็นสีเทา */}
						
						{/* แกน Y (ยอดขาย) */}
						<YAxis stroke='#9ca3af' /> {/* สีแกน Y เป็นสีเทา */}

						{/* กล่องข้อมูลเมื่อโฮเวอร์บนจุด */}
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)", // สีพื้นหลังโปร่งใส
								borderColor: "#4B5563", // สีขอบกล่อง
							}}
							itemStyle={{ color: "#E5E7EB" }} // สีข้อความในกล่อง
						/>

						{/* เส้นกราฟ */}
						<Line
							type='monotone' // เส้นกราฟโค้งแบบ Smooth
							dataKey='sales' // ใช้คีย์ `sales` จากข้อมูล
							stroke='#6366F1' // สีเส้นเป็นสีม่วง
							strokeWidth={3} // ความหนาของเส้น
							dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }} // จุดในกราฟมีขอบและสีม่วง
							activeDot={{ r: 8, strokeWidth: 2 }} // จุดเมื่อโฮเวอร์มีขนาดใหญ่ขึ้น
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};

export default SalesOverviewChart; // ส่งออกคอมโพเนนต์สำหรับใช้งานในโปรเจกต์อื่น
