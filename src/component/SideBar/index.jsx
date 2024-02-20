import Image from "next/image"
import Link from "next/link"
import { Layout } from "antd"
import { menuList, menuSetting } from "@/utilities/sideMenuConfig"
import "./index.css"

const { Sider } = Layout

const SideBar = () => {
  return (
    <>
      <Sider className="sider" width={230}>
        <div className="logo">
          <Image width={160} height={36} src="/Logo.png" alt="..." />
        </div>
        <div className="sider-menu">
          <div>
            {menuList.map((data, index) => {
              return (
                <>
                  <Link key={index} href={data.route}>
                    <li>{data.label}</li>
                  </Link>
                </>
              )
            })}
          </div>
          <div>
            <hr />
            <label
              style={{
                padding: 32,
                fontSize: 16,
                fontWeight: 500,
                color: "#7c8493",
              }}
            >
              SETTINGS
            </label>
            {menuSetting.map((data, index) => {
              return (
                <>
                  <Link key={index} href={data.route}>
                    <li>{data.label}</li>
                  </Link>
                </>
              )
            })}
          </div>
        </div>
      </Sider>
    </>
  )
}
export default SideBar
