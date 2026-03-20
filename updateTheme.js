const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const colorMap = {
    // Basic Hex to CSS Variables mapping
    "'#F2F3F4'": "'var(--bg-page)'",
    '"#F2F3F4"': "'var(--bg-page)'",
    
    "'#FFFFFF'": "'var(--bg-card)'",
    '"#FFFFFF"': "'var(--bg-card)'",
    "'#fff'": "'var(--bg-card)'",
    '"#fff"': "'var(--bg-card)'",
    
    "'#08457E'": "'var(--accent-primary)'",
    '"#08457E"': "'var(--accent-primary)'",
    "'#084C8D'": "'var(--accent-primary)'",
    '"#084C8D"': "'var(--accent-primary)'",
    "'#3B82F6'": "'var(--accent-primary)'",
    '"#3B82F6"': "'var(--accent-primary)'",
    
    "'#5B92E5'": "'var(--accent-secondary)'",
    '"#5B92E5"': "'var(--accent-secondary)'",
    "'#8B5CF6'": "'var(--accent-secondary)'",
    '"#8B5CF6"': "'var(--accent-secondary)'",
    
    "'#4B5563'": "'var(--text-secondary)'",
    '"#4B5563"': "'var(--text-secondary)'",
    "'#6B7280'": "'var(--text-secondary)'",
    '"#6B7280"': "'var(--text-secondary)'",
    "'#9CA3AF'": "'var(--text-secondary)'",
    '"#9CA3AF"': "'var(--text-secondary)'",
    "'#CCF1FF'": "'var(--text-secondary)'",
    '"#CCF1FF"': "'var(--text-secondary)'",
    
    "'#1F2937'": "'var(--text-primary)'",
    '"#1F2937"': "'var(--text-primary)'",
    
    "'#10B981'": "'var(--success)'",
    '"#10B981"': "'var(--success)'",
    "'#059669'": "'var(--success)'",
    '"#059669"': "'var(--success)'",
    
    "'#F59E0B'": "'var(--warning)'",
    '"#F59E0B"': "'var(--warning)'",
    
    "'#EF4444'": "'var(--error)'",
    '"#EF4444"': "'var(--error)'",
    "'#FCA5A5'": "'var(--error)'",
    '"#FCA5A5"': "'var(--error)'",

    "'#B8C8E6'": "'var(--border)'",
    '"#B8C8E6"': "'var(--border)'",
    "'#E5E7EB'": "'var(--border)'",
    '"#E5E7EB"': "'var(--border)'",
    
    "'#DCE6F5'": "'var(--bg-page)'",
    '"#DCE6F5"': "'var(--bg-page)'",
    
    "'#F3F4F6'": "'var(--input-bg)'",
    '"#F3F4F6"': "'var(--input-bg)'",
    
    "'#F8FAFF'": "'var(--bg-card)'",
    '"#F8FAFF"': "'var(--bg-card)'",
    "'#F9FAFB'": "'var(--bg-card)'",
    '"#F9FAFB"': "'var(--bg-card)'",
    "'#F0FDF4'": "'var(--bg-card)'",
    '"#F0FDF4"': "'var(--bg-card)'",
};

const walkSync = (dir, filelist = []) => {
    fs.readdirSync(dir).forEach(file => {
        const filepath = path.join(dir, file);
        if (fs.statSync(filepath).isDirectory()) {
            // Ignore node_modules
            if (file !== 'node_modules') {
                filelist = walkSync(filepath, filelist);
            }
        } else {
            if (filepath.endsWith('.jsx') || filepath.endsWith('.js')) {
                filelist.push(filepath);
            }
        }
    });
    return filelist;
};

const updateFiles = () => {
    const files = walkSync(srcDir);
    
    files.forEach(filepath => {
        let content = fs.readFileSync(filepath, 'utf-8');
        let newContent = content;

        // Replace Token Colors in ConfigProvider
        newContent = newContent.replace(/colorPrimary:\s*['"]#[a-fA-F0-9]{3,6}['"]/g, "colorPrimary: '#1B3A6B'");
        newContent = newContent.replace(/colorBgContainer:\s*['"]#[a-fA-F0-9]{3,6}['"]/g, "colorBgContainer: 'var(--bg-card)'");
        newContent = newContent.replace(/borderRadius:\s*\d+/g, "borderRadius: 10");
        
        // Exact mappings (case-insensitive)
        for (const [oldColor, newColor] of Object.entries(colorMap)) {
            const regex = new RegExp(oldColor.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
            newContent = newContent.replace(regex, newColor);
        }

        // Box shadow replacements
        newContent = newContent.replace(/boxShadow:\s*['"][^'"]*['"]/g, "boxShadow: 'var(--card-shadow)'");
        newContent = newContent.replace(/box-shadow:\s*0\s+15px\s+35px\s+['"]var\(--card-shadow\)['"]/g, "box-shadow: var(--card-shadow)");

        // Gradients
        newContent = newContent.replace(/background:\s*['"]linear-gradient[^'"]*['"]/g, "background: 'var(--bg-card)'");
        
        // Fix syntax errors around var(--card-shadow) with nested quotes
        newContent = newContent.replace(/'var\(--card-shadow\)'/g, "var(--card-shadow)");

        if (content !== newContent) {
            fs.writeFileSync(filepath, newContent, 'utf-8');
            console.log(`Updated: ${filepath}`);
        }
    });

    console.log("Cleanup script completed successfully.");
};

updateFiles();
