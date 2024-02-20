import { useState } from "react"
import { Form, Input, Button, Typography, Radio, Checkbox } from "antd"
import "./index.css"
const { Title, Text } = Typography

const FormLogin = () => {
  const [mode, setMode] = useState("top")
  const handleModeChange = (e) => {
    setMode(e.target.value)
  }

  return (
    <div className="form-wrapper">
      <Radio.Group
        onChange={handleModeChange}
        value={mode}
        style={{ marginBottom: 8 }}
      >
        <Radio.Button value="top">Job Seeker</Radio.Button>
        <Radio.Button value="left">Company</Radio.Button>
      </Radio.Group>
      <Title level={2}>Welcome Back, Dude</Title>
      <Button className="btn-google">Login With Google</Button>
      <div>
        <Text className="line">or Login with Email</Text>
      </div>
      <Form layout="vertical">
        <Form.Item label="Email Address">
          <Input placeholder="Enter email address" />
        </Form.Item>
        <Form.Item label="Password">
          <Input placeholder="Enter password" />
        </Form.Item>
        <Form.Item name="Remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Button type="primary" style={{ width: "100%", fontWeight: "bold" }}>
          Login
        </Button>
      </Form>
      <p>
        dont have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  )
}

export default FormLogin
