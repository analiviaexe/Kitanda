function addItem(num){
    var lista = document.getElementById(`addItem${num}`)
    var p = document.createElement('p')
    var input = document.createElement('input')

    input.style.backgroundColor = '#ff7200';
    input.style.border = 'none';
    input.style.borderColor = 'transparent';
    input.style.textAlign = 'center'
    input.style.color = '#ffffff'
    input.style.fontFamily = 'Montserrat, sans-serif'
    input.style.fontSize = '16px'
    input.style.textTransform = 'uppercase'

    p.appendChild(input)
    lista.appendChild(p)
    console.log(lista);    
}
