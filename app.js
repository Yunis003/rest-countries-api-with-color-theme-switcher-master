//! Dropdown Menu
let filtered=document.querySelector('.filtered')
filtered.addEventListener('click', function(){
   document.querySelector('.options').classList.toggle('show')
})

//! Main
let container=document.getElementById('container')
let countryData;
function country(){
   fetch('https://restcountries.com/v3.1/all')
   .then((response)=> response.json())
   .then((data) => {
      countryData=data
      displayCountry(data)} )
}

country()

function displayCountry(countries) {
   container.innerHTML = "";
   countries.forEach((country) => {
     // console.log(country);
     let displayCard = document.createElement("div");
     displayCard.innerHTML = `
    
  <div class="card" style="width: 15rem; height: 22rem;">
  <a href="/information/inf.html?name=${country.name.common}" class="back-link">
            <img class="card-img-top" src="${country.flags.png}" alt="Card image cap">
           </a>
            <div class="card-body">
              <h2 class="cardtitle"><a href="/information/inf.html" class='link'>${country.name.common}</a></h2>
              <p class="card-text">Population: <span>${country.population}</span></p>
              <p class="card-text">Region: <span class='regionMain'>${country.region}</span></p>
              <p class="card-text">Capital: <span>${country.capital}</span></p>
            </div>
          </div>
     
     `;
 
     container.append(displayCard);
   });
 }


//! Icon None
let icon=document.querySelector('.none')
let input=document.querySelector('.srcInput')
input.addEventListener('click', function(){
   // icon.style.display='none'
   if(icon.style.display='block'){
      icon.style.display='none'
      this.style.paddingLeft='10px'
   }
   else{
      icon.style.display='block'
   }  
})

//! Dark-Light Mode
let darkmode=localStorage.getItem('darkMode')
let changer=document.querySelector('.changer')

let enableDarkMode= ()=>{
   document.querySelector('nav').classList.toggle('dark')
   document.querySelector('body').classList.toggle('dark')
   document.querySelector('.srcInput').classList.toggle('dark')
   document.querySelector('.options').classList.toggle('dark')
   localStorage.setItem('darkMode', 'enable')
}
let disableDarkMode= ()=>{
   document.querySelector('nav').classList.toggle('dark')
   document.querySelector('body').classList.toggle('dark')
   document.querySelector('.srcInput').classList.toggle('dark')
   document.querySelector('.options').classList.toggle('dark')
   
   localStorage.setItem('darkMode', 'disabled')
}

if(darkmode==='enable'){
   enableDarkMode()
}

changer.addEventListener('click', function(){
   darkmode=localStorage.getItem('darkMode')
   if(darkmode !=='enable'){
      enableDarkMode()
   }else{
      disableDarkMode()
   }


   // document.querySelector('nav').classList.toggle('dark')
   // document.querySelector('body').classList.toggle('dark')
   // document.querySelector('.srcInput').classList.toggle('dark')
   // document.querySelector('.options').classList.toggle('dark')

})





//! Input

input.addEventListener('input', function(){
   // console.log(countryData);
  let datamain= countryData.filter((country)=>
      country.name.common.toLowerCase().includes(input.value.toLowerCase())
   )
displayCountry(datamain)
console.log(datamain);
})

//! Filter By Region

let regions=document.querySelector('.regions')
let drpdown=document.getElementById('drpdown')


   regions.addEventListener('click',function(){
      drpdown.classList.remove("show");
   filtered.textContent = `${"Region:" + " " + regions.textContent}`;
   if(regions.textContent=='All'){
      country()
   }
   else{
      fetch(`https://restcountries.com/v3.1/region/${event.textContent}`)
      .then(res=> res.json())
      .then((data)=>{
         displayCountry(data)
      })
   }
   })








