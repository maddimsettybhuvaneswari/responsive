// Click Button Code {task-4}
document.getElementById("but").addEventListener('click', colorButton);       
function colorButton() {
    document.body.style.backgroundColor ="rgb(61, 16, 1)";
}

// fetch API Integration code {task-5}  
let x = 0; 
let users = []; 
function fetchData() {
    fetch('./data.json')
        .then(response => response.json()) 
        .then(data => {
            users = data; 
            x = 0; 
            displayData(); })
        .catch(error => {
            console.error('Error fetching user data:', error); 
        });}
function displayData() {
    const table = document.getElementById('data-table');
    table.innerHTML = ''; 
    if (x >= users.length) {
        alert('Data was finished'); 
        return;
    }
    const use = users[x]; 
    const headerRow = `<tr>${Object.keys(use).map(key => `<th>${key}</th>`).join('')}</tr>`;
    const documentRow = `<tr>${Object.values(use).map(value => `<td>${value}</td>`).join('')}</tr>`;
    table.innerHTML = headerRow + documentRow; 
    x++; 
}
document.getElementById('api-button').addEventListener('click', () => {
    if (users.length === 0) {
        fetchData(); 
    } else 
        displayData(); 
});
    
// Fome code in javaScript{task-6}
const formID =document.getElementById("form"); 
const urname =document.getElementById("urname");
const email =document.getElementById("email");
const pwd =document.getElementById("password");
const number =document.getElementById("number");
const add =document.getElementById("Address");
formID.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateFunction();
})
function validateFunction(){
let namevalue = urname.value.trim()
let emailvalue = email.value.trim()
let passwordvalue = password.value.trim()
let numbervalue = number.value.trim()
let addressvalue = Address.value.trim()
if(namevalue===''){
    setError(urname,'User name cannot be empty')
}
else if(namevalue.length<3){
    setError(urname,'User name should be minimum 3 characters')
}
else{        
    setSuccesss(urname)
}
if(emailvalue===''){
    setError(email,'Eamil cannot be empty')
}  
else if(!emailCheck(emailvalue)){
    setError(email,'Enter Valid Email Id')
}
else{        
    setSuccesss(email)
}
function emailCheck(input){
    let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    let valid = emailReg.test(input)       
    return valid
}
if(passwordvalue===''){
    setError(password,'Password cannot be empty')
}
else if(passwordvalue.length<8){
    setError(password,'Password should be minimum 8 characters')
}
else{        
    setSuccesss(password)
}
if(numbervalue===''){
    setError(number,'Number cannot be empty')
}
else if(numbervalue.length<10){
    setError(number,'Your number should be minimum 10 letters')
}
else{        
    setSuccesss(number)
}
if(addressvalue===''){
    setError(Address,'Address cannot be empty')
}
else if(addressvalue.length<20){
    setError(Address,'Address should be minimum 20 characters')
}
else{        
    setSuccesss(Address)
}
function setError(input,message){
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    small.innerText = message
    parent.classList.add('error')
    parent.classList.remove('success')
}
function setSuccesss(input){
    let parent = input.parentElement;
    parent.classList.add('success')
    parent.classList.remove('error')
}
}