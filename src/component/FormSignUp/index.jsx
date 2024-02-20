import { useState } from "react"
import { Form, Input, Button, Typography, Radio, message } from "antd"
import { useDispatch, useSelector  } from "react-redux"
import { actionRegister } from "@/redux/user/action"
import "./index.css"
const { Title, Text } = Typography

export default function FormSignup() {
  const [mode, setMode] = useState("top")
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.user)
  const handleModeChange = (e) => {
    setMode(e.target.value)
  }
  const register = async (value) => {
    if (value.password !== value.confirm_password) {
      message.error("password doesn't match")
      return
    }
    const response = await dispatch(actionRegister(value))
    response ? console.log("complete") : console.error("Invalid password")
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
      <Title level={2}>Get More Opportunities</Title>
      <Button className="btn-google">Sign Up With Google</Button>
      <div>
        <Text className="line">or Sign Up with Email</Text>
      </div>
      <Form layout="vertical" onFinish={register}>
        <Form.Item label="Full name" name="username">
          <Input placeholder="Enter your full name" />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input placeholder="Enter email address" />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password placeholder="input password" />
        </Form.Item>
        <Form.Item label="Confirm Password" name="confirm_password">
          <Input.Password placeholder="input password" />
        </Form.Item>
        <Button
          htmlType="submit"
          type="primary"
          style={{ width: "100%", fontWeight: "bold" }}
          loading={loading}
        >
          Continue
        </Button>
      </Form>
      <p>
        Already have an account? <a href="/signin">Login</a>
      </p>
      <p>
        By clicking {"Continue"}, you acknowledge that you have read and accept
        the <a>Terms of Service</a> and <a>Privacy Policy</a>.
      </p>
    </div>
  )
}

