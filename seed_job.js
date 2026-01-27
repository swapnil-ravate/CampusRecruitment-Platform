const http = require('http');

const jobData = JSON.stringify({
    jobTitle: "Junior React Developer",
    company: "TechStar Inc.",
    experience: "0-1 Years",
    jobDesc: "We are looking for a passionate Junior React Developer to join our team. You will work on building modern web applications using React and Node.js.",
    salary: "4,00,000 - 6,00,000",
    location: "Remote / Pune",
    skills: "React.js, JavaScript, Tailwind CSS"
});

const options = {
    hostname: 'localhost',
    port: 5000,
    path: '/api/v1/admin/jobPost',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': jobData.length
    }
};

console.log("Attempting to post to:", options.path);

const req = http.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log('Status Code:', res.statusCode);
        console.log('Response:', data);
    });
});

req.on('error', (error) => {
    console.error('Error:', error);
});

req.write(jobData);
req.end();
