document.addEventListener('DOMContentLoaded', ()=> {

   let typed = new Typed('#typed6', {
      strings: [ `WELCOME: CONSOLE TO BATTLEQUEST<br><br><br>Here you go to get a spectacular journey!<br>
                  But first select your character TO BEGIN THE JOURNEY<br><br>^1000 
                  npm install CONSOLE: BATTLEQUEST^1000<br> 
                  installing components...^1000<br>
                  [--------------------------------------------------]^200 100% <br>
                  [--------------------------------------------------]^200 100% <br>
                  [--------------------------------------------------]^200 100% <br>
                  [--------------------------------------------------]^200 100% <br>
                  [--------------------------------------------------]^200 100% <br>
                  download characters...^1000<br>
                  [--------------------------------------------------]^200 100% <br>
                  download creatures...^1000<br>
                  [--------------------------------------------------]^200 100% <br>
                  download chapters...^1000<br>
                  [--------------------------------------------------]^200 100% <br>
                  Fetching from source... "^1000<br><br><br>
                  PLEASE PRESS ENTER....`],
      typeSpeed: 2,
      loop: false,
      waitUntilVisible: true
      
    })

})

const evtEnter = document.querySelector('body')

function validar(evtEnter) {
  tecla = (document.all) ? evtEnter.keyCode : evtEnter.which;
  if (tecla==13){
   window.location.href = "file:///home/andres/Desktop/wyncode/c35/the-fabulous-js/weekendproject/selectChar.html" ;
  }
}

evtEnter.addEventListener('keyCode', validar)