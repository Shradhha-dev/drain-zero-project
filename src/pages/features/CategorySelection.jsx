import React, { useState } from 'react';
import {
    Layout,
    Card,
    Typography,
    Row,
    Col,
    Button,
    ConfigProvider,
    Space
} from 'antd';
import {
    CarOutlined,
    StockOutlined,
    MedicineBoxOutlined,
    HomeOutlined,
    ArrowRightOutlined,
    ArrowLeftOutlined,
    CheckCircleFilled
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;

const CATEGORIES = [
    {
        id: 'Vehicle',
        title: 'Vehicle',
        icon: <CarOutlined style={{ fontSize: '32px' }} />,
        description: 'Optimize tax for cars, bikes, and other vehicles.'
    },
    {
        id: 'Stocks',
        title: 'Stocks / Investments',
        icon: <StockOutlined style={{ fontSize: '32px' }} />,
        description: 'Analysis for equity, mutual funds, and crypto.'
    },
    {
        id: 'Health Insurance',
        title: 'Health Insurance',
        icon: <MedicineBoxOutlined style={{ fontSize: '32px' }} />,
        description: 'Deductions for self, family, and parents.'
    },
    {
        id: 'Land',
        title: 'Land / Property',
        icon: <HomeOutlined style={{ fontSize: '32px' }} />,
        description: 'Tax benefits for residential and commercial property.'
    }
];

const SUBCATEGORIES = {
    'Vehicle': ['Car', 'Bike', 'Scooter'],
    'Stocks': ['Equity Shares', 'Mutual Funds', 'F&O Trading', 'Bonds / Debentures', 'Crypto'],
    'Health Insurance': ['Self', 'Family', 'Parents', 'Senior Parents'],
    'Land': ['Residential', 'Commercial', 'Agricultural Land', 'Plot / Vacant Land']
};

const OWNERSHIP_TYPES = ['First-hand', 'Second-hand'];

const CategorySelection = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubcategory, setSelectedSubcategory] = useState(null);
    const [selectedOwnership, setSelectedOwnership] = useState(null);

    const handleCategorySelect = (categoryId) => {
        setSelectedCategory(categoryId);
        setSelectedSubcategory(null);
        setSelectedOwnership(null);
    };

    const handleSubcategorySelect = (subcategory) => {
        setSelectedSubcategory(subcategory);
        if (selectedCategory !== 'Vehicle') {
            proceedToAnalysis(subcategory, null);
        }
    };

    const handleOwnershipSelect = (ownership) => {
        setSelectedOwnership(ownership);
        proceedToAnalysis(selectedSubcategory, ownership);
    };

    const proceedToAnalysis = (subcategory, ownership) => {
        navigate('/analysis', {
            state: {
                category: selectedCategory,
                subcategory: subcategory,
                ownership: ownership
            }
        });
    };

    const cardStyle = (isSelected) => ({
        borderRadius: '24px',
        border: isSelected ? '2px solid #5B92E5' : '2px solid transparent',
        boxShadow: isSelected
            ? '0 12px 40px rgba(91, 146, 229, 0.15)'
            : 'var(--card-shadow)',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        background: 'var(--bg-card)',
        height: '100%',
        padding: '32px',
        position: 'relative',
        textAlign: 'center'
    });

    const subcategoryButtonStyle = (isSelected) => ({
        borderRadius: '16px',
        height: 'auto',
        padding: '18px 24px',
        fontSize: '16px',
        fontWeight: 600,
        textAlign: 'center',
        background: isSelected ? 'var(--accent-secondary)' : 'var(--bg-card)',
        border: isSelected ? '1.5px solid #5B92E5' : '1.5px solid #E5E7EB',
        color: isSelected ? 'var(--bg-card)' : 'var(--accent-primary)',
        transition: 'all 0.2s ease',
        boxShadow: isSelected ? '0 8px 16px rgba(91, 146, 229, 0.2)' : 'none'
    });

    return (
        <Layout style={{ minHeight: '100vh', background: 'var(--bg-page)', padding: '60px 24px' }}>
            <Content style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
                <div style={{ marginBottom: '64px', textAlign: 'center' }}>
                    <Title level={1} style={{ color: '#FFFFFF', marginBottom: '12px', fontWeight: 800, fontSize: '3rem' }}>
                        Select Category
                    </Title>
                    <Paragraph style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: 600, margin: '0 auto' }}>
                        What activity would you like to analyze for tax optimization today?
                    </Paragraph>
                </div>

                <div style={{ marginBottom: '60px' }}>
                    <Title level={4} style={{ color: 'var(--accent-secondary)', marginBottom: '24px', opacity: 0.8, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                        01 — Main Category
                    </Title>
                    <Row gutter={[24, 24]}>
                        {CATEGORIES.map((cat) => (
                            <Col xs={24} sm={12} md={6} key={cat.id}>
                                <div
                                    style={cardStyle(selectedCategory === cat.id)}
                                    onClick={() => handleCategorySelect(cat.id)}
                                    className="selection-card"
                                >
                                    <div style={{
                                        width: '64px',
                                        height: '64px',
                                        background: selectedCategory === cat.id ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)',
                                        borderRadius: '18px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: selectedCategory === cat.id ? 'var(--accent-secondary)' : '#FFFFFF',
                                        marginBottom: '24px',
                                        margin: '0 auto 24px'
                                    }}>
                                        {cat.icon}
                                    </div>
                                    <Title level={4} style={{ margin: '0 0 12px 0', color: '#FFFFFF', fontWeight: 700 }}>
                                        {cat.title}
                                    </Title>
                                    <Text style={{ fontSize: '14px', lineHeight: '1.5', color: 'var(--text-secondary)' }}>
                                        {cat.description}
                                    </Text>
                                    {selectedCategory === cat.id && (
                                        <div style={{
                                            position: 'absolute',
                                            top: '16px',
                                            right: '16px',
                                            color: 'var(--accent-secondary)'
                                        }}>
                                            <CheckCircleFilled style={{ fontSize: '24px' }} />
                                        </div>
                                    )}
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>

                {selectedCategory && (
                    <div style={{ marginBottom: '60px', animation: 'slideUp 0.4s ease-out' }}>
                        <Title level={4} style={{ color: 'var(--accent-secondary)', marginBottom: '24px', opacity: 0.8, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                            02 — Select Subcategory
                        </Title>
                        <Row gutter={[16, 16]}>
                            {SUBCATEGORIES[selectedCategory].map((sub, index) => (
                                <Col xs={24} sm={12} md={6} lg={4} key={index}>
                                    <Button
                                        block
                                        style={subcategoryButtonStyle(selectedSubcategory === sub)}
                                        onClick={() => handleSubcategorySelect(sub)}
                                        className="sub-btn"
                                    >
                                        {sub}
                                    </Button>
                                </Col>
                            ))}
                        </Row>
                    </div>
                )}

                {selectedCategory === 'Vehicle' && selectedSubcategory && (
                    <div style={{ marginBottom: '60px', animation: 'slideUp 0.4s ease-out' }}>
                        <Title level={4} style={{ color: 'var(--accent-secondary)', marginBottom: '24px', opacity: 0.8, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                            03 — Ownership Type
                        </Title>
                        <Row gutter={[16, 16]}>
                            {OWNERSHIP_TYPES.map((type, index) => (
                                <Col xs={12} sm={8} md={6} key={index}>
                                    <Button
                                        block
                                        style={subcategoryButtonStyle(selectedOwnership === type)}
                                        onClick={() => handleOwnershipSelect(type)}
                                        className="sub-btn"
                                    >
                                        {type}
                                    </Button>
                                </Col>
                            ))}
                        </Row>
                    </div>
                )}

                <div style={{ marginTop: '80px', textAlign: 'center' }}>
                    <Button
                        type="text"
                        icon={<ArrowLeftOutlined />}
                        onClick={() => navigate('/')}
                        style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '16px', opacity: 0.7 }}
                    >
                        Back to Landing Page
                    </Button>
                </div>

                <style>
                    {`
                        @keyframes slideUp {
                            from { opacity: 0; transform: translateY(20px); }
                            to { opacity: 1; transform: translateY(0); }
                        }
                        .selection-card:hover {
                            transform: translateY(-8px);
                            border-color: var(--accent-secondary) !important;
                        }
                        .sub-btn:hover {
                            background: rgba(255,255,255,0.1) !important;
                            border-color: var(--accent-secondary) !important;
                            color: #FFFFFF !important;
                        }
                    `}
                </style>
            </Content>
        </Layout>
    );
};


export default CategorySelection;
