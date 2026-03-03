const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
    if (!fs.existsSync(filePath)) {
        console.log('Not found:', filePath);
        return;
    }
    let content = fs.readFileSync(filePath, 'utf8');

    content = content.replace(/Lustig &\s*Asociados, P\.C\./g, 'Forluncor');
    content = content.replace(/Lustig &\s*Asociados/g, 'Forluncor');
    content = content.replace(/Lustig Legal/g, 'Forluncor');
    content = content.replace(/Eleanor Lustig/g, 'Eleanor Forluncor');
    content = content.replace(/contacto@lustiglegal\.com/g, 'contacto@forluncor.com');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Processed', filePath);
}

const files = [
    'index.html',
    'src/services/api.js',
    'src/components/sections/Team.jsx',
    'src/components/sections/SocialProof.jsx',
    'src/components/sections/Hero.jsx',
    'src/components/ui/ConsultationModal.jsx',
    'src/components/layout/Footer.jsx',
    'src/pages/TermsOfService.jsx',
    'src/pages/PrivacyPolicy.jsx'
];

files.forEach(f => replaceInFile(path.join(__dirname, f)));
