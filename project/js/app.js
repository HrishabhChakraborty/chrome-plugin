//console.log('hello there everyone!!')

/*let search = document.getElementById('Textarea1');
search.addEventListener("input" , function(){

    console.log('Input read!!');

})*/

let insert = document.getElementById('Textarea1');
let text = document.createTextNode('Sententia powered Workspace');

insert.appendChild(text);
insert.setAttribute('class' , 'Textarea1');
insert.setAttribute('style' , 'border:2px solid #0086b3 ; height:150px');

/*insert.addEventListener("input", function () {

    

})*/