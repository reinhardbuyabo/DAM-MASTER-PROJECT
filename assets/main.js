let preIncome = document.querySelector("#pre-income");
let benefitsInKind = document.querySelector("#benefits");
let calculate = document.querySelector("#calculate");
let output = document.querySelector("#display");

let time = document.querySelectorAll("#first .form-check .form-check-input");
let annual = false;

for (let i = 0; i < time.length; i++) {
    time[i].addEventListener("change", (e) => {
        if (e.target.value == 'year') {
            annual = true;
        } else {
            annual = false;
        }
    })
}

let basicSalary = document.querySelector("#second .input-group input");
let salary;
let benefits = document.querySelector("#third .input-group input");
let ben;

basicSalary.addEventListener("focusout", (e) => {
    salary = e.target.value;
})

benefits.addEventListener("focusout", (e) => {
    console.log(e.target.value);
    ben = e.target.value;
})

let nssf = document.querySelectorAll("#fourth .form-check .form-check-input");
let deductnssf = true;

for (let i = 0; i < nssf.length; i++) {
    nssf[i].addEventListener("change", (e) => {
        if (e.target.value == 'no') {
            deductnssf = false;
        } else {
            deductnssf = true;
        }
    })
}

let rates = document.querySelectorAll("#fifth .form-check .form-check-input");
let old = true;

for (let i = 0; i < rates.length; i++) {
    rates[i].addEventListener("change", (e) => {
        if (e.target.value == 'new') {
            old = false;
        } else {
            old = true;
        }
    })
}

let nhif = document.querySelectorAll("#sixth .form-check .form-check-input");
let deductnhif = true;

for (let i = 0; i < nhif.length; i++) {
    nhif[i].addEventListener("change", (e) => {
        if (e.target.value == 'no') {
            deductnhif = false;
        } else {
            deductnhif = true;
        }
    })
}

showResults = () => {
    salary = basicSalary.value;
    ben = benefits.value;
    try {
        if (salary == undefined || salary.trim() == '') {
            throw salary;
        }
        if (ben == undefined || ben.trim() == '') {
            throw ben;
        }
        preIncome.textContent = salary;
        salary = parseFloat(salary);
        benefitsInKind.textContent = ben;
        ben = parseFloat(ben);
        output.style.display = "block";

        var incomeTax = 0, taxableIncome = 0, pension = 0, personalRelief = 0, nhifValue = 0, monthlySal = 0;

        if (old) {
            pension = 200;
        } else {
            if (salary > 18000) {
                pension = 2160;
            } else {
                pension = salary * 0.06;
            }
            document.querySelector("#nssf").textContent = pension;
        }
        let postPensionDeduction = salary - pension;
        document.querySelector("#post-income").textContent = postPensionDeduction;

        taxableIncome = salary + ben - pension;
        if (annual) {
            monthlySal = salary /12;
            personalRelief = 28800;
            taxableIncome -= personalRelief;
            if (taxableIncome <= 147580) {
                incomeTax = taxableIncome * 0.1;
            }  else if (taxableIncome <= 286623) {
                incomeTax = taxableIncome * 0.15;
            } else if (taxableIncome <= 425666) {
                incomeTax = taxableIncome * 0.2;
            } else if (taxableIncome <= 564709) {
                incomeTax = taxableIncome * 0.25;
            } else {
                incomeTax = taxableIncome * 0.3;
            }
            
            if (deductnhif) {
                if (monthlySal > 1000 && monthlySal < 5999) {
                    nhifValue = 150;
                } else if (monthlySal < 7999) {
                    nhifValue = 300;
                } else if (monthlySal < 11999) {
                    nhifValue = 400;
                } else if (monthlySal < 14999) {
                    nhifValue = 500;
                } else if (monthlySal < 19999) {
                    nhifValue = 750;
                } else if (monthlySal < 24999) {
                    nhifValue = 850;
                } else if (monthlySal < 34999)  {
                    nhifValue = 900;
                } else if (monthlySal < 44999) {
                    nhifValue = 1000;
                } else if (monthlySal < 49999) {
                    nhifValue = 1100;
                } else if (monthlySal < 59999) {
                    nhifValue = 1200;
                } else if (monthlySal < 69999) {
                    nhifValue = 1300;
                } else if (monthlySal < 79999) {
                    nhifValue = 1400;
                } else if (monthlySal < 89999) {
                    nhifValue = 1500;
                } else if (monthlySal < 99999) {
                    nhifValue = 1600;
                } else {
                    nhifValue = 1700;
                }
            } else {
                nhifValue = 0;
            }
        } else {
            personalRelief = 2400;
            taxableIncome -= personalRelief;
            if (taxableIncome <= 12298) {
                incomeTax = taxableIncome * 0.1;
            } else if (taxableIncome <= 23885) {
                incomeTax = taxableIncome * 0.15;
            } else if (taxableIncome <= 35472) {
                incomeTax = taxableIncome * 0.2;
            } else if (taxableIncome <= 47059) {
                incomeTax = taxableIncome * 0.25;
            } else {
                incomeTax = taxableIncome * 0.3;
            }

            if (deductnhif) {
                    monthlySal = salary;
                if (monthlySal > 1000 && monthlySal < 5999) {
                    nhifValue = 150;
                } else if (monthlySal < 7999) {
                    nhifValue = 300;
                } else if (monthlySal < 11999) {
                    nhifValue = 400;
                } else if (monthlySal < 14999) {
                    nhifValue = 500;
                } else if (monthlySal < 19999) {
                    nhifValue = 750;
                } else if (monthlySal < 24999) {
                    nhifValue = 850;
                } else if (monthlySal < 34999)  {
                    nhifValue = 900;
                } else if (monthlySal < 44999) {
                    nhifValue = 1000;
                } else if (monthlySal < 49999) {
                    nhifValue = 1100;
                } else if (monthlySal < 59999) {
                    nhifValue = 1200;
                } else if (monthlySal < 69999) {
                    nhifValue = 1300;
                } else if (monthlySal < 79999) {
                    nhifValue = 1400;
                } else if (monthlySal < 89999) {
                    nhifValue = 1500;
                } else if (monthlySal < 99999) {
                    nhifValue = 1600;
                } else {
                    nhifValue = 1700;
                }
            } else {
                nhifValue = 0;
            }
        }

        


        let paye = incomeTax - personalRelief;
        document.querySelector("#taxable-income").textContent = taxableIncome;
        document.querySelector("#tax-on-taxable-income").textContent = incomeTax;
        document.querySelector("#personal-relief").textContent = personalRelief;
        document.querySelector("#tax-off-relief").textContent = incomeTax - personalRelief;
        document.querySelector("#paye").textContent = paye;
        document.querySelector("#chargeable").textContent = postPensionDeduction;
        document.querySelector("#nhif").textContent = nhifValue;
        document.querySelector("#net-pay").textContent = postPensionDeduction - paye;
    } catch {
        console.log(new Error("Undefined Variables"));
    }
}
calculate.addEventListener("click", showResults);
