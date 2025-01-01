const dropdowns = document.querySelectorAll("select")


for(let select of dropdowns){
    for(code in codes){
        let newOption = document.createElement("option");
        newOption.innerText=code;
        newOption.value=code;
        select.append(newOption);
        if(select.name==="from" && code==="INR"){
            newOption.selected="selected";
        }
        if(select.name==="to" && code==="USD"){
            newOption.selected="selected";
        }
    }
}
let fromCurr="INR";
let toCurr="USD";
dropdowns[0].addEventListener("change", (evt) => {
    fromCurr=evt.target.value;
    updateFromFlag(codes[fromCurr]);
})
dropdowns[1].addEventListener("change", (evt) => {
    toCurr=evt.target.value;
    updateToFlag(codes[toCurr]);
})
const updateFromFlag = (f) => {
    let fromFlag = document.querySelector("#fromFlag");
    fromFlag.src=`https://flagsapi.com/${f}/flat/64.png`;
}
const updateToFlag = (f) => {
    let toFlag = document.querySelector("#toFlag");
    toFlag.src=`https://flagsapi.com/${f}/flat/64.png`;
}
let button = document.querySelector(".convert");
button.addEventListener("click", (evt) => {
    evt.preventDefault();
    convert(fromCurr, toCurr, document.querySelector("#amount"));
})
const convert = async (from, to, amt) => {
    if(amt.value === "" || amt.valueAsNumber < 1){
        amt.value = "1";
    }
    const url=`https://raw.githubusercontent.com/WoXy-Sensei/currency-api/main/api/${to}_${from}.json`;
    let response = await fetch(url);
    let data = await response.json();
    let resultAmt = (amt.valueAsNumber) * (data.rate); 
    document.querySelector("#result").value=resultAmt;
    let exchangeRate = document.querySelector(".rule");
    exchangeRate.innerText=`1 ${from} = ${(data.rate)} ${to}`;
    document.querySelectorAll("label")[1].innerText=`The resultant amount in ${to} is:`;
}