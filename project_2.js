document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const height = parseInt(document.querySelector('#height').value);
        const weight = parseInt(document.querySelector('#weight').value);
        const results = document.querySelector('#results');

        // Input validation
        if (!height || height <= 0 || isNaN(height)) {
            results.innerHTML = "Please provide a valid height.";
            return; // Stop execution if height is invalid
        } else if (!weight || weight <= 0 || isNaN(weight)) {
            results.innerHTML = "Please provide a valid weight.";
            return; // Stop execution if weight is invalid
        } else {
            // BMI Calculation
            const bmi = (weight / ((height * height) / 10000)).toFixed(2);

            // Show result
            results.innerHTML = `<span>Your BMI is ${bmi}</span>`;

            if(bmi <= 18.6){
                results2.innerHTML = `UNDER WEIGHT`;
            }else if(bmi == 18.6 && bmi == 24.9){
                results2.innerHTML = `NORMAL RANGE`;
            }else{
                results2.innerHTML = `overweight`;
            }
         }
    });
});
