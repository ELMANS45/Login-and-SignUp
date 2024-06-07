let upName = document.getElementById('signupName')
let upEmail = document.getElementById('signupEmail')
let UpPass  = document.getElementById('signupPassword')
let exist = document.getElementById('exist')
let arr=[]
let infor = {}
let ex=0;
if(localStorage.getItem('item')!=null){
    arr= JSON.parse(localStorage.getItem('item'))
}
function signUp(){
    var regex = {
        markName: /^[A-Za-z ][A-Za-z]/,
        markEmail: /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/
    };
    infor={
        name:upName.value,
        Email:upEmail.value,
        pass : UpPass.value
    }
    if(arr.length==0){
        if(regex["markName"].test(infor.name) && regex["markEmail"].test(infor.Email)){
        arr.push(infor)
        exist.classList.remove("text-danger")
        exist.classList.add("text-success")
        exist.innerHTML="Success"
        localStorage.setItem('item' , JSON.stringify(arr))
        clearV();
    }
    else{
        exist.classList.remove("text-success")
        exist.classList.add("text-danger")
        exist.innerHTML="Failed of Inputs please try again"
        clearV();
    }
    }
    else{
        if(regex["markName"].test(infor.name) && regex["markEmail"].test(infor.Email)){
        for(let i = 0 ; i<arr.length ; i++){
            if(infor.Email==arr[i].Email || infor.pass==arr[i].pass){
                ex+=1;
            }
        }
        if(ex!=0){
            exist.classList.remove("text-success")
            exist.classList.add("text-danger")            
            exist.innerHTML=" The User Was Exist"
            ex=0;
            clearV();
        }
        else{
            arr.push(infor)
            exist.classList.remove("text-danger")
            exist.classList.add("text-success")
            exist.innerHTML="Success"
            localStorage.setItem('item' , JSON.stringify(arr))
            clearV();            
        }
        }
        else{
            exist.classList.remove("text-success")
            exist.classList.add("text-danger")
            exist.innerHTML="Failed of Inputs please try again"
            clearV();
        }
    }
}
function clearV(){
    upName.value=""
    upEmail.value=""
    UpPass.value=""
}