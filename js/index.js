
let dataBlog = []
var today = new Date();

let template = {"_id":"5af457c7ac759c08e5512a11","sgv":204,"date":today.getTime(),"dateString":today,"trend":2,"direction":"SingleUp","device":"share2","type":"sgv"}

for (i = 0; i < 24; i++) { 
  dataBlog.push(template)
}

console.log(dataBlog)
document.getElementById("data").innerHTML = JSON.stringify(dataBlog)