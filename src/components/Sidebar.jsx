import {
  LayoutDashboard,
  Users,
  Calendar,
  Stethoscope,
  Pill,
  FileText,
  Settings,
  Plus,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-65 h-screen bg-linear-to-b from-[#111827] to-[#0B1220] text-white flex flex-col justify-between p-5">
      <div className="mb-10">
        <div className="text-2xl font-bold">MedAdmin Pro</div>
        <p className="text-sm text-gray-400">General Hospital</p>
        <nav className="space-y-2">
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            title="Dashboard"
            active
          />
          <SidebarItem icon={<Users size={20} />} title="Users" />
          <SidebarItem icon={<Calendar size={20} />} title="Appointments" />
          <SidebarItem icon={<Stethoscope size={20} />} title="Doctors" />
          <SidebarItem icon={<Pill size={20} />} title="Pharmacy" />
          <SidebarItem icon={<FileText size={20} />} title="Reports" />
        </nav>
      </div>

      <div>
        <button className="flex items-center space-x-3 p-1 rounded-lg bg-blue-600 hover:bg-blue-700 w-full mb-4">
          <SidebarItem icon={<Plus size={20} />} title="Add New" />
        </button>
        <SidebarItem icon={<Settings size={20} />} title="Settings" />
        <SidebarItem icon={<Users size={20} />} title="Logout" />
      </div>
    </div>
  );
};

function SidebarItem({ icon, title, active }) {
  return (
    <div
      className={`flex items-center space-x-3 p-2 rounded-lg ${active ? "bg-gray-700" : "hover:bg-blue-500"}`}
    >
      {icon}
      <span className="text-sm">{title}</span>
    </div>
  );
}

export default Sidebar;
