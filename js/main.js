"use strict"
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