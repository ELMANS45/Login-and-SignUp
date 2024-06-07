let arr3=JSON.parse(localStorage.getItem('item'))
let num = JSON.parse(localStorage.getItem('exist'))
console.log(num);
document.getElementById('username').innerHTML=`Welcome ${arr3[num].name}`
function back(){
    window.location="index.html"
}