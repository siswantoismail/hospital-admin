import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import { CalendarDays, FileDown } from "lucide-react";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <div className="p-8 flex items-center justify-between">
          <div>
            <h1 className="font-bold">Hospital Overview</h1>
            <p className="text-gray-600">
              Real-time status of clinical operations
            </p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-100 transition-all duration-300 text-sm font-medium text-gray-700">
              <CalendarDays size={17} />
              This Week
            </button>

            {/* Export PDF Button */}
            <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-100 transition-all duration-300 text-sm font-medium text-gray-700">
              <FileDown size={17} />
              Export PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
