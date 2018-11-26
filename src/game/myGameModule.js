/* eslint-disable no-alert */
/* eslint-disable no-undef */
let numb; let i = 0;
const TO_FIND = Math.floor(Math.random() * 50 + 1);


export default () => {
  alert('Podaj liczbę od 0 do 50');

  numb = prompt('Podaj liczbę: ');

  while (TO_FIND !== numb) {
    if (numb > TO_FIND) {
      numb = prompt('Podana liczba była za duża... : ');
    } else if (numb < TO_FIND) {
      numb = prompt('Podana liczba była za mała... : ');
    } else {
      alert(`Zgadłeś! za ${i} razem`);
      return 0;
    }
    i += 1;
  }
};
