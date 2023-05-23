// ********************** CARDS NAV&TABS SECTION  ******************************

let tabsCards = document.querySelectorAll('.cards_tab')

let tabContentsCards = document.querySelectorAll('.tab_content_cards')

tabsCards.forEach(tab=>{
  tab.addEventListener('click', ()=>{
    let target = document.querySelector(tab.dataset.tabTarget)
    tabContentsCards.forEach(tabContent=>{
      tabContent.classList.remove('active')
    })
    tabsCards.forEach(tab =>{
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})