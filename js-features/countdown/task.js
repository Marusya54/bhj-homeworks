const timer = document.getElementById('timer').innerHTML;
let startingValue = Number(timer);

function countdowne() {
  document.getElementById('timer').innerHTML = startingValue--;

  if(document.getElementById('timer').innerHTML === '0') {
    clearInterval(i);
    alert('Вы выиграли в конкурсе');
};
};

const i = setInterval(countdowne, 1000);



