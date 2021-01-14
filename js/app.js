const answer = document.getElementById('answer');
const calculateButton = document.getElementById('calculate');
const temp = document.getElementById('temp');


function convert(celcius) {
  let cTemp = celcius;
  let far = (cTemp * 9/5) + 32;
  return far;
}

calculateButton.addEventListener('click', () => {
  answer.innerText = convert(temp.value) + '°F';
});