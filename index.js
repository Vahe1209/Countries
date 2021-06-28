let countries = document.getElementById("countries")
let objectList = [];
fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(res => {
    res.forEach(product => {
        let productObject = {};
        productObject.name = product.name
        productObject.flag = product.flag;
        productObject.capital = product.capital;
        productObject.area = product.area;
        productObject.population = product.population;
        productObject.languages = product.languages;
        objectList.push(productObject)
    });
    return objectList
}).then(objList=> {
    objList.forEach((product)=> {
        createObject(product,countries)
    // console.log(product);
    })
    // console.log(objList);
});


function createObject(obj,parent){
  const productContainer = document.createElement('div');
    productContainer.classList.add('about-country')
   productContainer.innerHTML = `
        <img class="country-logo" src="${obj.flag}" alt="">
        <div class="county-info">
            <div class="country-name">Name : ${obj.name}</div>
            <div class="country-capital">Capital : ${obj.capital}</div>
            <div class="country-population">Population : ${obj.population}</div>
            <div class="country-area">Area : ${obj.area}</div>
            <div class="country-languages">Languages : ${getLanguages(obj.languages)}</div>
        </div>
`;
parent.appendChild(productContainer)  
}


function getLanguages(arr) {
    let lang = arr.map(lang=> {
        return lang.name
    }).join(' ,')
    return lang
}


// createObject(productObject)