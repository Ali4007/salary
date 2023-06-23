 let input =document.querySelectorAll("input");
 let button = document.querySelector("button");
 let span =document.querySelector("span");

 function getNetSalary(){

    let gross = input[0].value;
    let tax =input[1].value;
    let ins = input[2].value;
    let bouns = input[3].value;


    let InsCost = +gross * (+ins/100);
    let grossAfterIns = +gross - +InsCost;

    let taxCost = +grossAfterIns * +(tax/100);

    let grossAfterInsTaxAndIns = +grossAfterIns - +taxCost;


    let netSalary = +grossAfterInsTaxAndIns + +bouns;

    span.innerText = netSalary;

 }


 button.addEventListener('click',getNetSalary);