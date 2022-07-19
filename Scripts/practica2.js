let inputMail = document.getElementsByClassName("newletter");
localStorage.setItem("newletter", inputMail.value);

let storedValue = localStorage.getItem("newletter")
