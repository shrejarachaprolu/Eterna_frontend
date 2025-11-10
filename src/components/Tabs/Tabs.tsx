"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setActiveTab } from "@/store/uiSlice";

const tabs = ["New Pairs", "Final Stretch", "Migrated"];

export default function Tabs() {
  const dispatch = useDispatch();
  const activeTab = useSelector((state: RootState) => state.ui.activeTab);

  return (
    <div className="flex gap-6 border-b border-gray-800 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => dispatch(setActiveTab(tab))}
          className={`pb-2 border-b-2 transition ${
            activeTab === tab
              ? "border-indigo-500 text-white"
              : "border-transparent text-gray-400 hover:text-white hover:border-indigo-500"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
