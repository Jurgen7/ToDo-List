const add = document.getElementById('add');
const input = document.getElementById('input')
const container = document.querySelector('.container')


add.addEventListener('click', function(){
    const value = input.value

    const element = document.createElement('div')
    const list = document.createElement('li')
    const deleteBtn = document.createElement('span')
    const deleteSymbol = document.createTextNode("x")

    container.appendChild(element)
    element.appendChild(list)
    element.appendChild(deleteBtn)
    deleteBtn.appendChild(deleteSymbol)
    
    element.classList.add("list-element")
    
    list.innerHTML = value
    input.value = ""

    deleteBtn.addEventListener("click", () => {
        container.removeChild(element)
    })  

    deleteBtn.style.cursor = "pointer";
    
})

