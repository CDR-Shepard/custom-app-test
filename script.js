 function connect(crm) {
    if (crm === 'salesforce') {
        window.open('https://fivetran.com/connect-card/setup?redirect_uri=https://dmforce.com/analytics&auth=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkIjp7ImxvZ2luIjp0cnVlLCJ1c2VyIjoiY2hlbWljYWxseV9wcm9mbGlnYWN5IiwiYWNjb3VudCI6InN3YXBwaW5nX3R1Y2tlZCIsImdyb3VwIjoidHJhbnNmZXJyZWRfaW5kZWxpYmxlIiwiY29ubmVjdG9yIjoidG9uX2Rpc3BlbnNlIiwibWV0aG9kIjoiUGJmQ2FyZCJ9LCJpYXQiOjE3MDc5MzIxNzB9.9GidsyEilng5E8YJfiT15KeOI2bi7TFoT5oiGfBPRWs&hide_setup_guide=true', '_blank');
    } else {
        console.log('Connect function for ' + crm + ' is not implemented yet.');
    }
}
