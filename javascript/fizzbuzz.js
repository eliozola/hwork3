const main = document.getElementById("container");

const create = function () {            

        // for( i = inputMin.value; i <= inputMax.value; i++ ) 
    for (let i = 1; i <= 100; i++) {     
   { 
        let newDiv = document.createElement("div");
        let newPar = document.createElement("p");

        newDiv.appendChild(newPar);
        main.appendChild(newDiv).setAttribute("id", "div_" + i);   


        // i = number that will display + FIZZ BUZZ text 
        
            if (i % 3 === 0 && i % 5 === 0) {                              
                newPar.appendChild(document.createTextNode(i + ' = FIZZ BUZZ'));
                main.appendChild(newDiv).setAttribute("class", "fizbuzz");   // this adds class to divs

            } else if (i % 3 === 0) {
                newPar.appendChild(document.createTextNode(i + ' = FIZZ'));
                main.appendChild(newDiv).setAttribute("class", "fiz");

            } else if (i % 5 === 0) {
                newPar.appendChild(document.createTextNode(i + ' = BUZZ'));
                main.appendChild(newDiv).setAttribute("class", "buz");

            } else {
                newPar.appendChild(document.createTextNode(i));
                main.appendChild(newDiv).setAttribute("class", "num");
            }
        
    }
};    
}
create();
 
// sets min value to input

inputMin.onkeyup = function (e) {
this.value = inputMin.value.replace(/^(0*)/, "");
        if (inputMin.value >= 1 && inputMin.value <= 100) {
            this.value = inputMin.value;
        } else if (inputMin.value.length === 0) {
            inputMin.value = null;
        } else {
            inputMin.value = null;
            alert("Unsuitable number!");
        }
        if (!((e.keyCode > 95 && e.keyCode < 106)
            || (e.keyCode > 47 && e.keyCode < 58)
            || [8, 13, 37, 39].indexOf(e.keyCode) >= 0
        )) {
            return false;
        }
        create();
    };
    
// sets max value to input

inputMax.onkeyup = function (e) {
this.value = inputMax.value.replace(/^(0*)/, "");
        if (inputMax.value >= 1 && inputMax.value <= 100) {
            this.value = inputMax.value;
        } else if (inputMax.value.length === 0) {
            inputMax.value = null;
            
        } else {
            inputMax.value = null;
            alert("Unsuitable number!");
        }
        if (!((e.keyCode > 95 && e.keyCode < 106)
            || (e.keyCode > 47 && e.keyCode < 58)
            || [8, 13, 37, 39].indexOf(e.keyCode) >= 0
        )) {
            return false;
        }
        create();
    };


