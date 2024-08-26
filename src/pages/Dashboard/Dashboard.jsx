import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Header from "./Header";
import WelcomeSection from "./WelcomeSection";
import CardSection from "./CardSection";
import RecentRecords from "./RecentRecords";
import AllNewCasesByPriority from "./AllNewCasesPriority";
import MakeItYourHome from "./MakeItYourHome";

const ItemType = "WIDGET";

const DraggableWidget = ({ widget, index, moveWidget, removeWidget }) => {
  const [, drag] = useDrag({
    type: ItemType,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveWidget(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  const ref = React.useRef(null);
  drag(drop(ref));

  const renderWidget = () => {
    switch (widget) {
      case "My Leads":
        return (
          <CardSection widgetName="My Leads" removeWidget={removeWidget} />
        );
      case "My Opportunities":
        return (
          <CardSection
            widgetName="My Opportunities"
            removeWidget={removeWidget}
          />
        );
      case "My Contacts":
        return (
          <CardSection widgetName="My Contacts" removeWidget={removeWidget} />
        );
      case "Recent Records":
        return <RecentRecords removeWidget={removeWidget} />;
      case "All New Cases By Priority":
        return <AllNewCasesByPriority removeWidget={removeWidget} />;
      case "Make It Your Home":
        return <MakeItYourHome removeWidget={removeWidget} />;
      default:
        return null;
    }
  };

  return (
    <div ref={ref} className="widget  ">
      {renderWidget()}
    </div>
  );
};

const Dashboard = () => {
  const [widgets, setWidgets] = useState([]);

  const addWidget = (widgetName) => {
    if (!widgets.includes(widgetName)) {
      setWidgets([...widgets, widgetName]);
    }
  };

  const removeWidget = (widgetName) => {
    setWidgets(widgets.filter((widget) => widget !== widgetName));
  };

  const moveWidget = (fromIndex, toIndex) => {
    const updatedWidgets = [...widgets];
    const [movedWidget] = updatedWidgets.splice(fromIndex, 1);
    updatedWidgets.splice(toIndex, 0, movedWidget);
    setWidgets(updatedWidgets);
  };

  return (
    <main className="ml-20">
      <DndProvider backend={HTML5Backend}>
        <div className="min-h-screen flex flex-col">
          <Header addWidget={addWidget} />

          <div className="m-6 bg-gray-100 flex-grow">
            <WelcomeSection />
            <div className=" grid grid-cols-1 md:grid-cols-3  gap-6 ">
              {widgets.map((widget, index) => (
                <DraggableWidget
                  key={widget}
                  widget={widget}
                  index={index}
                  moveWidget={moveWidget}
                  removeWidget={() => removeWidget(widget)}
                />
              ))}
            </div>
          </div>
        </div>
      </DndProvider>
    </main>
  );
};

export default Dashboard;
