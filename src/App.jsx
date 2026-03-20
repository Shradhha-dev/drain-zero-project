import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ConfigProvider, theme as antdTheme } from 'antd';
import LandingPage from './pages/Landing/LandingPage';
import LoginPage from './pages/Auth/LoginPage';
import SignupPage from './pages/Auth/SignupPage';
import Dashboard from './pages/Dashboard';
import CategorySelection from './pages/features/CategorySelection';
import AnalysisForm from './pages/AnalysisForm';
import VehiclePage from './pages/modules/VehiclePage';
import StocksPage from './pages/modules/StocksPage';
import TaxHealth from './pages/features/TaxHealth';
import TaxLeakage from './pages/features/TaxLeakage';
import Recommendations from './pages/features/Recommendations';
import RegimeComparison from './pages/features/RegimeComparison';
import SalaryAnalysis from './pages/features/SalaryAnalysis';

const App = () => {
    return (
        <ConfigProvider
            theme={{
                algorithm: antdTheme.darkAlgorithm,
                token: {
                    colorPrimary: '#3B82F6',
                    colorLink: '#3B82F6',
                    borderRadius: 30,
                    fontFamily: "'Outfit', sans-serif",
                    colorText: '#FFFFFF',
                    colorTextSecondary: 'rgba(255, 255, 255, 0.7)',
                    colorBgLayout: '#0F172A',
                    colorBgContainer: '#1E293B',
                    colorBorder: '#334155',
                },
                components: {
                    Button: {
                        borderRadius: 30,
                        fontWeight: 600,
                        controlHeight: 44,
                    },
                    Card: {
                        borderRadiusLG: 24,
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                        colorBgContainer: '#1E293B',
                    },
                    Input: {
                        borderRadius: 20,
                        controlHeight: 44,
                        colorBgContainer: '#1E293B',
                    },
                    Select: {
                        borderRadius: 20,
                        controlHeight: 44,
                        colorBgContainer: '#1E293B',
                    }
                }
            }}
        >

            <Router>
                <Routes>
                    {/* Main Routes */}
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    
                    {/* Feature Routes */}
                    <Route path="/category-selection" element={<CategorySelection />} />
                    <Route path="/analysis" element={<AnalysisForm />} />
                    <Route path="/vehicle" element={<VehiclePage />} />
                    <Route path="/stocks" element={<StocksPage />} />
                    
                    {/* Deep Analysis Feature Routes */}
                    <Route path="/feature/tax-health" element={<TaxHealth />} />
                    <Route path="/feature/tax-leakage" element={<TaxLeakage />} />
                    <Route path="/feature/recommendations" element={<Recommendations />} />
                    <Route path="/feature/regime-comparison" element={<RegimeComparison />} />
                    <Route path="/feature/salary-analysis" element={<SalaryAnalysis />} />

                    {/* Fallback */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Router>
        </ConfigProvider>
    );
};

export default App;
