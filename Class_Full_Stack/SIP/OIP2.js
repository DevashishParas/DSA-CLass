// ========================================
// ONLINE INSURANCE PORTAL
// PART - 1
// ========================================


// -------------------------
// Insurance Policies (Objects)
// -------------------------

const policies = [

    {
        id:1,
        name:"Life Insurance",
        premium:500,
        coverage:"₹10 Lakh",
        company:"LIC",
        duration:"20 Years"
    },

    {
        id:2,
        name:"Health Insurance",
        premium:700,
        coverage:"₹15 Lakh",
        company:"HDFC Ergo",
        duration:"10 Years"
    },

    {
        id:3,
        name:"Vehicle Insurance",
        premium:400,
        coverage:"₹5 Lakh",
        company:"ICICI Lombard",
        duration:"5 Years"
    },

    {
        id:4,
        name:"Travel Insurance",
        premium:300,
        coverage:"₹3 Lakh",
        company:"Bajaj Allianz",
        duration:"1 Year"
    }

];


// -------------------------
// Display Policies
// -------------------------

function displayPolicies(data){

    const output = data.map(policy =>

        `
        <div class="card">

            <h3>${policy.name}</h3>

            <p><strong>Company :</strong> ${policy.company}</p>

            <p><strong>Premium :</strong> ₹${policy.premium}/month</p>

            <p><strong>Coverage :</strong> ${policy.coverage}</p>

            <p><strong>Duration :</strong> ${policy.duration}</p>

            <button
                class="btn applyBtn">

                Apply Now

            </button>

        </div>

        `

    ).join("");

    document.getElementById("plans").innerHTML = output;

    updatePolicyCount(data);

}



// -------------------------
// Update Result Counter
// -------------------------

function updatePolicyCount(data){

    document.getElementById("policyCount").textContent =

    `Showing ${data.length} Policies`;

}



// -------------------------
// Promise (Simulating Server)
// -------------------------

function fetchPolicies(){

    return new Promise((resolve)=>{

        document.getElementById("loading").style.display="block";

        setTimeout(()=>{

            document.getElementById("loading").style.display="none";

            resolve(policies);

        },2000);

    });

}



// -------------------------
// Load Policies
// -------------------------

fetchPolicies()

.then(data=>{

    displayPolicies(data);

})

.catch(()=>{

    alert("Unable to Load Policies");

});




// -------------------------
// Search Policies
// -------------------------

document

.getElementById("search")

.addEventListener("keyup",function(){


    const value =

    this.value

    .trim()

    .toLowerCase();



    const filteredPolicies =

    policies.filter(policy=>


        policy.name

        .toLowerCase()

        .includes(value)


    );


    displayPolicies(filteredPolicies);


});




// -------------------------
// Sort Policies
// -------------------------

document

.getElementById("sortBtn")

.addEventListener("click",()=>{


    const sortedPolicies =

    [...policies]

    .sort((a,b)=>a.premium-b.premium);


    displayPolicies(sortedPolicies);


});




// -------------------------
// Premium Filter
// -------------------------

document

.getElementById("filterPremium")

.addEventListener("change",function(){


    let filtered = [];


    if(this.value==="all"){

        filtered = policies;

    }

    else if(this.value==="500"){

        filtered = policies.filter(policy=>policy.premium<500);

    }

    else if(this.value==="700"){

        filtered = policies.filter(

            policy=>policy.premium>=500 && policy.premium<=700

        );

    }

    else{

        filtered = policies.filter(policy=>policy.premium>700);

    }


    displayPolicies(filtered);


});




// -------------------------
// Total Premium (Reduce)
// -------------------------

const totalPremium =

policies.reduce(

(sum,policy)=>sum+policy.premium,

0

);

console.log("Total Premium =",totalPremium);




// -------------------------
// Find Policy Example
// -------------------------

const healthPolicy =

policies.find(

policy=>policy.name==="Health Insurance"

);

console.log(healthPolicy);




// -------------------------
// forEach Example
// -------------------------

policies.forEach(policy=>{

    console.log(policy.name);

});

// ========================================
// PART - 2
// Premium Calculator
// Apply Button
// Contact Form Validation
// ========================================



// -------------------------
// Premium Calculator
// -------------------------

document

.getElementById("calculateBtn")

.addEventListener("click",calculatePremium);



function calculatePremium(){

    const age = Number(

        document

        .getElementById("age")

        .value

    );



    const result =

    document.getElementById(

        "premiumResult"

    );



     if (isNaN(age) || age <= 0) {
    result.style.color = "red";
    result.textContent = "Please Enter a Valid Age";
    return;
    }



    if(age<18){

        result.style.color="red";

        result.textContent="Not Eligible";

    }

    else if(age<=30){

        result.style.color="green";

        result.textContent=

        `Estimated Premium : ₹400/month`;

    }

    else if(age<=40){

        result.style.color="green";

        result.textContent=

        `Estimated Premium : ₹700/month`;

    }

    else if(age<=60){

        result.style.color="green";

        result.textContent=

        `Estimated Premium : ₹1000/month`;

    }

    else{

        result.style.color="green";

        result.textContent=

        `Estimated Premium : ₹1500/month`;

    }

}



// -------------------------
// Apply Button
// -------------------------

document

.addEventListener("click",function(event){



    if(event.target.classList.contains("applyBtn")){



        const answer =

        confirm(

            "Do you want to apply for this policy?"

        );



        if(answer){



            event.target.textContent="Applied";



            event.target.disabled=true;



            event.target.classList.add(

                "applied"

            );



            alert(

                "Application Submitted Successfully."

            );



        }



    }



});




// -------------------------
// Contact Form
// -------------------------

document

.getElementById("submitBtn")

.addEventListener(

"click",

validateForm

);





function validateForm(){



    const name =

    document

    .getElementById("name")

    .value

    .trim();



    const email =

    document

    .getElementById("email")

    .value

    .trim();



    const message =

    document

    .getElementById("message")

    .value

    .trim();



    const output =

    document.getElementById(

        "formMessage"

    );



    if(name===""){

        output.style.color="red";

        output.textContent=

        "Please Enter Your Name";

        return;

    }



    if(email===""){

        output.style.color="red";

        output.textContent=

        "Please Enter Email";

        return;

    }



    if(

        !email.includes("@") ||

        !email.includes(".")

    ){

        output.style.color="red";

        output.textContent=

        "Invalid Email Address";

        return;

    }



    if(message===""){

        output.style.color="red";

        output.textContent=

        "Please Enter Message";

        return;

    }



    output.style.color="green";



    output.textContent=

    "Message Submitted Successfully!";



    document

    .getElementById("name")

    .value="";



    document

    .getElementById("email")

    .value="";



    document

    .getElementById("message")

    .value="";



}




// -------------------------
// String Methods Examples
// -------------------------

const portalName="online insurance portal";



console.log(

portalName.toUpperCase()

);



console.log(

portalName.toLowerCase()

);



console.log(

portalName.slice(0,6)

);



console.log(

portalName.replace(

"insurance",

"Health Insurance"

)

);




// -------------------------
// Some() Example
// -------------------------

const expensivePolicy=

policies.some(

policy=>policy.premium>600

);

console.log(

"Any Premium Above 600?",

expensivePolicy

);




// -------------------------
// Every() Example
// -------------------------

const availablePremium=

policies.every(

policy=>policy.premium>0

);

console.log(

"All Premium Positive?",

availablePremium

);




// -------------------------
// Find Index Example
// -------------------------

const index=

policies.findIndex(

policy=>policy.name==="Travel Insurance"

);

console.log(

"Travel Policy Index:",

index

);



// =======================================
// PART - 3
// Dark Mode
// Smooth Navigation
// Better DOM Manipulation
// =======================================



// -------------------------
// Dark Mode
// -------------------------

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        darkModeBtn.textContent = "☀️ Light Mode";

    }

    else{

        darkModeBtn.textContent = "🌙 Dark Mode";

    }

});




// -------------------------
// Smooth Navigation
// -------------------------

const menuItems = document.querySelectorAll("nav li");

menuItems[0].addEventListener("click", function(){

    document.querySelector(".hero").scrollIntoView({

        behavior:"smooth"

    });

});


menuItems[1].addEventListener("click", function(){

    document.querySelector(".container").scrollIntoView({

        behavior:"smooth"

    });

});


menuItems[2].addEventListener("click", function(){

    document.querySelector(".calculator").scrollIntoView({

        behavior:"smooth"

    });

});


menuItems[3].addEventListener("click", function(){

    document.querySelector(".contact").scrollIntoView({

        behavior:"smooth"

    });

});




// -------------------------
// Window Loaded
// -------------------------

window.addEventListener("load", function(){

    console.log("Insurance Portal Loaded Successfully.");

});




// -------------------------
// Browser Information (BOM)
// -------------------------

console.log("Browser :", navigator.appName);

console.log("Platform :", navigator.platform);

console.log("Language :", navigator.language);




// -------------------------
// Current Date & Time
// -------------------------

const today = new Date();

console.log(today);




// -------------------------
// Dynamic Footer
// -------------------------

document.querySelector("footer").innerHTML =

`© ${today.getFullYear()} Online Insurance Portal`;




// -------------------------
// Welcome Message
// -------------------------

setTimeout(function(){

    alert("Welcome to the Online Insurance Portal!");

},1000);




// -------------------------
// Total Number of Policies
// -------------------------

console.log(

`Total Policies : ${policies.length}`

);




// -------------------------
// Highest Premium Policy
// -------------------------

const highestPremium =

policies.reduce(

(max,policy)=>{

    return policy.premium>max.premium

    ? policy

    : max;

}

);

console.log(

"Highest Premium Policy :",

highestPremium

);




// -------------------------
// Lowest Premium Policy
// -------------------------

const lowestPremium =

policies.reduce(

(min,policy)=>{

    return policy.premium<min.premium

    ? policy

    : min;

}

);

console.log(

"Lowest Premium Policy :",

lowestPremium

);




// -------------------------
// Card Hover Effect
// -------------------------

document.addEventListener("mouseover",function(event){

    if(event.target.closest(".card")){

        event.target.closest(".card")

        .style.transform="scale(1.03)";

    }

});


document.addEventListener("mouseout",function(event){

    if(event.target.closest(".card")){

        event.target.closest(".card")

        .style.transform="scale(1)";

    }

});




// -------------------------
// Keyboard Shortcut
// Press "/" to focus Search
// -------------------------

document.addEventListener("keydown",function(event){

    if(event.key==="/"){

        event.preventDefault();

        document.getElementById("search").focus();

    }

});




// -------------------------
// Greeting Based on Time
// -------------------------

const hour = new Date().getHours();

let greeting = "";

if(hour<12){

    greeting="Good Morning ☀️";

}

else if(hour<18){

    greeting="Good Afternoon 🌤️";

}

else{

    greeting="Good Evening 🌙";

}

console.log(greeting);




// -------------------------
// Random Insurance Tip
// -------------------------

const tips=[

"Always compare policies before buying.",

"Read policy terms carefully.",

"Keep your nominee updated.",

"Pay premiums before the due date.",

"Choose coverage according to your needs."

];

const randomTip=

tips[Math.floor(Math.random()*tips.length)];

console.log(

"Insurance Tip :",

randomTip

);




// -------------------------
// Click Counter
// -------------------------

let clickCount=0;

document.body.addEventListener("click",function(){

    clickCount++;

    console.log(

        `Total Clicks : ${clickCount}`

    );

});




// -------------------------
// Thank You Message
// -------------------------

console.log(

"Project Developed Using HTML, CSS & JavaScript"

);