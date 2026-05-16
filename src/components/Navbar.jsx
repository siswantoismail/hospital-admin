import { Search, Bell, Settings } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full h-20 bg-white border-b border-gray-200 px-8 flex items-center justify-between">
      {/* Search */}
      <div className="relative w-112.5">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search patients, doctors, or records..."
          className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">
        {/* Notification */}
        <div className="relative cursor-pointer">
          <Bell size={20} className="text-gray-600 hover:text-blue-600" />

          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>

        {/* Settings */}
        <div className="cursor-pointer">
          <Settings size={20} className="text-gray-600 hover:text-blue-600" />
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="text-right">
            <h3 className="text-sm font-semibold text-gray-800">
              Admin Central
            </h3>

            <p className="text-xs text-gray-400">Profile</p>
          </div>

          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="profile"
            className="w-11 h-11 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
