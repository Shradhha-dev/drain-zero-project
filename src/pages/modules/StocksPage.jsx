import React from 'react';
import AnalysisForm from '../AnalysisForm';

const StocksPage = () => {
    return (
        <div>
            <div style={{ padding: '20px', textAlign: 'center', background: 'var(--bg-card)', borderBottom: '1px solid #eee' }}>
                <h1 style={{ color: 'var(--accent-primary)', margin: 0 }}>Stocks & Investments Module</h1>
                <p style={{ color: '#666' }}>Content Loading...</p>
            </div>
            <AnalysisForm category="Stocks" subcategory="Equity Shares" />
        </div>
    );
};

export default StocksPage;
