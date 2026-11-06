const fs = require('fs');
const path = require('path');
const Papa = require('papaparse');

module.exports = function() {
    // Pointing directly to the CSV in the same _data folder
    const filePath = path.join(__dirname, 'applicants.csv');
    
    if (!fs.existsSync(filePath)) {
        console.log("CSV not found at " + filePath + ", returning empty array.");
        return [];
    }
    
    const csvFile = fs.readFileSync(filePath, 'utf8');
    const parsed = Papa.parse(csvFile, {
        header: true,
        skipEmptyLines: true
    });
    
    return parsed.data;
};
