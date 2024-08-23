import { Button, Dropdown, Menu } from "antd";
import { IoMdPricetag } from "react-icons/io";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import {
  EditOutlined,
  MailOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import { GoArrowLeft } from "react-icons/go";
import { data } from "../../../data/accounts";
import { useNavigate, useParams } from "react-router-dom";

const menu = (
  <Menu>
    <Menu.Item key="1">Option 1</Menu.Item>
    <Menu.Item key="2">Option 2</Menu.Item>
    <Menu.Item key="3">Option 3</Menu.Item>
  </Menu>
);

const Header = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const item = data.find((d) => d.id === parseInt(id));

  const onBackClick = () => {
    navigate("/accounts");
  };

  return (
    <header className="flex items-center justify-between px-8 py-2 bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center space-x-2">
        <GoArrowLeft
          size={24}
          className="text-lg cursor-pointer"
          onClick={() => {
            onBackClick();
          }}
        />
        <div className="flex items-center">
          <img
            src="/images/Profile2.png"
            alt="Profile Photo"
            className="rounded-full w-20 h-20 mr-2"
          />
          <div className="flex flex-col space-y-1">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold">{item.account_name} -</h1>
              <a href={item.website} className="text-blue-500 text-sm">
                {item.website}
              </a>
            </div>
            <Button
              type="link"
              className="text-gray-400 p-0 h-26 d-flex"
              style={{ justifyContent: "left" }}
            >
              <IoMdPricetag />
              Add Tags
            </Button>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Button type="primary" icon={<MailOutlined />}>
          Send Mail
        </Button>
        <Button icon={<EditOutlined />}>Edit</Button>
        <Dropdown overlay={menu} trigger={["click"]}>
          <Button shape="circle" icon={<EllipsisOutlined />} />
        </Dropdown>
        <AiOutlineLeft className="cursor-pointer" />
        <AiOutlineRight className="cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
