import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

// ข้อมูลตัวอย่างผู้ใช้
const userData = [
	{ id: 1, name: "John Doe", email: "john@example.com", role: "Customer", status: "Active" },
	{ id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin", status: "Active" },
	{ id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Customer", status: "Inactive" },
	{ id: 4, name: "Alice Brown", email: "alice@example.com", role: "Customer", status: "Active" },
	{ id: 5, name: "Charlie Wilson", email: "charlie@example.com", role: "Moderator", status: "Active" },
	{ id: 6, name: "หมดลำ เอวเยอะ", email: "charlie@example.com", role: "Moderator", status: "Active" },
];

const UsersTable = () => {
	// สถานะที่ใช้เก็บคำค้นหาและข้อมูลผู้ใช้ที่กรองแล้ว
	const [searchTerm, setSearchTerm] = useState(""); // เก็บคำค้นหาที่พิมพ์
	const [filteredUsers, setFilteredUsers] = useState(userData); // เก็บข้อมูลผู้ใช้ที่ผ่านการกรอง

	// ฟังก์ชันจัดการการค้นหาผู้ใช้
	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase(); // เปลี่ยนคำค้นหาเป็นตัวพิมพ์เล็ก
		setSearchTerm(term); // อัพเดทคำค้นหาที่ผู้ใช้พิมพ์
		const filtered = userData.filter(
			(user) => user.name.toLowerCase().includes(term) || user.email.toLowerCase().includes(term)
		); // กรองข้อมูลผู้ใช้ที่ตรงกับคำค้นหา
		setFilteredUsers(filtered); // อัพเดทผู้ใช้ที่กรองแล้ว
	};

	return (
		// div ที่ใช้ framer-motion สำหรับแอนิเมชัน
		<motion.div
			className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
			initial={{ opacity: 0, y: 20 }} // สร้างเอฟเฟกต์ให้เริ่มจากโปร่งใสและเลื่อนขึ้น
			animate={{ opacity: 1, y: 0 }} // เมื่อโหลดเสร็จจะโปร่งใสเต็มที่และเลื่อนขึ้น
			transition={{ delay: 0.2 }} // ใช้ดีเลย์เล็กน้อย
		>
			{/* ส่วนหัวของตารางที่มีช่องค้นหา */}
			<div className="flex justify-between items-center mb-6">
				<h2 className="text-xl font-semibold text-gray-100">Users</h2>
				{/* ช่องค้นหาผู้ใช้ */}
				<div className="relative">
					<input
						type="text"
						placeholder="Search users..." // ข้อความแสดงในช่องค้นหา
						className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
						value={searchTerm} // แสดงคำค้นหาปัจจุบัน
						onChange={handleSearch} // เรียกฟังก์ชัน handleSearch เมื่อผู้ใช้พิมพ์
					/>
					{/* ไอคอนค้นหาที่อยู่ด้านซ้าย */}
					<Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
				</div>
			</div>

			{/* ตารางแสดงข้อมูลผู้ใช้ */}
			<div className="overflow-x-auto">
				<table className="min-w-full divide-y divide-gray-700">
					<thead>
						<tr>
							{/* หัวข้อของคอลัมน์ต่างๆ */}
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
								Name
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
								Email
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
								Role
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
								Status
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
								Actions
							</th>
						</tr>
					</thead>

					{/* ข้อมูลผู้ใช้ในแต่ละแถว */}
					<tbody className="divide-y divide-gray-700">
						{filteredUsers.map((user) => (
							<motion.tr
								key={user.id} // ใช้ id ของผู้ใช้เป็น key
								initial={{ opacity: 0 }} // เริ่มต้นจากโปร่งใส
								animate={{ opacity: 1 }} // เมื่อโหลดแล้วจะโปร่งใสเต็มที่
								transition={{ duration: 0.3 }} // ใช้เวลา 0.3 วินาทีในการแสดงแถว
							>
								{/* แสดงชื่อผู้ใช้ */}
								<td className="px-6 py-4 whitespace-nowrap">
									<div className="flex items-center">
										<div className="flex-shrink-0 h-10 w-10">
											{/* วงกลมที่แสดงตัวอักษรตัวแรกของชื่อผู้ใช้ */}
											<div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold">
												{user.name.charAt(0)} {/* แสดงอักษรตัวแรกของชื่อ */}
											</div>
										</div>
										{/* ชื่อผู้ใช้ */}
										<div className="ml-4">
											<div className="text-sm font-medium text-gray-100">{user.name}</div>
										</div>
									</div>
								</td>

								{/* แสดงอีเมลผู้ใช้ */}
								<td className="px-6 py-4 whitespace-nowrap">
									<div className="text-sm text-gray-300">{user.email}</div>
								</td>
								{/* แสดงบทบาทผู้ใช้ */}
								<td className="px-6 py-4 whitespace-nowrap">
									<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-800 text-blue-100">
										{user.role}
									</span>
								</td>

								{/* แสดงสถานะผู้ใช้ */}
								<td className="px-6 py-4 whitespace-nowrap">
									<span
										className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
											user.status === "Active"
												? "bg-green-800 text-green-100"
												: "bg-red-800 text-red-100"
										}`}
									>
										{user.status}
									</span>
								</td>

								{/* ปุ่มสำหรับแก้ไขและลบ */}
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
									<button className="text-indigo-400 hover:text-indigo-300 mr-2">Edit</button>
									<button className="text-red-400 hover:text-red-300">Delete</button>
								</td>
							</motion.tr>
						))}
					</tbody>
				</table>
			</div>
		</motion.div>
	);
};

export default UsersTable;

