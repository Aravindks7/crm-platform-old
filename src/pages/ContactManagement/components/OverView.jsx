import { Button, Tag } from "antd";
import { FiPhone } from "react-icons/fi";
import { useState } from "react";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";
import Header from "./OverViewHeader";
import Sidebar from "./OverViewSidebar";
import { data } from "../../../data/accounts";
import { useParams } from "react-router-dom";

const Overview = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const toggleDetails = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };

  const { id } = useParams();
  const item = data.find((d) => d.id === parseInt(id));

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4 overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            {/* Custom Switch */}

            <div className="flex items-center justify-center bg-white border border-gray-200 rounded-full shadow-sm p-2 gap-1">
              <Button
                type="text"
                onClick={() => setActiveTab("Overview")}
                className={`px-4 py-1 rounded-full ${
                  activeTab === "Overview"
                    ? "bg-blue-100 border border-blue-400 text-blue-600"
                    : "text-gray-600"
                }`}
              >
                Overview
              </Button>
              <Button
                type="text"
                onClick={() => setActiveTab("Timeline")}
                className={`px-4 py-1 rounded-full ${
                  activeTab === "Timeline"
                    ? "bg-blue-100 border border-blue-400 text-blue-600"
                    : "text-secondary"
                }`}
              >
                Timeline
              </Button>
            </div>
            <p className="text-xs text-secondary mt-2">
              Last Update: 7 day(s) ago
            </p>
          </div>
          {activeTab === "Overview" ? (
            <>
              {/* Account Details Section */}

              <section className="">
                <div className="bg-white border border-gray-200 px-6 py-4 rounded-lg shadow-sm mb-4">
                  {[
                    { label: "Contact Owner", value: item.account_owner },
                    { label: "Email", value: item.email },
                    {
                      label: "Phone",
                      value: (
                        <span className="flex items-center gap-2">
                          <FiPhone
                            size={24}
                            className="text-green-500 bg-green-100 p-1 rounded-md"
                          />
                          {item.phone}
                        </span>
                      ),
                    },
                    {
                      label: "Mobile",
                      value: (
                        <span className="flex items-center gap-2">
                          <FiPhone
                            size={24}
                            className="text-green-500 bg-green-100 p-1 rounded-md"
                          />
                          {item.mobile}
                        </span>
                      ),
                    },
                    { label: "Department", value: item.department },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center my-4">
                      <p className="text-secondary text-sm text-right mr-12 min-w-[160px]">
                        {item.label}
                      </p>
                      <p className="text-primary text-sm font-medium ">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Deals, Next Action, and Contacts Section */}

              <section className="flex mb-4 bg-white border border-gray-200 px-8 py-6 rounded-lg shadow-sm">
                <div className="w-1/2">
                  <h3 className="font-bold mb-4 text-lg">Deals</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <h4 className="font-semibold text-primary text-sm">
                        {item.account_name}
                      </h4>
                      <Tag color="red" className="ml-4">
                        $60,000.00
                      </Tag>
                    </div>
                    <div className="flex items-center">
                      <h3 className="text-primary text-sm">
                        Identify Decision Makers
                      </h3>
                      <h3 className="text-primary ml-4 text-sm">05/07/2024</h3>
                    </div>
                  </div>
                </div>

                <div className="border-l border-gray-200 mx-6" />

                <div className="w-1/2">
                  <h3 className="font-bold text-lg mb-4">Next Action</h3>
                  {[
                    {
                      date: "JUL 2",
                      action: "Register for upcoming CRM Webinars",
                    },
                    { date: "JUL 2", action: "Get Approval from Manager" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 mb-2"
                    >
                      <Tag color="red">{item.date}</Tag>
                      <div className=" text-primary text-sm font-semibold">
                        {item.action}
                      </div>
                    </div>
                  ))}
                </div>

              </section>

              {/* Hide Details Section */}

              <section>
                <div className="px-2 py-4 bg-white border border-gray-200 rounded-lg">
                  {/* Toggle Details Button */}
                  <div className="mb-4 flex justify-between items-center">
                    <Button
                      type="link"
                      onClick={toggleDetails}
                      className="text-black font-bold hover:!text-secondary"
                    >
                      {isDetailsVisible ? (
                        <>
                          <CaretUpOutlined /> Hide Details
                        </>
                      ) : (
                        <>
                          <CaretDownOutlined /> Show Details
                        </>
                      )}
                    </Button>
                  </div>
                  <div className="px-6">
                    <div className="border-t border-grey-200 my-4" />

                    {isDetailsVisible ? (
                      <>
                        {/* Full Account Information Section */}
                        <div className="px-6 py-2 rounded-lg  mb-8">
                          <h2 className="text-lg font-semibold mb-6 ">
                            Account Information
                          </h2>
                          <div className="grid grid-cols-2 gap-8">
                            {/* Left Column */}
                            <div>
                              {[
                                {
                                  label: "Contact Owner",
                                  value: item.account_owner,
                                },
                                {
                                  label: "Account Name",
                                  value: item.account_name,
                                },
                                { label: "Email", value: item.email },
                                {
                                  label: "Phone",
                                  value: (
                                    <span className="flex items-center gap-2">
                                      <FiPhone
                                        size={24}
                                        className="text-green-500 bg-green-100 p-1 rounded-md"
                                      />
                                      {item.phone}
                                    </span>
                                  ),
                                },
                                { label: "Other Phone", value: "—" },
                                {
                                  label: "Mobile",
                                  value: (
                                    <span className="flex items-center gap-2">
                                      <FiPhone
                                        size={24}
                                        className="text-green-500 bg-green-100 p-1 rounded-md"
                                      />
                                      {item.mobile}
                                    </span>
                                  ),
                                },
                                { label: "Assistant", value: "—" },
                                {
                                  label: "Created By",
                                  value: item.created_by,
                                },
                                {
                                  label: "Modified By",
                                  value: item.modified_by,
                                },
                              ].map((item, index) => (
                                <div
                                  key={index}
                                  className="flex items-center my-4"
                                >
                                  <p className="text-secondary text-right mr-12 min-w-[160px] text-sm">
                                    {item.label}
                                  </p>
                                  <p className="text-primary font-medium text-sm">
                                    {item.value}
                                  </p>
                                </div>
                              ))}
                            </div>

                            {/* Right Column */}
                            <div>
                              {[
                                { label: "Lead Source" },
                                {
                                  label: "Contact Name",
                                  value: item.contact_name,
                                },
                                { label: "Vendor Name", value: "—" },
                                { label: "Title", value: item.title },
                                { label: "Department", value: item.department },
                                { label: "Home Phone", value: "—" },
                                { label: "Fax", value: "—" },
                                { label: "Date Of Birth", value: "—" },
                                { label: "Asst Phone", value: "—" },
                                { label: "Email Opt Out", value: "—" },
                                { label: "Skype ID" },
                                { label: "Secondary Email", value: "—" },
                                { label: "Reporting To", value: "—" },
                                { label: "Twitter", value: "—" },
                              ].map((item, index) => (
                                <div
                                  key={index}
                                  className="flex items-center my-4"
                                >
                                  <p className="text-secondary text-right mr-12 min-w-[160px] text-sm">
                                    {item.label}
                                  </p>
                                  <p className="text-primary font-medium text-sm">
                                    {item.value}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="border-t border-grey-200 my-6" />

                        {/* Address Information Section */}
                        <div className=" px-6 py-2 rounded-lg  mb-8">
                          <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold mb-6">
                              Address Information
                            </h2>
                            <div>
                              <Button className="py-2 px-4 rounded-md">
                                Locate Map
                              </Button>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-8">
                            {/* Left Column */}
                            <div>
                              {[
                                {
                                  label: "Mailing Street",
                                  value:
                                    item.address_information.billing_street,
                                },
                                {
                                  label: "Mailing City",
                                  value: item.address_information.billing_city,
                                },
                                {
                                  label: "Mailing State",
                                  value: item.address_information.billing_state,
                                },
                                {
                                  label: "Mailing Code",
                                  value: item.address_information.billing_code,
                                },
                                {
                                  label: "Mailing Country",
                                  value:
                                    item.address_information.billing_country,
                                },
                              ].map((item, index) => (
                                <div
                                  key={index}
                                  className="flex items-center my-4"
                                >
                                  <p className="text-secondary text-right mr-12 min-w-[160px] text-sm">
                                    {item.label}
                                  </p>
                                  <p className="text-primary font-medium text-sm">
                                    {item.value}
                                  </p>
                                </div>
                              ))}
                            </div>

                            {/* Right Column */}
                            <div>
                              {[
                                { label: "Other Street", value: "—" },
                                { label: "Other City", value: "—" },
                                { label: "Other State", value: "—" },
                                { label: "Other Code", value: "—" },
                                { label: "Other Country", value: "—" },
                              ].map((item, index) => (
                                <div
                                  key={index}
                                  className="flex items-center my-4"
                                >
                                  <p className="text-secondary text-right mr-12 min-w-[160px] text-sm">
                                    {item.label}
                                  </p>
                                  <p className="text-primary font-medium text-sm">
                                    {item.value}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="border-t border-grey-200 my-6" />

                        {/* Description Information Section */}
                        <div className="px-6 py-2 rounded-lg  mb-8">
                          <h2 className="text-lg font-semibold mb-6 ">
                            Description Information
                          </h2>
                          <div className="flex items-center ">
                            <h3 className="text-secondary text-right mr-12 min-w-[160px] text-sm">
                              Description
                            </h3>
                            <p className="font-medium text-primary text-sm">
                              —
                            </p>
                          </div>
                        </div>

                        <div className="border-t border-grey-200 my-6" />

                        {/* Visit Summary Section */}
                        <div className="px-6 py-2 rounded-lg mb-8">
                          <h2 className="text-lg font-semibold mb-6 ">
                            Visit Summary
                          </h2>
                          <div className="grid grid-cols-2 gap-8">
                            {/* Left Column */}
                            <div>
                              {[
                                {
                                  label: "Most Recent Visit",
                                  value: "—",
                                },
                                {
                                  label: (
                                    <div className="flex flex-col">
                                      <span>Average Time Spent</span>
                                      <span>(Minutes)</span>
                                    </div>
                                  ),
                                  value: "—",
                                },
                                {
                                  label: "Referrer",
                                  value: "—",
                                },
                                {
                                  label: "First Visit",
                                  value: "—",
                                },
                              ].map((item, index) => (
                                <div
                                  key={index}
                                  className="flex items-center my-4"
                                >
                                  <p className="text-secondary text-right mr-12 min-w-[160px] text-sm">
                                    {item.label}
                                  </p>
                                  <p className="text-primary font-medium text-sm">
                                    {item.value}
                                  </p>
                                </div>
                              ))}
                            </div>

                            {/* Right Column */}
                            <div>
                              {[
                                {
                                  label: "First Page Visited",
                                  value: "—",
                                },
                                {
                                  label: "Number of Chats",
                                  value: "—",
                                },
                                {
                                  label: "Visitor Score",
                                  value: "—",
                                },
                                {
                                  label: "Days Visited",
                                  value: "—",
                                },
                              ].map((item, index) => (
                                <div
                                  key={index}
                                  className="flex items-center my-4"
                                >
                                  <p className="text-secondary text-right mr-12 min-w-[160px] text-sm">
                                    {item.label}
                                  </p>
                                  <p className="text-primary font-medium text-sm">
                                    {item.value}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="border-t border-grey-200 my-6" />

                        {/* Notes Section */}
                        <div className="px-6 py-2 rounded-lg ">
                          <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold">Notes</h2>
                            <Button type="link" className="text-blue-500">
                              Recent Last ▼
                            </Button>
                          </div>
                          <textarea
                            className="w-full p-4 border rounded-md mb-4 text-sm"
                            placeholder="Add a note..."
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Partially visible Account Information Section */}
                        <div className="px-6 py-2 rounded-lg  mb-8">
                          <h2 className="text-lg font-semibold mb-6 ">
                            Account Information
                          </h2>
                          <div className="grid grid-cols-2 gap-8">
                            {/* Show only the first few items */}
                            <div>
                              <div className="flex items-center my-4">
                                <p className="text-secondary text-right mr-12 min-w-[160px] text-sm">
                                  Contact Owner
                                </p>
                                <p className="text-primary font-medium text-sm">
                                  {item.account_owner}
                                </p>
                              </div>
                              <div className="flex items-center my-4">
                                <p className="text-secondary text-right mr-12 min-w-[160px] text-sm">
                                  Account Name
                                </p>
                                <p className="text-primary font-medium text-sm">
                                  {item.account_name}
                                </p>
                              </div>
                            </div>

                            <div>
                              <div className="flex items-center my-4">
                                <p className="text-secondary text-right mr-12 min-w-[160px] text-sm">
                                  Lead Source
                                </p>
                                <p className="text-primary font-medium text-sm"></p>
                              </div>
                              <div className="flex items-center my-4">
                                <p className="text-secondary text-right mr-12 min-w-[160px] text-sm">
                                  Contact Name
                                </p>
                                <p className="text-primary font-medium text-sm">
                                  <span className="flex items-center gap-2">
                                    {item.contact_name}
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="border-t border-grey-200 my-6" />
                      </>
                    )}
                  </div>
                </div>
              </section>
            </>
          ) : (
            <div className="text-center text-lg font-semibold">
              Timeline Content Goes Here...
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Overview;
