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



