var broj_1 = document.getElementById("prvi");
var broj_2 = document.getElementById("drugi");
var broj_3 = document.getElementById("treci");
var lab1 = document.getElementById("lab_1");
var lab2 = document.getElementById("lab_2");

document.getElementById("myButton_1").onclick = function() {
    var rez = myFunction(broj_1, broj_2);
    if(rez == 1){
        
    }else if(rez == 2){

    }else{

    }
};

function myFunction(broj_1, broj_2) {
    if(typeof broj_1 !== 'number'){
        return 1;
    }

    if(typeof broj_2 !== 'number'){
        return 2;
    }

    if(broj_1 == broj_2){
        return broj_1;
    }

    if(broj_1 > broj_2){
        return broj_1;
    }else{
        return broj_2;
    }
    
}


