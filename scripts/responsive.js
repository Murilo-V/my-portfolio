const width800 = window.matchMedia("(max-width: 800px)");
skillsMediaQueries(width800);
width800.addListener(skillsMediaQueries);

function skillsMediaQueries(width800) {
    const skills = document.getElementById('hard-skills');
    if (width800.matches) { 
        skills.innerHTML = '<h2 class="mb-3 p-0">HABILIDADES</h2>';
        skills.innerHTML += '<div class="d-flex align-items-center"><span class="javascript mr-5"></span><span class="html mr-5"></span><span class="css"></span></div>';
        skills.innerHTML += '<div class="d-flex align-items-center"><span class="c-sharp mr-5"></span><span class="php mr-5"></span><span class="mysql"></span></div>';
        skills.innerHTML += '<div class="d-flex align-items-center"><span class="sqlserver mr-5"></span><span class="prototipos mr-5"></span><span class="photoshop"></span></div>';
        skills.innerHTML += '<div class="d-flex align-items-center"><span class="after-effects mr-5"></span><span class="illustrator mr-5"></span><span class="cinema4d"></span></div>';
    } 
  }
  
  const mobileReceptionX = window.matchMedia("(max-width: 650px)");
  const mobileReceptionY = window.matchMedia("(max-height: 1200px)");

  changeReception(mobileReceptionX, mobileReceptionY);
  mobileReceptionX.addListener(changeReception);

  function changeReception(mobileReceptionX, mobileReceptionY) {
        const imgReception = document.getElementById('imgReception');
        if (mobileReceptionX.matches) {
            if (mobileReceptionY.matches) {
                imgReception.innerHTML = '<img src="images/mobile-reception.svg" class="img-fluid m-0 p-0" alt="Letras do nome Murilo ao redor de um Logo.">'
            }
            
        }
       
  }

