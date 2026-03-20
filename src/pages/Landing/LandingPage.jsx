import { Button, Typography, Row, Col, Card, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
    SwapOutlined,
    SearchOutlined,
    LineChartOutlined,
    CheckCircleOutlined,
    WalletOutlined,
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const features = [
    {
        title: "Regime Comparison",
        description: "Compare Old vs New tax regime and show the best option.",
        icon: <SwapOutlined style={{ fontSize: 28 }} />
    },
    {
        title: "Tax Leakage Detection",
        description: "Identify missed deductions and hidden tax-saving opportunities.",
        icon: <SearchOutlined style={{ fontSize: 28 }} />
    },
    {
        title: "Tax Health Score",
        description: "Show overall tax optimization score.",
        icon: <LineChartOutlined style={{ fontSize: 28 }} />
    },
    {
        title: "Actionable Recommendations",
        description: "Provide clear steps to reduce tax.",
        icon: <CheckCircleOutlined style={{ fontSize: 28 }} />
    },
    {
        title: "Salary Structure Analysis",
        description: "Analyze salary structure for better tax efficiency.",
        icon: <WalletOutlined style={{ fontSize: 28 }} />
    }
];


const LandingPage = () => {
    const navigate = useNavigate();

    return (
                <div style={{
                    backgroundColor: 'var(--bg-page)',
                    minHeight: '100vh',
                    color: '#FFFFFF',
                    overflowX: 'hidden'
                }}>
                    {/* Hero Section */}
                    <section style={{
                        minHeight: '80vh',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '80px 24px',
                        textAlign: 'center',
                        maxWidth: 1200,
                        margin: '0 auto'
                    }}>
                        <Space direction="vertical" size={24} align="center">
                            <Title style={{
                                color: '#FFFFFF',
                                fontSize: 'clamp(3.5rem, 10vw, 6rem)',
                                fontWeight: 900,
                                margin: 0,
                                lineHeight: 1.1,
                                letterSpacing: '-2px'
                            }}>
                                Drain Zero
                            </Title>
                            <Title level={2} style={{
                                color: '#FFFFFF',
                                fontSize: 'clamp(1.5rem, 4vw, 2.75rem)',
                                fontWeight: 700,
                                margin: 0,
                            }}>
                                Smart Tax Optimization Made Simple
                            </Title>
                        <Paragraph style={{
                            fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                            maxWidth: 650,
                            margin: '8px auto 0',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.6,
                            fontWeight: 400
                        }}>
                            Analyze your financial activities and reduce tax leakage with our professional optimization engine.
                        </Paragraph>
                        <Space size={20} style={{ marginTop: 24 }}>
                            <Button
                                type="primary"
                                size="large"
                                onClick={() => navigate('/login')}
                                style={{
                                    minWidth: 180,
                                    height: 56,
                                    fontSize: 18,
                                    boxShadow: 'var(--card-shadow)'
                                }}
                            >
                                Login
                            </Button>
                            <Button
                                size="large"
                                onClick={() => navigate('/signup')}
                                style={{
                                    minWidth: 180,
                                    height: 56,
                                    fontSize: 18,
                                }}
                            >
                                Signup
                            </Button>
                        </Space>
                    </Space>
                </section>

                {/* Features Section */}
                <section style={{
                    padding: '100px 24px',
                    backgroundColor: 'var(--bg-card)'
                }}>
                    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                        <Title level={2} style={{
                            textAlign: 'center',
                            color: 'var(--accent-primary)',
                            marginBottom: 80,
                            fontSize: '2.5rem',
                            fontWeight: 700
                        }}>
                            Platform Features
                        </Title>
                        <Row gutter={[32, 32]} justify="center">
                            {features.map((feature, index) => (
                                <Col xs={24} md={12} lg={8} key={index}>
                                    <Card
                                        bordered={false}
                                        style={{
                                            height: '100%',
                                            borderRadius: 10,
                                            backgroundColor: 'var(--bg-page)',
                                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                        }}
                                        className="feature-card"
                                        bodyStyle={{ padding: 40 }}
                                    >
                                        <div style={{
                                            color: 'var(--accent-secondary)',
                                            marginBottom: 24,
                                            display: 'inline-flex'
                                        }}>
                                            {feature.icon}
                                        </div>
                                        <Title level={4} style={{
                                            color: 'var(--accent-primary)',
                                            marginBottom: 16,
                                            fontSize: '1.5rem',
                                            fontWeight: 700
                                        }}>
                                            {feature.title}
                                        </Title>
                                        <Text style={{
                                            color: 'var(--text-secondary)',
                                            fontSize: '1.1rem',
                                            lineHeight: 1.6
                                        }}>
                                            {feature.description}
                                        </Text>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </section>
                <style>
                    {`
                        .feature-card:hover {
                            transform: translateY(-5px);
                            box-shadow: var(--card-shadow);
                        }
                    `}
                </style>
            </div>
    );
};

export default LandingPage;
