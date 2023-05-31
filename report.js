const newman = require('newman');
 
newman.run({
    
    collection: 'https://api.postman.com/collections/27409342-e2a68bd9-e8ac-48d2-971d-755eff8eff2f?access_key=PMAT-01H1K5ZQX77D3VXHHK1BQ0ZETV',
        
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './GeneratedReports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});