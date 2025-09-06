function hello(){
        console.log("Hello");
}

let fnc= function(){
        console.log("Bacchon");
}

let kaise= ()=>{
        console.log("Kaise Ho");
}
hello();
fnc();
kaise();

///Higher order function wo hota hai jo return kre function ya accept kre function as a parameter

//Closure->Ek function jo return krega ek aur function aur return hone wala function use kare parent fnc ka variable
function abcd(){
        //console.log(a);
        let a=12;
                return function(){
                console.log(a);
        }
}
let val= abcd();
console.log(val);