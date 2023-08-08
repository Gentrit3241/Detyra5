const butoni = document.querySelector("button")
console.log(butoni);

const yearOutput = document.querySelector(".year")
console.log(yearOutput)
const monthOutput = document.querySelector(".month")
console.log(monthOutput)
const dayOutput = document.querySelector(".day")
console.log(dayOutput)



butoni.addEventListener("click", () => {

const yearInput = document.querySelector("form div:nth-child(3) input").value
console.log(yearInput)
const monthInput = document.querySelector("form div:nth-child(2) input").value
console.log(monthInput)
const dayInput = document.querySelector("form div:nth-child(1) input").value
console.log(dayInput)


  



let currentDate = new Date();
console.log(currentDate)
let bornDate = new Date(yearInput, monthInput - 1,  dayInput) // month values: (0-11)
console.log(bornDate)

let yearDiff = currentDate.getFullYear() - bornDate.getFullYear();
let monthDiff = currentDate.getMonth() - bornDate.getMonth();
let dayDiff = currentDate.getDate() - bornDate.getDate();

// kushti i pare
if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
  yearDiff -= 1;
  monthDiff += 12;
}
 // kushti i dyte
if (dayDiff < 0) {
  const lastMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
  dayDiff += lastMonthDate;
  monthDiff--;
}

console.log(`Years: ${yearDiff}, Months: ${monthDiff}, Days: ${dayDiff}`);

yearOutput.style.display = "flex";
monthOutput.style.display = "flex";
dayOutput.style.display = "flex";
yearOutput.innerHTML = yearDiff + " years"
monthOutput.innerHTML = monthDiff + " months"
dayOutput.innerHTML = dayDiff + " days"


})