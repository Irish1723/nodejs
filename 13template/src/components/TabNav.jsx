export default function TabNav({ tabs, activeTab, onTabSwitch }) {
  return (
    <div className="flex gap-2 mb-4 border-b pb-2">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`px-4 py-2 rounded-t ${activeTab === tab.id 
            ? 'bg-white shadow font-bold' 
            : 'bg-gray-100 text-gray-700'}`}
          onClick={() => onTabSwitch(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
