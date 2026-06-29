let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button'); 
let string = "";   
buttons.forEach(button => {
    button.addEventListener('click', (e) => { 

        if(e.target.innerHTML == '='){  
         try{
         let result = eval(string);  
         if(result == Infinity){
            input.value = "can't divided by zero";
            string = "";
         }else{
            string = result;
            input.value = string;
         }
         }
         catch{
            input.value = "syntax error";
            string = "";
         }
        }
        else if(e.target.innerHTML == 'AC'){ 
            string ="";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){  
        string = string.substring(0, string.length-1); 
        input.value = string; 
        }
        else if(e.target.innerHTML == '()'){
             let open = 0;
             let close = 0;
            for(let i=0; i<string.length; i++){
                let character = string[i];
                if(character == '('){
                    open++;
                }
                if(character == ')'){
                    close++;
                }
            }
            if(open > close){
                string += ')';
            }
            else{
                string += '(';
            }
          input.value = string;
        }
        else if(e.target.innerHTML.trim() == 'abs'){
        let num = Number(input.value);
        let result = Math.abs(num);
        string = result.toString();
        input.value = string;
        }
        else if(e.target.innerHTML.trim() == 'sin'){
        let num = Number(input.value);
        let rad = num * (Math.PI / 180);
        let result = Math.sin(rad);
        string = result.toString();
        input.value = string;
        }
        else if(e.target.innerHTML.trim() == 'cos'){
        let num = Number(input.value);
        let rad = num * (Math.PI / 180);
        let result = Math.cos(rad);
        string = result.toString();
        input.value = string;
        }
        else if(e.target.innerHTML.trim() == 'tan'){
        let num = Number(input.value);
        let rad = num * (Math.PI / 180);
        let result = Math.tan(rad);
        string = result.toString();
        input.value = string;
        }
        else if(e.target.innerHTML.trim() == 'log₁₀(x)'){
        let num = Number(input.value);
        let result = Math.log10(num);
        string = result.toString();
        input.value = string;
        }
        else if(e.target.innerHTML.trim() == 'ln(x)'){
        let num = Number(input.value);
        let result = Math.log(num);
        string = result.toString();
        input.value = string;
        }
        else if(e.target.innerHTML.trim() == '√x'){
        let num = Number(input.value);
        let result = Math.sqrt(num);
        string = result.toString();
        input.value = string;
        }
        else if(e.target.innerHTML.trim() == 'π'){
        string = Math.PI.toString();
        input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }

    })
});
let toggleButton = document.getElementById('toggleButton');
let extraOptions = document.getElementById('extraOptions');
 toggleButton.addEventListener("click",()=>{
        extraOptions.classList.toggle("show");
        console.log(extraOptions.className);
       toggleButton.innerHTML = extraOptions.classList.contains("show")? "▲" : "▼";
 });

    document.addEventListener("keydown",function(e){
    let key = e.key;
        if(key == "Enter"){
            key = "=";
        }
        if(key == "Backspace"){
            key = "DEL";
        }
        if(key == "Escape"){
            key = "AC";
        }        
         buttons.forEach(button =>{
            if(button.textContent == key){
                 button.click();
                 console.log("Pressed:", key);
                 console.log("Matched:", button.textContent);
            }
        });
    });
