let height = Number(prompt("Enter height in Cm :")) / 100;
let weight = Number(prompt("Enter weight in Kg : "));
let bmi;

const bmiCalculator = (ht, wt) => {
  bmi = (wt / (ht * ht)).toFixed(1);
};

bmiCalculator(height, weight);

if (bmi < 18.5) {
  alert(`Your BMI = ${bmi} and you are UNDER-WEIGHT`);
} else if (bmi >= 18.5 && bmi <= 24.9) {
  alert(`Your BMI = ${bmi} and you are NORMAL-WEIGHT`);
} else if (bmi >= 25 && bmi <= 29.9) {
  alert(`Your BMI = ${bmi} and you are OVER-WEIGHT`);
} else {
  alert(`Your BMI = ${bmi}, and you are OBESE`);
}
