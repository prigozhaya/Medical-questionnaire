const today = document.getElementById("today-date");
const branch = document.getElementById("branch");
const fio = document.getElementById("FIO");
const brdate = document.getElementById("brdate");
const resultBranch = document.getElementById("result-branch");
const resultFio = document.getElementById("result-FIO");
const resultBrdate = document.getElementById("result-brdate");
const bloodTest = document.getElementById("blood-test");
const cholesterol = document.getElementById("cholesterol");
const glucose = document.getElementById("glucose");
const antigen = document.getElementById("antigen");
const hiddenBlood = document.getElementById("hidden-blood");
const fluorography = document.getElementById("fluorography");
const forWomen = document.getElementById("for-women");
const urology = document.getElementById("urology");
const bloodCirculation = document.getElementById("blood-circulation");
const extra = document.getElementById("extra");
const checkButton = document.getElementById("check");
const printScreen = document.getElementById("print");
const extraDiseases = document.getElementById("extra-diseases");
const chronicDiseases = document.getElementsByName('chronic-diseases');
let radios = document.querySelectorAll('input[type="radio"]');

const options = {month: "numeric", day: "numeric", year: "numeric"};

let answer = {
    "chronic-diseases":"",
    "heart-diseases1":"",
    "heart-diseases2":"",
    "heart-diseases3":"",
    "heart-diseases4":"",
    "heart-diseases5":"",
    "heart-diseases6":"",
    "heart-diseases7":"",
    "heart-diseases8":"",
    "diabetes-diseases1":"",
    "diabetes-diseases2":"",
    "diabetes-disease3":"",
    "diabetes-diseases4":"",
    "oncological-diseases1":"",
    "oncological-diseases2":"",
    "oncological-diseases3":"",
    "oncological-diseases4":"",
    "oncological-diseases5":"",
    "oncological-diseases6":"",
    "oncological-diseases7":"",
    "oncological-diseases8":"",
    "lung-diseases1":"",
    "lung-diseases2":"",
    "lung-diseases3":"",

}; 

//date------------------------------------------------------------------------
function showDate() {
    var dateNow = new Date();
    var day = dateNow.toLocaleDateString("ru", options);

    today.innerHTML = day;
  }
  showDate();


//local storage----------------------------------------------------------------------
/*function setLocalStorage() {
    localStorage.setItem("city", city.value);
    localStorage.setItem("todoListModul", todoListModul.checked ); 
  }
  
  window.addEventListener("beforeunload", setLocalStorage);
  
  function getLocalStorage() {
  
    if (localStorage.getItem("tag")) {
      tag.value = localStorage.getItem("tag");
    }

    if(localStorage.getItem('toDoList')){
      taskList.innerHTML=localStorage.getItem('toDoList')
    }
  
    if (localStorage.getItem('Radio')) {
      let Radio = localStorage.getItem('Radio');
      document.querySelector('input[name="image-source"][value="' + Radio + '"]').setAttribute('checked', 'checked');
    }
  }
  
  window.addEventListener("load", getLocalStorage);
*/

//save answers------------------------------------
for (let i=0; i<radios.length; i++) {
    radios[i].addEventListener("click", function () {
        answer[radios[i].name] = radios[i].value;
        console.log(answer)
  
    });
  }

//results----------------------------------------------------------

function innerResults(point,value){
    point.innerHTML = value
}

function checkAnswer(){
    var br = brdate.value.split('-');

    var now = new Date();
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    var dob = new Date(br[0], br[1], br[2]);
    var dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
    var age = today.getFullYear() - dob.getFullYear();
   
    if (today < dobnow) {
      age = age-1;
    }
    

    innerResults(bloodTest,"");
    innerResults(cholesterol,"");
    innerResults(glucose,"");
    innerResults(antigen,"");
    innerResults(hiddenBlood,"");
    innerResults(fluorography,"");
    innerResults(forWomen,"");
    innerResults(urology,"");
    innerResults(bloodCirculation,"");

    innerResults(extra,extraDiseases.value);
    innerResults(resultBranch,branch.value);
    innerResults(resultFio,fio.value);
    innerResults(resultBrdate,`${br[2]}.${br[1]}.${br[0]} (Возраст: ${age})`);
   

for (let i=0; i<radios.length; i++) {

    if(i >= 0 && i <= 2 || i >= 39 && i <= 62){
        if(radios[i].checked===true && radios[i].value==="yes" || radios[i].checked===true && radios[i].value==="difficult"){
            innerResults(bloodTest,"Общий анализ крови, общий анализ мочи;")
            
        }
    }

    if(i >= 3 && i <= 32 || i >= 36 && i <= 38 || i >= 63 && i <= 65){
        if(radios[i].checked===true && radios[i].value==="yes" || radios[i].checked===true && radios[i].value==="difficult"){
            innerResults(cholesterol,"Электрокардиограмма, анализ крови с определением уровня общего холестерина;")
            
        }
    }

    if(i >= 12 && i <= 14 || i >= 21 && i <= 23 || i >= 27 && i <= 38){
        if(radios[i].checked===true && radios[i].value==="yes" || radios[i].checked===true && radios[i].value==="difficult"){
            innerResults(glucose,"Анализ крови с определением глюкозы крови;")
        }
    }

    if(i >= 39 && i <= 47 || i >= 54 && i <= 56 || i >= 60 && i <= 62){
        if(radios[i].checked===true && radios[i].value==="yes" || radios[i].checked===true && radios[i].value==="difficult"){
            innerResults(antigen,"Анализ крови с определением простатспецифического антигена (для мужчин);");
            innerResults(hiddenBlood,"Анализ кала на скрытую кровь;");
        }
    }

    if(i >= 39 && i <= 71){
        if(radios[i].checked===true && radios[i].value==="yes" || radios[i].checked===true && radios[i].value==="difficult"){
            innerResults(fluorography,"Рентгенпрофилактическое исследование органов грудной клетки;")
        }
    }

    if(i >= 39 && i <= 50 || i >= 54 && i <= 62){
        if(radios[i].checked===true && radios[i].value==="yes" || radios[i].checked===true && radios[i].value==="difficult"){
            innerResults(forWomen,"Медицинский осмотр в смотровом кабинете с выполнением цитологического исследования (для женщин);")
        }
    }

    if(i >= 57 && i <= 59){
        if(radios[i].checked===true && radios[i].value==="yes" || radios[i].checked===true && radios[i].value==="difficult"){
            innerResults(urology,"Консультация врача – акушера-гинеколога (для женщин) или врача-уролога (для мужчин);")
            console.log(radios[i].name)
        }
    }

    if(i >= 27 && i <= 32 || i >= 63 && i <= 65){
        if(radios[i].checked===true && radios[i].value==="yes" || radios[i].checked===true && radios[i].value==="difficult"){
            innerResults(bloodCirculation,"Имеется фактор риска развития болезни системы кровообращения;")
            console.log(radios[i].name)
        }
    }
}
  
}

checkAnswer();

checkButton.addEventListener("click",checkAnswer);



function clearnote() {
    var printdiv = document.getElementById('printscreen').innerHTML;
console.log(extraDiseases.value)
    var windowPrint = window.open('', '', 'left=50,top=50,width=800,height=640,toolbar=0,scrollbars=1,status=0');
    windowPrint.document.write(printdiv);
    windowPrint.document.close();
    windowPrint.focus();
    windowPrint.print();
    windowPrint.close();
}

printScreen.addEventListener("click",clearnote);