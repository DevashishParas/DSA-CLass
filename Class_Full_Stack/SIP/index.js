
const policies = [
    {
        name: "Life Insurance",
        premium: 500,
        coverage: "₹10 Lakh",
        company: "LIC"
    },
    {
        name: "Health Insurance",
        premium: 700,
        coverage: "₹15 Lakh",
        company: "HDFC Ergo"
    },
    {
        name: "Vehicle Insurance",
        premium: 400,
        coverage: "₹5 Lakh",
        company: "ICICI Lombard"
    },
    {
        name: "Travel Insurance",
        premium: 300,
        coverage: "₹3 Lakh",
        company: "Bajaj Allianz"
    }
];


const plans = document.getElementById("plans");
const search = document.getElementById("search");
const sortBtn = document.getElementById("sortBtn");
const filter = document.getElementById("filterPremium");
const loading = document.getElementById("loading");
const policyCount = document.getElementById("policyCount");




function displayPolicies(data){

    plans.innerHTML = data.map(policy => `

        <div class="card">

            <h3>${policy.name}</h3>

            <p><strong>Company :</strong> ${policy.company}</p>

            <p><strong>Premium :</strong> ₹${policy.premium}/month</p>

            <p><strong>Coverage :</strong> ${policy.coverage}</p>

            <button class="btn applyBtn">

                Apply Now

            </button>

        </div>

    `).join("");

    policyCount.textContent =
    `Showing ${data.length} Policies`;

}



function loadPolicies(){

    loading.style.display = "block";

    return new Promise(resolve=>{

        setTimeout(()=>{

            loading.style.display="none";

            resolve(policies);

        },1500);

    });

}

loadPolicies().then(displayPolicies);




search.addEventListener("keyup",()=>{

    const value =

    search.value

    .trim()

    .toLowerCase();

    const filtered =

    policies.filter(policy=>

        policy.name

        .toLowerCase()

        .includes(value)

    );

    displayPolicies(filtered);

});





sortBtn.addEventListener("click",()=>{

    const sorted =

    [...policies]

    .sort((a,b)=>a.premium-b.premium);

    displayPolicies(sorted);

});



// this will sort the premium 

filter.addEventListener("change",()=>{

    let filtered = policies;

    switch(filter.value){

        case "below500":

            filtered =

            policies.filter(

                p=>p.premium<500

            );

            break;


        case "500to700":

            filtered =

            policies.filter(

                p=>p.premium>=500 &&

                p.premium<=700

            );

            break;


        case "above700":

            filtered =

            policies.filter(

                p=>p.premium>700

            );

            break;

    }

    displayPolicies(filtered);

});





document.addEventListener("click",event=>{

    if(!event.target.classList.contains("applyBtn"))

    return;

    if(confirm("Apply for this policy?")){

        event.target.textContent="Applied";

        event.target.disabled=true;

        event.target.classList.add("applied");

        alert("Application Submitted Successfully");

    }

});




console.log(

policies.reduce(

(sum,p)=>sum+p.premium,

0

)

);

console.log(

policies.find(

p=>p.name==="Health Insurance"

)

);

policies.forEach(

p=>console.log(p.name)

);




const age = document.getElementById("age");
const premiumResult = document.getElementById("premiumResult");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const formMessage = document.getElementById("formMessage");

// const darkBtn = document.getElementById("darkModeBtn");





document
.getElementById("calculateBtn")
.addEventListener("click", calculatePremium);


function calculatePremium(){

    const userAge = Number(age.value);

    if(isNaN(userAge) || userAge <= 0){

        premiumResult.style.color = "red";
        premiumResult.textContent = "Please Enter a Valid Age";
        return;

    }

    let premium;

    if(userAge < 18){

        premiumResult.style.color = "red";
        premiumResult.textContent = "Not Eligible";
        return;

    }

    else if(userAge <= 30){

        premium = 400;

    }

    else if(userAge <= 40){

        premium = 700;

    }

    else if(userAge <= 60){

        premium = 1000;

    }

    else{

        premium = 1500;

    }

    premiumResult.style.color = "green";

    premiumResult.textContent =
    `Estimated Premium : ₹${premium}/month`;

}





document
.getElementById("submitBtn")
.addEventListener("click", submitForm);


function submitForm(){

    const name = nameInput.value.trim();

    const email = emailInput.value.trim();

    const message = messageInput.value.trim();



    if(!name || !email || !message){

        formMessage.style.color = "red";

        formMessage.textContent =
        "Please fill all fields.";

        return;

    }



    if(!email.includes("@")){

        formMessage.style.color = "red";

        formMessage.textContent =
        "Invalid Email Address";

        return;

    }



    formMessage.style.color = "green";

    formMessage.textContent =
    "Message Submitted Successfully!";



    nameInput.value = "";

    emailInput.value = "";

    messageInput.value = "";

}





// darkBtn.addEventListener("click",()=>{

//     document.body.classList.toggle("dark");

//     darkBtn.textContent =

//     document.body.classList.contains("dark")

//     ? "☀️ Light Mode"

//     : "🌙 Dark Mode";

// });





const links = {

    homeLink:".hero",

    policyLink:".container",

    calculatorLink:".calculator",

    contactLink:".contact"

};


for(const id in links){

    document

    .getElementById(id)

    .addEventListener("click",()=>{

        document

        .querySelector(links[id])

        .scrollIntoView({

            behavior:"smooth"

        });

    });

}





document.getElementById("footer").innerHTML =

`© ${new Date().getFullYear()} Online Insurance Portal`;





console.log(

"Language :",

navigator.language

);

console.log(

"Platform :",

navigator.platform

);





const title = "Online Insurance Portal";

console.log(title.toUpperCase());

console.log(title.slice(0,6));

console.log(title.replace("Portal","System"));





console.log(

policies.some(

p=>p.premium>600

)

);


console.log(

policies.every(

p=>p.premium>0

)

);





window.addEventListener("load",()=>{

    console.log("Insurance Portal Loaded Successfully");

});