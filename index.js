function showTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let session = "AM";
  session = h >= 12 ? "PM" : "AM";
  h = h === 0 ? 12 : h > 12 ? h - 12 : h;

  if (h < 10) h = "0" + h;

  if (m < 10) m = "0" + m;

  let time = h + ":" + m + " ";
  document.getElementById("HSCclock").innerText = time;
  document.getElementById("HSCsession").innerText = session;
  setTimeout(showTime, 1000);
}

function getQuote() {
  let quotes = [
    "Wash your hands often.",
    "Put distance between yourself and others.",
    "Don't touch your face.",
    "If your face itches think about something else.",
    "Cover coughs and sneezes.",
    "Clean and disinfect surfaces often.",
    "Stay hydrated.",
    "Don't forget your mask."
  ];
  let quoteIndex = Math.floor(Math.random() * 8);
  document.getElementById("HSCquote").innerText = quotes[quoteIndex];
}

function setColors() {
  // myColors: [Blue, Pink, Yellow]
  let myColors = ["#009BDF", "#ED0080", "#FFD93F"];
  let bgColorIndex = Math.floor(Math.random() * 3);
  let clockColorIndex, quoteColor, headerTextColor;

  if (bgColorIndex === 0 || bgColorIndex === 1) {
    clockColorIndex = 2;
    quoteColor = "white";
    headerTextColor = "black";
  } else {
    clockColorIndex = 1;
    quoteColor = "black";
    headerTextColor = "white";
  }

  document.body.style.backgroundColor = myColors[bgColorIndex];
  document.getElementById("HSCclockDisplay").style.color =
    myColors[clockColorIndex];
  document.getElementById("HSCquote").style.color = quoteColor;
  document.getElementById("header").style.backgroundColor =
    myColors[clockColorIndex];
  document.getElementById("header").style.color = headerTextColor;
  document.getElementById("bottom").style.backgroundColor =
    myColors[clockColorIndex];
  let mainButtons = document
    .getElementById("mainIcons")
    .getElementsByTagName("button");
  for (let i = 0; i < mainButtons.length; i++) {
    mainButtons[i].style.backgroundColor = myColors[clockColorIndex];
    mainButtons[i].style.color = quoteColor;
  }
  let bottomButtons = document
    .getElementById("bottom")
    .getElementsByTagName("button");
  for (let i = 0; i < bottomButtons.length; i++) {
    bottomButtons[i].style.backgroundColor = myColors[bgColorIndex];
    bottomButtons[i].style.color = quoteColor;
  }
}

showTime();
getQuote();
setColors();
