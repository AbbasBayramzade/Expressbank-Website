
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


