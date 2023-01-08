let selectors = document.querySelectorAll('.collapsible');

selectors.forEach(item => {
    item.addEventListener('click',  function () {
        this.classList.toggle('collapsible--expanded')
    })
})
 
 