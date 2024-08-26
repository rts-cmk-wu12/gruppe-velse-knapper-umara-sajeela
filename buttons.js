const buttonBackgroundChange = document.querySelector('#button_background_change');
const buttonAlert = document.querySelector('#button-alert')
const body = document.body;

buttonBackgroundChange.addEventListener('click',colorChange )
 buttonAlert.addEventListener('click', showAlert)

function colorChange(){
body.style.backgroundColor = 'hotpink'


}
function showAlert(){
    alert('hello world')
}

/************************************************ */


document.addEventListener('DOMContentLoaded', function() {
    const themeButton = document.getElementById('themeButton');
    const body = document.body;
  
    themeButton.addEventListener('click', function() {
      if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        themeButton.textContent = 'Switch to Dark Theme';
      } else {
        body.classList.add('dark-theme');
        themeButton.textContent = 'Switch to Light Theme';
      }
    });
  });
  /******************************************************* */

 