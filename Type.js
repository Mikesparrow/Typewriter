let textArray=['WebDesigner', 'WebDeveloper', 'ForeignLanguagesExpert'];
let count=0;
let index=0;
let currenText='';
let letter='';

(function text(){
    if(count===textArray.length){
        count=0;
        
    }
    currenText=textArray[count];
    letter=currenText.slice(0,++index)

    document.querySelector(".type-text").textContent=letter;

    if(letter.length===currenText.length){
        index=0;
        count++;
    }
    setTimeout(text,300);
    
})();