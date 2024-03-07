'use client'
import FormSignUp from "@/component/FormSignUp"
import { Col, Row } from "antd"
import bgImage from "../../../public/BG.png"

const Page = () => {
  return (
    <Row>
        <Col span={11} style={{ backgroundImage: `url(${bgImage})` }}>

        </Col>       
        <Col span={13} style={{ backgroundColor:"fffff"}}>            
            <FormSignUp/>
        </Col>
    </Row>
  )
}

export default Page
