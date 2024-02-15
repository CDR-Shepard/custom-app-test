 function connect(crm) {
    if (crm === 'salesforce') {
        window.open('https://fivetran.com/connect-card/setup?redirect_uri=https://dmforce.com/success&auth=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkIjp7ImxvZ2luIjp0cnVlLCJ1c2VyIjoiY2hlbWljYWxseV9wcm9mbGlnYWN5IiwiYWNjb3VudCI6InN3YXBwaW5nX3R1Y2tlZCIsImdyb3VwIjoiYW54aW91c19jYW1wYWlnbiIsImNvbm5lY3RvciI6ImNoYWlybWFuX2NvbnZlcnNpbmciLCJtZXRob2QiOiJQYmZDYXJkIn0sImlhdCI6MTcwODAxODczMn0.tv2GpehSFcRwSq9fhG5eyqAnMYurMVoheVzQvanSA9w&hide_setup_guide=true', '_blank');
    } else {
        console.log('Connect function for ' + crm + ' is not implemented yet.');
    }
}
// v 0.13
