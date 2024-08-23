import PropTypes from 'prop-types'

const Tooltip = ({ text, children }) => {
  return (
    <div className="relative group">
      {/* The element that will trigger the tooltip */}
      {children}
      
      {/* Tooltip text */}
      <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-3 hidden group-hover:flex items-center justify-center px-3 py-1 bg-blue-500 text-white text-xs rounded shadow-lg whitespace-nowrap">
        {/* Tooltip Arrow */}
        <div className="absolute -left-1.5 top-1/2 transform -translate-y-1/2 w-0 h-0 border-y-8 border-y-transparent border-r-8 border-r-blue-500"></div>
        {text}
      </div>
    </div>
  );
};

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Tooltip;
