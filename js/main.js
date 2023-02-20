"use strict"
document.addEventListener("DOMContentLoaded", () => {
    let switchTab = document.getElementsByClassName('switch_tab_botton')
    for (let i = 0; i < switchTab.length; i++) {
        switchTab[i].addEventListener('click', (e) => {
            if (!e.target.classList.contains('active')) {
                let activeTab = document.querySelector('.switch_tab .active')
                activeTab.classList.remove('active')
                e.target.classList.add('active')
            }
        })
    }
})


function openModalDialog(type) {
    let modal = document.querySelector('#app_modal')
    let modalContainer = document.querySelector('#app_modal .modal_body')
    modalContainer.innerHTML = modalContents[type]
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

function closeModalDialog() {
    let modal = document.querySelector('#app_modal')
    modal.style.display = 'none'
    document.body.style.overflow = 'scroll'
}