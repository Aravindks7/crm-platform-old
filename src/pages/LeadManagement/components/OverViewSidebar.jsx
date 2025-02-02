const Sidebar = () => {
  const relatedList = [
    { name: "Notes", count: 0, link: "#notes" },
    { name: "Cadences", count: 0, link: "#attachments" },
    { name: "Attachments", count: 1, link: "#deals" },
    { name: "Products", count: 0, link: "#products" },
    { name: "Open Activities", count: 2, link: "#open-activities" },
    { name: "Closed Activities", count: 0, link: "#closed-activities" },
    { name: "Invited Meetings", count: 1, link: "#contacts" },
    { name: "Emails", count: 0, link: "#emails" },
    { name: "Campaigns", count: 0, link: "#quotes" },
    { name: "Social", count: 0, link: "#social" },
  ];

  return (
    <div className="w-80 p-8 bg-white border-r border-gray-200" style={{marginLeft:"70px"}}>
      <h3 className="text-lg font-bold mb-6">Related List</h3>
      <ul className="space-y-5">
        {relatedList.map((item) => (
          <li key={item.name} className="flex justify-between items-center">
            <a href={item.link} className="text-sm text-primary font-semibold no-underline">
              {item.name}
            </a>
            {item.count > 0 && (
              <span className="bg-blue-100 text-blue-600 text-xs flex items-center justify-center font-semibold h-[24px] w-[24px] rounded-full">
                {item.count}
              </span>
            )}
          </li>
        ))}
      </ul>
      <div className="mt-5">
        <a href="#add-related-list" className="text-blue-500 font-semibold text-sm no-underline ml-2">
          Add Related List
        </a>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-bold mb-4">Links</h3>
        <a href="#add-link" className="text-blue-500 font-semibold text-sm no-underline ml-2">
          Add Link
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
