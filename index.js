// Add event listeners for links, that lead to so far non-existing pages
otherPageLinks = document.getElementsByClassName("other_page_link");
for (let i = 0; i < otherPageLinks.length; i++) {
  otherPageLinks[i].addEventListener("click", function (event) {
    event.preventDefault();
    alert("This page is still in development. Please come back later.");
  });
}
// Add event listeners to language buttons, while translation is not yet available
languageButtons = document.getElementsByClassName("language_button");
for (let i = 0; i < languageButtons.length; i++) {
  languageButtons[i].addEventListener("click", function (event) {
    event.preventDefault();
    alert("Language translation still in development.");
  });
}
