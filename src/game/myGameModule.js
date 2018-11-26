/* eslint-disable no-alert */
/* eslint-disable no-undef */
export default () => {
  const TO_FIND = Math.floor(Math.random() * 50 + 1);
  alert('Podaj liczbę od 0 do 50');

  let numb = prompt('Podaj liczbę: ');

  while (TO_FIND !== numb) {
    if (numb > TO_FIND) {
      numb = prompt('Podana liczba była za duża... : ');
    } else if (numb < TO_FIND) {
      numb = prompt('Podana liczba była za mała... : ');
    } else {
      alert('Zgadłeś!');
    }
  }
};
