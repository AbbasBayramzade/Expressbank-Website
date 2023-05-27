
// *********************** CAROUSEL SECTION ********************************

let leftIcon = document.querySelector('.icon-left')
let rightIcon = document.querySelector('.icon-right')

let images = document.getElementsByClassName('image-holder')


let index = 0;


let intervalId = Start_Interval();
let timeOutId;



let gallery = document.querySelector('.gallery');
gallery.addEventListener('mouseenter', function () {
    clearInterval(intervalId)
})

gallery.addEventListener('mouseleave', function () {
    intervalId = Start_Interval();
})



rightIcon.addEventListener('click', function () {
    if (index === images.length - 1) {
        index = 0;
    } else {
        index++;
    }
    Hide_All();
    clearInterval(intervalId)
    images[index].classList.add('active');
    clearTimeout(timeOutId);
    timeOutId = setTimeout(function () { 
        intervalId = Start_Interval();
    }, 5000);
})

leftIcon.addEventListener('click', function () {
    if (index === 0) {
        index = images.length - 1;
    } else {
        index--;
    }
    Hide_All();
    clearInterval(intervalId)
    images[index].classList.add('active')
    clearTimeout(timeOutId);
    timeOutId = setTimeout(function () { 
        intervalId = Start_Interval();
    }, 5000);
})


function Hide_All() { 
    for (let index = 0; index < images.length; index++) {
        images[index].classList.remove('active')
    }
}


function Start_Interval() { 
    let id = setInterval(function () { 
        if (index === images.length - 1) {
            index = 0;
        } else {
            index++;
        }
        Hide_All();
        images[index].classList.add('active')
    }, 1000);
    return id
}

// *************************** NAV TABS SECTION *******************************

let tabs = document.querySelectorAll('.news_tab')

let tabContents = document.querySelectorAll('.tab_content')

tabs.forEach(tab=>{
  tab.addEventListener('click', ()=>{
    let target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent=>{
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab =>{
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})

// *************************** CALCULATOR SECTION *******************************

let tabsCalc = document.querySelectorAll('.calc_tab')

let tabContentsCalc = document.querySelectorAll('.tab_content_calc')

tabsCalc.forEach(tab=>{
  tab.addEventListener('click', ()=>{
    let target = document.querySelector(tab.dataset.tabTarget)
    tabContentsCalc.forEach(tabContent=>{
      tabContent.classList.remove('active')
    })
    tabsCalc.forEach(tab =>{
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})

// *************************** CALCULATOR ==> CURRENCY SECTION ************************

let tabsCrncy = document.querySelectorAll('.currency_tab')

let tabContentsCrncy = document.querySelectorAll('.tab_content_c')

tabsCrncy.forEach(tab=>{
  tab.addEventListener('click', ()=>{
    let target = document.querySelector(tab.dataset.tabTarget)
    tabContentsCrncy.forEach(tabContent=>{
      tabContent.classList.remove('active')
    })
    tabsCrncy.forEach(tab =>{
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})

const range = document.getElementById('volume');
    range.addEventListener('input', (event) => {
    range.style.setProperty('--range-value', `${event.target.value}%`);
});

const range2 = document.getElementById('volume2');
  range2.addEventListener('input', (event) => {
  range2.style.setProperty('--range-value', `${event.target.value}%`);
  p.innerHTML = range2.value
});
const range3 = document.getElementById('volume3');
    range3.addEventListener('input', (event) => {
    range3.style.setProperty('--range-value', `${event.target.value}%`);
});
const range4 = document.getElementById('volume4');
    range4.addEventListener('input', (event) => {
    range4.style.setProperty('--range-value', `${event.target.value}%`);
});

const range5 = document.getElementById('volume5');
    range5.addEventListener('input', (event) => {
    range5.style.setProperty('--range-value', `${event.target.value}%`);
});

const range6 = document.getElementById('volume6');
  range6.addEventListener('input', (event) => {
  range6.style.setProperty('--range-value', `${event.target.value}%`);
  p.innerHTML = range2.value
});
const range7 = document.getElementById('volume7');
    range7.addEventListener('input', (event) => {
    range7.style.setProperty('--range-value', `${event.target.value}%`);
});
const range8 = document.getElementById('volume8');
    range8.addEventListener('input', (event) => {
    range8.style.setProperty('--range-value', `${event.target.value}%`);
});

// let p = document.getElementById('test_p2')

// let input_val = document.getElementById("volume2")

// p.innerText = input_val.value


// oninput="document.getElementById('test_p2').innerHTML = this.value"

// range2.addEventListener("click",function(){
// p.innerHTML = input_val
// })


  
