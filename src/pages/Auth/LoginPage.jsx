import { Button, Card, Typography, Space, Layout, Form, Input, Divider } from 'antd';
import { GoogleOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate, Link } from 'react-router-dom';

const { Title, Text } = Typography;

const LoginPage = () => {
    const navigate = useNavigate();

    return (
        <Layout style={{
            minHeight: '100vh',
            background: 'var(--bg-page)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
        }}>
                <Card
                    style={{
                        maxWidth: 480,
                        width: '100%',
                        border: 'none',
                    }}
                >
                    <div style={{ marginBottom: 32 }}>
                        <Space align="center" size={16} style={{ marginBottom: 8 }}>
                            <ArrowLeftOutlined
                                onClick={() => navigate('/')}
                                style={{
                                     fontSize: 22,
                                     color: 'var(--text-primary)', // Consistent Black dominance
                                     cursor: 'pointer',
                                }}
                            />
                            <Title level={2} style={{
                                margin: 0,
                                fontWeight: 800,
                                color: 'var(--text-primary)' // Pure Black
                            }}>
                                Login
                            </Title>
                        </Space>
                        <Text style={{
                            fontSize: 16,
                            color: 'var(--text-secondary)', // Deep Steel Gray
                            display: 'block'
                        }}>
                            Access your personal fiscal optimization dashboard
                        </Text>
                    </div>

                    <div style={{ marginTop: 24 }}>
                        <Button
                            type="primary"
                            block
                            size="large"
                            icon={<GoogleOutlined />}
                            style={{
                                height: 52,
                                fontSize: 16
                            }}
                            onClick={() => {
                                // Simulate Google Auth
                                window.confirm('Sign in with Google?');
                                navigate('/category-selection');
                            }}
                        >
                            Continue with Google
                        </Button>

                        <div style={{ textAlign: 'center', marginTop: 32 }}>
                            <Text style={{ color: 'var(--text-secondary)' }}>
                                New here? <Link to="/signup" style={{ color: 'var(--accent-secondary)', fontWeight: 600 }}>Create account</Link>
                            </Text>
                        </div>
                    </div>
                </Card>
            </Layout>
    );
};

export default LoginPage;
