// Add automatic date-change of copyright
let date = new Date();
let year = date.getFullYear();
let yearSpan = document.getElementById("year");
yearSpan.innerHTML = year;
// Add event listeners for links, that lead to so far non-existing pages
otherPageLinks = document.getElementsByClassName("other_page_link");
for (let i = 0; i < otherPageLinks.length; i++) {
  otherPageLinks[i].addEventListener("click", function (event) {
    event.preventDefault();
    alert("This page is still in development. Please come back later.");
  });
}
// Add translation feature

let languageButton1 = document.getElementById("language1");
let languageButton2 = document.getElementById("language2");
let dropdownBtnTitle = document.getElementById("dropdown-btn_title");

let languages = ["en", "cz", "de"];
let activeLanguage = languages[0];

function language1_clicked() {
  languageButton1.innerHTML = activeLanguage.toUpperCase();
  dropdownBtnTitle.innerHTML = languages[1].toUpperCase();
  [languages[0], languages[1]] = [languages[1], languages[0]];
  activeLanguage = languages[0];
  translate();
}

function language2_clicked() {
  languageButton2.innerHTML = activeLanguage.toUpperCase();
  dropdownBtnTitle.innerHTML = languages[2].toUpperCase();
  [languages[0], languages[2]] = [languages[2], languages[0]];
  activeLanguage = languages[0];
  translate();
}

function translate() {
  console.log(activeLanguage);
}
