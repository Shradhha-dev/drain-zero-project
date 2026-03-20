import React from 'react';
import { ConfigProvider, Button, Card, Typography, Space, Layout, Form, Input } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate, Link } from 'react-router-dom';

const { Title, Text } = Typography;

const SignupPage = () => {
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
                        maxWidth: 500,
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
                                    color: 'var(--accent-primary)',
                                    cursor: 'pointer',
                                }}
                            />
                            <Title level={2} style={{
                                margin: 0,
                                fontWeight: 700,
                                color: 'var(--accent-primary)'
                            }}>
                                Create Account
                            </Title>
                        </Space>
                        <Text style={{
                            fontSize: 16,
                            color: 'var(--text-secondary)',
                            display: 'block'
                        }}>
                            Start your journey with professional tax optimization
                        </Text>
                    </div>

                    <Form layout="vertical" size="large">


                        <Form.Item name="email" label={<Text strong style={{ color: 'var(--accent-primary)' }}>Email</Text>}>
                            <Input placeholder="Enter your email" />
                        </Form.Item>

                        <Form.Item name="password" label={<Text strong style={{ color: 'var(--accent-primary)' }}>Password</Text>}>
                            <Input.Password placeholder="Create a password" />
                        </Form.Item>



                        <Form.Item style={{ marginTop: 8 }}>
                            <Button type="primary" block size="large" onClick={() => navigate('/category-selection')}>
                                Create Account
                            </Button>
                        </Form.Item>

                        <div style={{ textAlign: 'center', marginTop: 24 }}>
                            <Text style={{ color: 'var(--text-secondary)' }}>
                                Already have an account? <Link to="/login" style={{ color: 'var(--accent-secondary)', fontWeight: 600 }}>Sign In</Link>
                            </Text>
                        </div>
                    </Form>
                </Card>
            </Layout>
    );
};


export default SignupPage;
