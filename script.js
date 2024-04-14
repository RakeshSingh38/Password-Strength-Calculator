const textbox = document.getElementById('textbox');
const result = document.querySelector('.result');
textbox.addEventListener('input', (e) => {
    const key = textbox.value;
    console.log(key);
    console.log('is LowerCase ' + key.search(/[a-z]/));
    if (key.length < 8) {
        result.textContent = ('Password must be at least 8 characters long');
        result.style.color = 'red';

    }
    // The search() method returns the index of the first match between the regular expression and the string, 
    // or 
    // -1 if no match was found. In this case, if search() returns -1, it means that key does not contain any number.
    else if (key.search(/[0-9]/) === -1) { // if the key is a number
        result.textContent = ('Please enter a number')
        result.style.color = 'red';
    }
    else if (key.search(/[a-z]/) === -1) {
        result.textContent = ('Please enter a LowerCase letter')
        result.style.color = 'red';
    }
    else if (key.search(/[A-Z]/) === -1) {
        result.textContent = ('Please enter a UpperCase letter')
        result.style.color = 'red';
    }
    else if (key.search(/[!\@\#\$\%\^\&\*\(\)\_\+\-\=\[\]\{\}\;\:\'\"\|,\.\<\>\/\?]/) === -1) {
        result.textContent = ('Please enter a special character')
        result.style.color = 'red';
    }
    else {
        result.textContent = ('Your Password is strong');
        result.style.color = 'green';
    }



    /* else{
        result.style.color = 'green'; 
        result.textContent = ('Your Password is strong');
    } */
    /*  
   
     if (key !== key.search(/[a-z]/)) {
         result.textContent = ('You need to entered an lowerCase letter');
     }
     if (key !== key.search(/[A-Z]/)) {
         result.textContent = ('You need to entered an special character');
     }
     else if (key !== key.search(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)) {
         result.textContent = ('Your Password is strong');
     } */
})