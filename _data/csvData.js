const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { parse } = require('csv-parse/sync');

module.exports = async function() {
    // 1. Point the engine to your CMS drives folder
    const drivesDir = path.join(__dirname, '../content/drives');
    
    if (!fs.existsSync(drivesDir)) {
        return {};
    }

    const driveFiles = fs.readdirSync(drivesDir);
    
    // 2. This will hold all data, separated by drive slug (e.g., allDrivesData['autumn-2027'])
    let allDrivesData = {};

    for (const file of driveFiles) {
        if (file.endsWith('.md')) {
            const slug = file.replace('.md', '');
            const filePath = path.join(drivesDir, file);
            
            // Read the markdown file and extract the CMS frontmatter
            const fileContent = fs.readFileSync(filePath, 'utf8');
            const parsed = matter(fileContent);

            // Look for the Google Sheets link added in the CMS
            const csvUrl = parsed.data.csv_link;

            if (csvUrl) {
                try {
                    // Fetch the live data directly from Google servers!
                    const response = await fetch(csvUrl);
                    if (response.ok) {
                        const csvText = await response.text();
                        // Parse the raw text into a clean JSON array
                        const records = parse(csvText, {
                            columns: true,
                            skip_empty_lines: true
                        });
                        allDrivesData[slug] = records;
                        console.log(`✅ Successfully fetched live Google Sheet data for: ${slug}`);
                    } else {
                        allDrivesData[slug] = [];
                        console.log(`⚠️ Could not reach Google Sheet for: ${slug}`);
                    }
                } catch (err) {
                    console.error(`❌ Failed to fetch CSV for ${slug}:`, err);
                    allDrivesData[slug] = [];
                }
            } else {
                // If the Captain hasn't pasted a link yet, return an empty array
                allDrivesData[slug] = []; 
            }
        }
    }

    return allDrivesData;
};
