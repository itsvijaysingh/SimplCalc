document.querySelectorAll('button.option').forEach(button => {
    button.addEventListener('click', () => {
        let valueContainer = document.getElementById('value');
        let option = button.value;
        if(option === '='){
            // evaluate the value
            let values = valueContainer.value;
            let result = eval(values);
            valueContainer.value = `${result}`;
        }else if(option === 'C'){
            //clear current inputs
            valueContainer.value = '';
        }else{
            //add values
            valueContainer.value += `${option}`;
        }
    });
})