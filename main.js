let array = [2,7,13,14,19]
let count = 0;
let i = 0;
let score = 0;



function teste(id){
    // while(i <= array.length){
        
        
            if(id == array[i]){
            document.getElementById(id).style.backgroundColor = "green";
            document.getElementById(id).style.color = "white";
            score = score + 10;
            document.querySelector('h1').innerHTML = `Pontuação: ${score}`
            }else{
                document.getElementById(array[i]).style.backgroundColor = "green";
                document.getElementById(array[i]).style.color = "white";
                document.getElementById(id).style.backgroundColor = "red";
                document.getElementById(id).style.color = "white";
            }
        
        
        // console.log(i)

        document.querySelector('div.final_score h2').innerHTML = `Sua Pontuação foi: ${score}/${array.length * 10}`

        document.querySelectorAll(`div#box${i+1} .buttons`).forEach(element => {
            element.setAttribute("disabled", "disabled");
            // if(id == n){
                // document.querySelectorAll(`div#box${i} ul.options li button#${id}`).style.backgroundColor = "green";
                //  document.getElementById(id).style.color = "white";
                //  score = score + 10;
                //  document.querySelector('h1').innerHTML = `Pontuação: ${score}`
            //  }else{
                //  document.getElementById(n).style.backgroundColor = "green";
                //  document.getElementById(n).style.color = "white";
                //  document.getElementById(id).style.backgroundColor = "red";
                //  document.getElementById(id).style.color = "white";
            //  }
            
        });
        i++

        
    }
      
//  }

 function nextQuestion(){
    document.getElementById(`box${count}`).classList.add('hidden');
    document.getElementById(`box${count + 1}`).classList.remove('hidden');
    count++;
    // if(i == 2){
    //     i++;
    // }

   document.querySelectorAll(`div#box${i} ul.options li button`).forEach(element => {
       element.removeAttribute("disabled", "disabled");
     });
     
}
 



    

