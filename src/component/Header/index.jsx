import { Badge, Button, Layout, Space, Typography } from "antd"
import { BellOutlined } from "@ant-design/icons"
import { usePathname } from "next/navigation"
import "./index.css"
import { menuList } from "@/utilities/sideMenuConfig"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { actionGetUser } from "@/redux/user/action"
const { Header } = Layout

const HeaderBar = () => {
  const pathname = usePathname()
  const findMenu = menuList.find((prev)=>prev.route === pathname)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(actionGetUser())
  },[])

  return (
    <Header className="header">
      <Typography.Title level={1}>{findMenu && findMenu.label}</Typography.Title>
      <Space className="header-button">
        <Button>Back to Homepage</Button>
        <Badge dot>
          <BellOutlined style={{ fontSize: 16 }} />
        </Badge>
      </Space>
    </Header>
  )
}

export default HeaderBar
