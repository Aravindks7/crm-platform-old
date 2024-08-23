import PropTypes from "prop-types";


const Card = ({ title, count, percentage, amount, deals }) => {
  return (
    <div className="container">
      <div className="bg-[#DAF5F7] px-4 py-3 rounded-t-lg border-t-4 border-[#99D1D3] ml-2 w-full">
        <div className="">
          <div className="flex items-center gap-x-2">
            <h3 className="text-gray-700 font-semibold">{title}</h3>
            <span className="bg-[#99D1D3] px-[6px] py-[1px] text-sm font-semibold rounded-full -mt-2">
              {count}
            </span>
            <div className="w-1 h-1 rounded-full bg-gray-600 -mt-2" />
            <span className="text-sm text-gray-700 -mt-2">{percentage}</span>
          </div>
          <h2 className="text-lg font-bold text-gray-800">{amount}</h2>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow px-4 py-1 m-2 w-full">
        <div className="mt-4">
          {deals.map((deal, index) => (
            <div key={index} className="mb-4 border-t border-gray-200 pt-4">
              <h4 className="font-semibold text-gray-700">{deal.company}</h4>
              <p className="text-gray-500">{deal.contact}</p>
              <p className="text-gray-800 font-bold">
                ${deal.value.toLocaleString()}
              </p>
              <div className="flex items-center justify-between">
                <p className="text-red-500">{deal.date}</p>
                <div className="text-red-500">
                  {deal.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  percentage: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  deals: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string.isRequired,
      contact: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      icon: PropTypes.element,
    })
  ).isRequired,
};

export default Card;
