// *************************** NAV TABS SECTION *******************************

let tabs = document.querySelectorAll('.addresses_tab')

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