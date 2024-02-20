import { Typography, Row, Col, Card, Space, Table, DatePicker } from "antd"
import { ArrowRightOutlined } from "@ant-design/icons"
import Image from "next/image"
import Link from "next/link"
import Chart from "react-apexcharts"
import "./index.css"

const onChange = (value, dateString) => {
  console.log("Selected Time: ", value)
  console.log("Formatted Selected Time: ", dateString)
}
const onOk = (value) => {
  console.log("onOk: ", value)
}
const { Title, Text } = Typography
const options = {
  labels: ["Unsuitable", "Interviewed"],
  colors: ["#E9EBFD", "#4640DE"],
}
const series = [60, 40]
const dataSource = [
  {
    key: "1",
    company: "PT Pupuk Indonesia",
    date: "10-09-01",
    status: "active",
  },
  {
    key: "2",
    company: "PT Pama Persada",
    date: "11-08-01",
    status: "active",
  },
  {
    key: "3",
    company: "PT Gudang Garam",
    date: "01-02-09",
    status: "failed",
  },
]
const columns = [
  {
    title: "Company",
    dataIndex: "company",
    key: "company",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
]

export default function DashboardContent() {
  return (
    <div>
      <div classcompany="content-header">
        <Title level={4}>Good morning, Jake</Title>
        <Text>
          Here is what’s happening with your job search applications from July
          19 - July 25.
        </Text>
      </div>
      <Row gutter={24}>
        <Col>
          <Space direction="vertical" size={16}>
            <Card size="small" style={{ width: 200 }}>
              <Title level={5} style={{ fontSize: 20 }}>
                Total Jobs Applied
              </Title>
              <Text style={{ fontSize: 72, fontWeight: "bold" }}>45</Text>
              <Image
                className="icon-card"
                src="/Icon.png"
                width={88}
                height={88}
                alt="..."
              />
            </Card>
            <Card size="small" style={{ width: 200 }}>
              <Title level={5} style={{ fontSize: 20 }}>
                Interviewed
              </Title>
              <Text style={{ fontSize: 72, fontWeight: "bold" }}>18</Text>
              <Image
                className="icon-card"
                src="/Icon2.png"
                width={88}
                height={88}
                alt="..."
              />
            </Card>
          </Space>
        </Col>
        <Col>
          <Card
            style={{
              width: 350,
              height: 356,
            }}
          >
            <Title level={5} style={{ fontSize: 20 }}>
              Jobs Applied Status
            </Title>
            <div classcompany="chart-box">
              <Chart
                options={options}
                series={series}
                labels={[40, 60]}
                type="donut"
                width="300"
              />
            </div>
            <Link classcompany="linkku" href="#">
              View All Application
              <ArrowRightOutlined />
            </Link>
          </Card>
        </Col>
        <Col>
          <Card
            title="Upcoming Interviews"
            style={{
              width: 300,
            }}
          >
            <Space direction="vertical" size={12}>
              <DatePicker showTime onChange={onChange} onOk={onOk} />
            </Space>
          </Card>
        </Col>
      </Row>
      <div className="tabel">
        <Card
          title="Recent Applications History"
          style={{
            width: 1000,
          }}
        >
          <Table dataSource={dataSource} columns={columns} showHeader={false} />
        </Card>
      </div>
    </div>
  )
}
