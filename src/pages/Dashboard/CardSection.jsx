import React from 'react';
import leads from '/images/leads.png';
import leads2 from '/images/leads2.png';
import icon2 from '/images/icon2.png';
import graphics1 from '/images/graphics1.png';
import icon3 from '/images/icon3.png';
import Widget from './Widget';

const CardSection = ({ widgetName, removeWidget }) => {
  const handleRemove = () => {
    removeWidget(widgetName);
  };

  if (widgetName === 'My Leads') {
    return (
      <Widget
        icon={<img src={leads} alt="My Leads Icon" className="rounded-full" />}
        title="My Leads"
        description="Track progress as you qualify leads."
        imgSrc={leads2}
        removeWidget={handleRemove}
      />
    );
  } else if (widgetName === 'My Opportunities') {
    return (
      <Widget
        icon={<img src={icon2} alt="My Opportunities Icon" />}
        title="My Opportunities"
        description="View your deals to keep them moving."
        imgSrc={graphics1}
        removeWidget={handleRemove}
      />
    );
  } else if (widgetName === 'My Contacts') {
    return (
      <Widget
        icon={<img src={icon3} alt="My Contacts Icon" />}
        title="My Contacts"
        showTable={true}
        removeWidget={handleRemove}
      />
    );
  } else {
    return null;
  }
};

export default CardSection;
