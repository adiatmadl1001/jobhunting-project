"use client"
import FormLogin from "@/component/FormSignIn"
import { Col, Row } from "antd"

const Page = () => {
    return (
        <Row>
        <Col span={11} style={{ backgroundColor:"#F8F8FD", height:"100vh" }}>
    
        </Col>       
        <Col span={13} style={{ backgroundColor:"fffff"}}>            
            <FormLogin/>
        </Col>
    </Row>
    )
}

export default Page