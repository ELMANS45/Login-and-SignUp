let arr2=JSON.parse(localStorage.getItem('item'))
let inEmail = document.getElementById('signinEmail')
let inPass  = document.getElementById('signinPassword')
let incorrect = document.getElementById('incorrect')
let formation = {}
let ex=0;
let r=0;
function logIn(){
    if(arr2==null){
        incorrect.classList.remove("text-success")
        incorrect.classList.add("text-danger")
        incorrect.innerHTML="Incorrect"
        clearV();
    }
    else{
        formation={
            Email:inEmail.value,
            pass:inPass.value
        }
        for(let i = 0 ; i<arr2.length ; i++){
            if(formation.Email==arr2[i].Email && formation.pass==arr2[i].pass){
                ex+=1;
                r=i;
            }   
        }
        if(ex!=0){
            localStorage.setItem('exist', JSON.stringify(r))
            window.location="home.html"
            clearV();
        }
        else{
            incorrect.classList.remove("text-success")
            incorrect.classList.add("text-danger")
            incorrect.innerHTML="Incorrect Email or Password"
            clearV();
        }
    }
}
function clearV(){
    inEmail.value=""
    inPass.value=""
}