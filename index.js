

    let secretCode = "shams";
    let attempt = 0;
    let guessRight = false; 
    let attemptLeft = 3
       while (attempt < 3) {
        const guess = prompt("guess my secret code")
        if(guess == secretCode){
            alert("you are correct")
            guessRight = true
            break;
        }else{
            
            alert ("try again " + "you have "+ --attemptLeft +' attemptLeft ')
        }
        attempt++
    }
    if(!guessRight){
        document.write('GAME OVER!!!!!')
    


// const student = ['shola','tolu','shade','bisi','lola','ade','olu'];


  
// const content = document.querySelector(".content")
//     const ul = document.createElement("ul")
//     for(let i=0; i<student.length;i++ ) {
//         const firstLetter = student[i].substring(0,1).toUpperCase()
//         const remainingLetters  =student[i].substring(1,student.lenght).toLowerCase()
//         const capitalize = firstLetter + remainingLetters
//         const li = document.createElement("li")
//         const liTextNode = document.createTextNode(capitalize +' is out of stock')
//         if (student[i].length < 5){
//             li.style.color = 'green'
//             li.appendChild(liTextNode)
//             ul.appendChild(li);
//         }
//           else{
          
//             li.style.color ='red'
//             li.appendChild(liTextNode)
//             ul.appendChild(li);
//           }
      
            

//     ul.appendChild(li);
// }
// content.appendChild(ul)   

// const student = ['shola','tolu','shade','bisi','lola','ade','olu'];
// const content = document.querySelector('.content');
// const ul = document.createElement('ul');
// student.forEach((s) =>{
//     const li = document.createElement('li');
// const textNode = document.createTextNode(s)
// li.appendChild(textNode) 
// ul.appendChild(li)
// content.appendChild(ul)

}