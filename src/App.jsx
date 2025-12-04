// App.js
import React, { useState } from 'react';
import {
    ConfigProvider,
    Button,
    Input,
    Select,
    DatePicker,
    Switch,
    Slider,
    Radio,
    Checkbox,
    Card,
    Alert,
    Badge,
    Tag,
    Progress,
    Divider,
    Space,
    Typography,
    Table,
    Tabs,
    Modal,
    Form,
    message
} from 'antd';
import {
    SearchOutlined,
    UserOutlined,
    SettingOutlined,
    CheckCircleOutlined,
    CloseCircleOutlined,
    InfoCircleOutlined,
    WarningOutlined
} from '@ant-design/icons';
import themeConfig from './theme.json';

const { Title, Paragraph, Text } = Typography;
const { Option } = Select;

function App() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        message.success('Action completed successfully!');
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => (
                <Tag color={status === 'Active' ? 'success' : 'default'}>
                    {status}
                </Tag>
            ),
        },
    ];

    const dataSource = [
        { key: '1', name: 'John Doe', age: 32, status: 'Active' },
        { key: '2', name: 'Jane Smith', age: 28, status: 'Active' },
        { key: '3', name: 'Bob Johnson', age: 45, status: 'Inactive' },
    ];

    const tabItems = [
        {
            key: '1',
            label: 'Tab 1',
            children: 'Content of Tab 1',
        },
        {
            key: '2',
            label: 'Tab 2',
            children: 'Content of Tab 2',
        },
        {
            key: '3',
            label: 'Tab 3',
            children: 'Content of Tab 3',
        },
    ];

    return (
        <ConfigProvider theme={themeConfig}>
            <div style={{ padding: '40px', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
                <Title level={1}>Ant Design Component Showcase</Title>
                <Paragraph>
                    This page demonstrates all major Ant Design components with your custom theme.json configuration.
                </Paragraph>

                <Divider orientation="left">Buttons</Divider>
                <Space wrap>
                    <Button type="primary">Primary Button</Button>
                    <Button>Default Button</Button>
                    <Button type="dashed">Dashed Button</Button>
                    <Button type="text">Text Button</Button>
                    <Button type="link">Link Button</Button>
                    <Button type="primary" danger>Danger Primary</Button>
                    <Button danger>Danger Default</Button>
                </Space>

                <Divider orientation="left">Alerts</Divider>
                <Space direction="vertical" style={{ width: '100%' }}>
                    <Alert message="Success Alert" type="success" showIcon icon={<CheckCircleOutlined />} />
                    <Alert message="Info Alert" type="info" showIcon icon={<InfoCircleOutlined />} />
                    <Alert message="Warning Alert" type="warning" showIcon icon={<WarningOutlined />} />
                    <Alert message="Error Alert" type="error" showIcon icon={<CloseCircleOutlined />} />
                </Space>

                <Divider orientation="left">Form Inputs</Divider>
                <Card>
                    <Form layout="vertical">
                        <Form.Item label="Input">
                            <Input placeholder="Enter text" prefix={<UserOutlined />} />
                        </Form.Item>

                        <Form.Item label="Search Input">
                            <Input.Search
                                placeholder="Search something"
                                enterButton={<SearchOutlined />}
                            />
                        </Form.Item>

                        <Form.Item label="Select">
                            <Select defaultValue="option1" style={{ width: '100%' }}>
                                <Option value="option1">Option 1</Option>
                                <Option value="option2">Option 2</Option>
                                <Option value="option3">Option 3</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item label="Date Picker">
                            <DatePicker style={{ width: '100%' }} />
                        </Form.Item>

                        <Form.Item label="Switch">
                            <Switch defaultChecked />
                        </Form.Item>

                        <Form.Item label="Slider">
                            <Slider defaultValue={30} />
                        </Form.Item>

                        <Form.Item label="Radio Group">
                            <Radio.Group defaultValue="a">
                                <Radio.Button value="a">Option A</Radio.Button>
                                <Radio.Button value="b">Option B</Radio.Button>
                                <Radio.Button value="c">Option C</Radio.Button>
                            </Radio.Group>
                        </Form.Item>

                        <Form.Item label="Checkbox Group">
                            <Checkbox.Group>
                                <Checkbox value="A">Checkbox A</Checkbox>
                                <Checkbox value="B">Checkbox B</Checkbox>
                                <Checkbox value="C">Checkbox C</Checkbox>
                            </Checkbox.Group>
                        </Form.Item>
                    </Form>
                </Card>

                <Divider orientation="left">Cards & Tags</Divider>
                <Space direction="vertical" style={{ width: '100%' }} size="large">
                    <Card title="Card Title" extra={<Button type="link">More</Button>}>
                        <p>Card content goes here. This demonstrates the card component styling.</p>
                        <Space wrap>
                            <Tag color="success">Success</Tag>
                            <Tag color="processing">Processing</Tag>
                            <Tag color="error">Error</Tag>
                            <Tag color="warning">Warning</Tag>
                            <Tag color="default">Default</Tag>
                        </Space>
                    </Card>

                    <Card>
                        <Space>
                            <Badge count={5}>
                                <Button icon={<SettingOutlined />}>Notifications</Button>
                            </Badge>
                            <Badge dot>
                                <Button icon={<UserOutlined />}>Messages</Button>
                            </Badge>
                        </Space>
                    </Card>
                </Space>

                <Divider orientation="left">Progress</Divider>
                <Space direction="vertical" style={{ width: '100%' }}>
                    <Progress percent={30} />
                    <Progress percent={50} status="active" />
                    <Progress percent={70} status="exception" />
                    <Progress percent={100} />
                </Space>

                <Divider orientation="left">Table</Divider>
                <Table columns={columns} dataSource={dataSource} pagination={false} />

                <Divider orientation="left">Tabs</Divider>
                <Tabs defaultActiveKey="1" items={tabItems} />

                <Divider orientation="left">Modal</Divider>
                <Button type="primary" onClick={showModal}>
                    Open Modal
                </Button>
                <Modal
                    title="Modal Title"
                    open={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <p>This is a modal dialog. Your theme colors should be applied here too.</p>
                    <p>Click OK to see a success message, or Cancel to close.</p>
                </Modal>

                <Divider orientation="left">Typography</Divider>
                <Space direction="vertical">
                    <Title level={2}>Heading Level 2</Title>
                    <Title level={3}>Heading Level 3</Title>
                    <Title level={4}>Heading Level 4</Title>
                    <Paragraph>
                        This is a paragraph with <Text strong>strong text</Text>, <Text italic>italic text</Text>,
                        {' '}<Text underline>underlined text</Text>, and <Text type="danger">danger text</Text>.
                    </Paragraph>
                    <Text type="secondary">Secondary text</Text>
                    <br />
                    <Text type="success">Success text</Text>
                    <br />
                    <Text type="warning">Warning text</Text>
                </Space>
            </div>
        </ConfigProvider>
    );
}

export default App;