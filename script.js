// Смена титулов в about

// Объявление основных переменных функции
let dignityList = ["Front-end developer", "React developer", "Job seeker"];
let dignityIndex = 0;
let isDeleting = false;
let visibleText = "";

// Функция, которая будет с определённой периодичностью менять текст
function tick() {
  let fullText = dignityList[dignityIndex];
  let updatedText = isDeleting
    ? fullText.substring(0, visibleText.length - 1)
    : fullText.substring(0, visibleText.length + 1);
  visibleText = updatedText;
  let changeSpeed = 250;

  if (isDeleting) {
    changeSpeed = 100;
  }
  if (isDeleting && updatedText == "") {
    isDeleting = false;
    dignityIndex == 2 ? dignityIndex = 0 : dignityIndex = dignityIndex + 1;
  }
  if (!isDeleting && updatedText == fullText) {
    changeSpeed = 1000;
    isDeleting = true;
  }

  // Задаём изменённую строку как текст в нужном элементе
  document.getElementById("currentDignity").innerText = visibleText+"|"
  // Планирование нового вызова. Можно было бы делать через setInterval снаружи функции, 
  // но тогда не получится менять  периодичность вызова (changeSpeed)
  setTimeout(tick, changeSpeed)
}

tick()
