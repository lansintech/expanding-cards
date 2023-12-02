const panels = document.querySelectorAll('.panel')

panels.forEach(panel =>{
    panel.addEventListener('click',() =>{
       RemoveActiveClasses()
        panel.classList.add('panel-active')
    })
})

function RemoveActiveClasses() {
    panels.forEach(panel =>{
        panel.classList.remove('panel-active')
    })
}
