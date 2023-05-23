// ********************** CREDITS NAV&TABS SECTION  ******************************

let tabsCrdt = document.querySelectorAll('.crdt_tab')

let tabContentsCrdt = document.querySelectorAll('.tab_content_crdts')

tabsCrdt.forEach(tab=>{
  tab.addEventListener('click', ()=>{
    let target = document.querySelector(tab.dataset.tabTarget)
    tabContentsCrdt.forEach(tabContent=>{
      tabContent.classList.remove('active')
    })
    tabsCrdt.forEach(tab =>{
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})