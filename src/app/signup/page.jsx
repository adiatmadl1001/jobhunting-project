'use client'
import FormSignUp from "@/component/FormSignUp"
import { Col, Row } from "antd"

const Page = () => {
  return (
    <Row>
        <Col span={11} style={{ backgroundColor:"#F8F8FD", height:"100vh" }}>
    
        </Col>       
        <Col span={13} style={{ backgroundColor:"fffff"}}>            
            <FormSignUp/>
        </Col>
    </Row>
  )
}

export default Page
