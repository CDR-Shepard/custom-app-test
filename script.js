 function connect(crm) {
    if (crm === 'salesforce') {
        window.open('https://fivetran.com/connect-card/setup?redirect_uri=https://dmforce.com/success&auth=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkIjp7ImxvZ2luIjp0cnVlLCJ1c2VyIjoiY2hlbWljYWxseV9wcm9mbGlnYWN5IiwiYWNjb3VudCI6InN3YXBwaW5nX3R1Y2tlZCIsImdyb3VwIjoidHJhbnNmZXJyZWRfaW5kZWxpYmxlIiwiY29ubmVjdG9yIjoiZGlzY2FyZF9hdXRvbWF0ZWQiLCJtZXRob2QiOiJQYmZDYXJkIn0sImlhdCI6MTcwODYxNzY0MH0.tulFkJZeH1ippFH7dvNH9yF3U0zJVF9ch8vfdyTfhTk&hide_setup_guide=true', '_blank');
    } else {
        console.log('Connect function for ' + crm + ' is not implemented yet.');
    }
}
// v 0.22 02-22
