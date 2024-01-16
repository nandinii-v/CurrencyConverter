const curl = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json";
const dropdown1 = document.querySelectorAll(".from select");
const dropdown2 = document.querySelectorAll(".to select");

for (let select of dropdown1) {
    for (code in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = code;
        newOption.value = code;
        select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
        console.log("from container");
        updateFlag1(evt.target);
    });
}

for (let select of dropdown2) {
    for (code in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = code;
        newOption.value = code;
        select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
        console.log("to container");
        updateFlag2(evt.target);
    });
}

const updateFlag1 = (element) => {
    let code = element.value;
    let countryCode = countryList[code];
    let newFlagSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = document.querySelector(".from img");
    img.src = newFlagSrc;

};

const updateFlag2 = (element) => {
    let code = element.value;
    let countryCode = countryList[code];
    let newFlagSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = document.querySelector(".to img");
    img.src = newFlagSrc;
};