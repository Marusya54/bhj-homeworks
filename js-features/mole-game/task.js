let holes = document.getElementsByClassName('hole');
let killed = document.getElementById('dead');
let miss = document.getElementById('lost');

for(let i = 0; i < holes.length; i++){
  holes[i].addEventListener('click', () =>{

    if(holes[i].classList.contains('hole_has-mole')){
      killed.textContent++
      if(killed.textContent === '10'){
        killed.textContent = '0';
        miss.textContent = '0';
        alert('Победа');
}
}
      else{
            miss.textContent++;
            if(miss.textContent === '5'){
                killed.textContent = '0';
                miss.textContent = '0';
                alert('Вы проиграли');
            }
        }
    });
}