// นำเข้า Libraries ที่จำเป็น
import { motion } from "framer-motion"; // ใช้สำหรับสร้างอนิเมชันใน React
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"; // ใช้สำหรับสร้างกราฟวงกลม

// กำหนดอาร์เรย์ของสีที่จะใช้ในแต่ละเซลล์ของกราฟ
const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE"];

// ข้อมูลประชากรผู้ใช้ในแต่ละช่วงอายุ
const userDemographicsData = [
  { name: "18-24", value: 20 }, // 20% ของผู้ใช้ในช่วงอายุ 18-24
  { name: "25-34", value: 30 }, // 30% ของผู้ใช้ในช่วงอายุ 25-34
  { name: "35-44", value: 25 }, // 25% ของผู้ใช้ในช่วงอายุ 35-44
  { name: "45-54", value: 15 }, // 15% ของผู้ใช้ในช่วงอายุ 45-54
  { name: "55+", value: 10 },   // 10% ของผู้ใช้ในช่วงอายุ 55+
];

// คอมโพเนนต์หลักของกราฟ User Demographics
const UserDemographicsChart = () => {
  return (
    // ใช้ motion.div เพื่อเพิ่มอนิเมชันให้กับกราฟ (แสดงผลค่อยๆ และเลื่อนขึ้น)
    <motion.div
      className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 lg:col-span-2' // กำหนดสไตล์ให้กับคอนเทนเนอร์กราฟ
      initial={{ opacity: 0, y: 20 }} // กำหนดค่าของแอนิเมชันเริ่มต้น (ความทึบ 0% และเลื่อนจากด้านล่าง)
      animate={{ opacity: 1, y: 0 }} // กำหนดแอนิเมชันตอนแสดงผล (ความทึบ 100% และย้ายกลับมาอยู่ที่ Y=0)
      transition={{ delay: 0.5 }} // หน่วงเวลาแอนิเมชัน 0.5 วินาที
    >
      {/* หัวข้อของกราฟ */}
      <h2 className='text-xl font-semibold text-gray-100 mb-4'>User Demographics</h2>

      {/* กำหนดขนาดของคอนเทนเนอร์กราฟ */}
      <div style={{ width: "100%", height: 300 }}>
        {/* ใช้ ResponsiveContainer เพื่อให้กราฟตอบสนองกับขนาดหน้าจอ */}
        <ResponsiveContainer>
          <PieChart>
            {/* สร้างกราฟวงกลม */}
            <Pie
              data={userDemographicsData} // ใช้ข้อมูลที่กำหนดใน userDemographicsData
              cx='50%' // ตั้งตำแหน่งของจุดศูนย์กลางวงกลม (แนวนอน)
              cy='50%' // ตั้งตำแหน่งของจุดศูนย์กลางวงกลม (แนวตั้ง)
              outerRadius={100} // กำหนดรัศมีของวงกลม
              fill='#8884d8' // กำหนดสีเริ่มต้นของกราฟ (สีม่วงอ่อน)
              dataKey='value' // ใช้ข้อมูลจาก 'value' ในแต่ละช่วงอายุ
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} // แสดงชื่อช่วงอายุและเปอร์เซ็นต์ในแต่ละเซลล์ของกราฟ
            >
              {/* กำหนดสีให้กับแต่ละเซลล์ในกราฟ */}
              {userDemographicsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} /> // ใช้สีจาก COLORS
              ))}
            </Pie>

            {/* กำหนด Tooltip เมื่อผู้ใช้ชี้ที่กราฟ */}
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)", // กำหนดพื้นหลังของ Tooltip
                borderColor: "#4B5563", // กำหนดสีขอบของ Tooltip
              }}
              itemStyle={{ color: "#E5E7EB" }} // กำหนดสีข้อความใน Tooltip
            />

            {/* แสดง Legend สำหรับคำอธิบายกราฟ */}
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

// ส่งออกคอมโพเนนต์ UserDemographicsChart เพื่อใช้ในที่อื่น
export default UserDemographicsChart;

