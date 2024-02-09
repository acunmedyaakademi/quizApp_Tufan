const htmlButton = document.querySelector('.html-button');
const cssButton = document.querySelector('.css-button');
const jsButton = document.querySelector('.js-button');
const acsButton = document.querySelector('.acs-button');

const sorular = document.querySelector('#question');

const optionA = document.querySelector('#a-secenek');
const optionB = document.querySelector('#b-secenek');
const optionC = document.querySelector('#c-secenek');
const optionD = document.querySelector('#d-secenek');

let tıklamaSayısı = 0;

const reaction = document.querySelector('#reaction-btn');
const tepki = document.querySelector('#reactionBTN');

reaction.addEventListener('click', () => {
  if (tıklamaSayısı === 0) {
    tepki.style.display='block'
    tepki.textContent="cevap veriniz"
    tıklamaSayısı++;
  }
});



let soruIndex = 0; 

const data="data.json";
function veriler(){
    fetch(data)
            .then(response=>response.json())
            .then(data=>{
                optionA.textContent= data.HTMLquiz.sorular[soruIndex].secenekler[0]
                optionB.textContent= data.HTMLquiz.sorular[soruIndex].secenekler[1]
                optionC.textContent= data.HTMLquiz.sorular[soruIndex].secenekler[2]
                optionD.textContent= data.HTMLquiz.sorular[soruIndex].secenekler[3]
                sorular.textContent= data.HTMLquiz.sorular[soruIndex].soru
         });
}


function nextQuestion(){
    soruIndex++
    veriler();
}


function dogruCevabiKontrolEt(cevap) {
    fetch(data)
        .then(response => response.json())
        .then(veri => {
            const dogruCevap = veri.HTMLquiz.sorular[soruIndex].dogru_secenek;
            if (cevap === dogruCevap) {
                alert("Doğru cevap!");
                nextQuestion()
                tepki.textContent="selam"
            } else {
                alert("Yanlış cevap!");
                veriler()
                tepki.style.display='block'
            }
        })
}

optionA.addEventListener('click', () => dogruCevabiKontrolEt(optionA.textContent));
optionB.addEventListener('click', () => dogruCevabiKontrolEt(optionB.textContent));
optionC.addEventListener('click', () => dogruCevabiKontrolEt(optionC.textContent));
optionD.addEventListener('click', () => dogruCevabiKontrolEt(optionD.textContent));


veriler();
