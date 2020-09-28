let salary = 2500;

if (salary <= 1556.94){
    inss = 0.08 * salary
} else if (salary <= 2594.92){
    inss = 0.09 * salary
} else if (salary <= 5189.82){
    inss = 0.11 * salary
} else {
    inss = 570.88
}

let baseSalary = salary - inss;

if (baseSalary <= 1903.98){
    ir = 0;
} else if (baseSalary <= 2826.65){
    ir = baseSalary * 0.075 - 142.80;
} else if (baseSalary <= 3751.05){
    ir = baseSalary * 0.15 - 354.80;
} else if (baseSalary <= 4664.68){
    ir = baseSalary * 0.225 - 636.13;
} else {
    ir = baseSalary * 0.275 - 869.36;
}

let netSalary = baseSalary - ir;

console.log(netSalary);