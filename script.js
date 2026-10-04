function generatePlan() {

    const age = document.getElementById("age").value;
    const diet = document.getElementById("diet").value;
    const activity = document.getElementById("activity").value;
    const goal = document.getElementById("goal").value;

    if (age === "" || age <= 0) {
        alert("Please enter your age.");
        return;
    }

    let breakfast;
    let lunch;
    let snack;
    let dinner;


    // VEGAN PLAN
    if (diet === "vegan") {

        breakfast = "Oatmeal with banana, berries and nuts";

        lunch = "Brown rice bowl with chickpeas and mixed vegetables";

        snack = "Apple with peanut butter";

        dinner = "Vegetable tofu stir-fry with whole grains";

    }

    // VEGETARIAN PLAN
    else if (diet === "vegetarian") {

        breakfast = "Vegetable dosa with sambar and fruit";

        lunch = "Rice, dal, mixed vegetables and curd";

        snack = "Fruit with a handful of nuts";

        dinner = "Chapati with paneer and vegetable curry";

    }

    // NON-VEGETARIAN PLAN
    else {

        breakfast = "Eggs with whole-grain toast and fruit";

        lunch = "Rice with grilled chicken and mixed vegetables";

        snack = "Fruit with yogurt or nuts";

        dinner = "Chapati with chicken/fish and vegetables";

    }


    // Modify recommendations based on activity

    if (activity === "high") {

        snack += " + a balanced protein-rich option";

    }


    // Modify according to goal

    if (goal === "energy") {

        breakfast += " + a fruit serving";

    }

    else if (goal === "fitness") {

        lunch += " + an additional protein-rich food";

    }


    document.getElementById("breakfast").innerText = breakfast;

    document.getElementById("lunch").innerText = lunch;

    document.getElementById("snack").innerText = snack;

    document.getElementById("dinner").innerText = dinner;


    // Scroll to results

    document.getElementById("results").scrollIntoView({
        behavior: "smooth"
    });
}