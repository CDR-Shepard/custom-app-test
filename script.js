function connect(crm) {
    if (crm === 'salesforce') {
        window.open('https://fivetran.com/connect-card/setup?redirect_uri=https://dmforce.com/analytics&auth=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkIjp7ImxvZ2luIjp0cnVlLCJ1c2VyIjoiY2hlbWljYWxseV9wcm9mbGlnYWN5IiwiYWNjb3VudCI6InN3YXBwaW5nX3R1Y2tlZCIsImdyb3VwIjoidHJhbnNmZXJyZWRfaW5kZWxpYmxlIiwiY29ubmVjdG9yIjoicGFub3JhbWljX3Zpc2libGUiLCJtZXRob2QiOiJQYmZDYXJkIn0sImlhdCI6MTcwNjYzNjg2NX0.VjX98WoPDBxO-c4CnkRaTXJQ1LuJdaP5qUvtRBIZPfU&hide_setup_guide=true', '_blank');
    } else {
        console.log('Connect function for ' + crm + ' is not implemented yet.');
    }
}
