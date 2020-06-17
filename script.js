function pages(button) {
    if (button.dataset.page === 'numbers'){
        document.querySelector('div.numbers').style.display = 'flex';
        document.querySelector('div.arrays').style.display = 'none';
    }
    else {
        document.querySelector('div.numbers').style.display = 'none';
        document.querySelector('div.arrays').style.display = 'flex';
    }
}

function fibonachi() {
    const n = document.querySelector('input.fibonachi').value;
    if (n >= 0){
        if (n >= 1)
            var array = [0,1],
                result = '<p>1) 0,</p><p>2) 1,</p>';
        else
            var array = [0],
                result = '<p>1) 0</p>';

        while ((array[array.length - 1] + array[array.length - 2]) <= n){
            array.push(array[array.length - 1] + array[array.length - 2]);
            result += `<p>${array.length}) ${array[array.length - 1]},</p>`;
        }
    }
    else {
        if (n <= -1)
            var array = [0, -1],
                result = '<p>1) 0,</p><p>2) -1,</p>';
        else
            var array = [0],
                result = '<p>1) 0</p>';
        while ((array[array.length - 1] + array[array.length - 2]) >= n){
            array.push(array[array.length - 1] + array[array.length - 2]);
            result += `<p>${array.length}) ${array[array.length - 1]},</p>`;
        }
    }
    document.querySelector('div.result').innerHTML = result;
}

function parzTver() {
    const n = document.querySelector('input.parzTver').value;
    let array = [],
        result = '';
    for (let i = 2; i <= n; i++){
        if (parzaSimulator(i)){
            array.push(i);
            result += `<p>${array.length}) ${array[array.length - 1]},</p>`;
        }
    }

    document.querySelector('div.result').innerHTML = result;

    // irakanum armat chi hanum, uxaki indz konkret armat petq chi
    
    function armatSimulator(n) {
        for (let i = 0; i <= n; i += 1){
            if (i * i > n){
                return i;
            }
            else if(i * i === n){
                return i;
            }
        }
    }

    function parzaSimulator(n) {
        if (n === 2) return true;
        else
            for (let i = 2; i <= armatSimulator(n); i++){
                if (n % i === 0){
                    return false;
                }
            }
        return true;
    }

}

function palindrome() {
    const n = document.querySelector('input.palindrome').value;
    let array = [],
        result = '';

    for (let i = 0; i <= n; i++){
        if (palindromeSimulator(i)){
            array.push(i);
            result += `<p>${array.length}) ${i},</p>`;
        }
    }

    document.querySelector('div.result').innerHTML = result;
    function palindromeSimulator(string) {
        string = string.toString();
        for (let i = 0; i <= (string.length / 2 - (string.length/2) % 1); i++){
            if (string[i] !== string[string.length - 1 - i]){
                // console.log(string[i])
                return false;
            }
        }
        return true;
    }
}

function array() {
    const cols = document.querySelector('input.cols').value,
        rows = document.querySelector('input.rows').value;

    let array = '<form onsubmit="arraySortavorum(); return false"><table>';
    for (let i = 0; i < rows; i++){
        array += '<tr>';
        for (let j = 0; j < cols; j++){
            array += `<th><input class="a${i}${j}" type="text"></th>`;
        }
        array += '</tr>';
    }

    array += '</table><button type="submit">Դասավորել</button><input type="checkbox" class="checkbox">նվազման</form>';

    document.querySelector('div.array').innerHTML = array;
}

function arraySortavorum() {
    let vector = [];
    const cols = document.querySelector('input.cols').value,
        rows = document.querySelector('input.rows').value;
    let result = '';
    for (let i = 0; i < rows; i++){
        for (let j = 0; j < cols; j++){
            vector.push(document.querySelector(`input.a${i}${j}`).value ? +document.querySelector(`input.a${i}${j}`).value : 0);
        }
    }

    if (document.querySelector('.checkbox').checked){
        for (let j = 0; j < vector.length - 1; j++)
            for (let i = 0; i < vector.length; i++){
                if (vector[i + 1] !== undefined && vector[i] < vector[i + 1]){
                    let min = vector[i];
                    vector[i] = vector[i + 1];
                    vector[i + 1] = min;
                }
            }
    }
    else {
        for (let j = 0; j < vector.length - 1; j++)
            for (let i = 0; i < vector.length; i++){
                if (vector[i + 1] !== undefined && vector[i] > vector[i + 1]){
                    let max = vector[i];
                    vector[i] = vector[i + 1];
                    vector[i + 1] = max;
                }
            }
    }
    for (let i = 0, v = 0; i < rows; i++){
        for (let j = 0; j < cols; j++){
            document.querySelector(`input.a${i}${j}`).value = vector[v];
            v++;
        }
    }
}

