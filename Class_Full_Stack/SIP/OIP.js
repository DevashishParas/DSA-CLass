  const policies = [

            {
                name:"Life Insurance",
                premium:500,
                coverage:"₹10 Lakh"
            },

            {
                name:"Health Insurance",
                premium:700,
                coverage:"₹15 Lakh"
            },

            {
                name:"Vehicle Insurance",
                premium:400,
                coverage:"₹5 Lakh"
            },

            {
                name:"Travel Insurance",
                premium:300,
                coverage:"₹3 Lakh"
            }

        ];

        function displayPolicies(data){

            const output = data.map(policy =>

                `
                <div class="card">

                    <h3>${policy.name}</h3>

                    <p>Premium : ₹${policy.premium}/month</p>

                    <p>Coverage : ${policy.coverage}</p>

                    <button class="btn">
                        Apply Now
                    </button>

                </div>
                `

            ).join("");

            document.getElementById("plans").innerHTML = output;
        }

        displayPolicies(policies);

        document
        .getElementById("search")
        .addEventListener("keyup", function(){

            const value =
            this.value.toLowerCase();

            const filteredPolicies =
            policies.filter(policy =>

                policy.name
                .toLowerCase()
                .includes(value)

            );

            displayPolicies(filteredPolicies);

        });

        function calculatePremium(){

            const age =
            document.getElementById("age").value;

            let premium;

            if(age > 40){
                premium = 1000;
            }
            else{
                premium = 500;
            }

            document.getElementById(
                "premiumResult"
            ).innerHTML =
            "Estimated Premium : ₹" + premium;

        }

        