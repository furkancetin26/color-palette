const colorPicker = document.querySelector('#colorPicker');
const body = document.querySelector('body')
const renkcode = document.querySelector('.renk-code')

colorPicker.addEventListener('input', function(e){
    const selectedColor = e.target.value;
    body.style.backgroundColor = selectedColor;
    renkcode.textContent = selectedColor;
})