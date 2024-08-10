//Light-Phoneixx
//Learn-More-Js

//Methode-1
//=======================================================================


document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    let isDarkMode = false;
    themeToggle.addEventListener("click", function() {
        isDarkMode = !isDarkMode;
        if (isDarkMode) {
            document.body.classList.add("dark-mode");
            themeIcon.classList.replace("bx-moon", "bx-sun");
        }else {
            document.body.classList.remove("dark-mode");
            themeIcon.classList.replace("bx-sun", "bx-moon");
        }
    });
});

//=======================================================================
//Methode-2


// window.onload = function() {
//     const themeToggle = document.getElementById("theme-toggle");
//     const themeIcon = document.getElementById("theme-icon");
//     let isDarkMode = false;

//     if(themeToggle) {
//         themeToggle.addEventListener("click", function() {
//             isDarkMode = !isDarkMode;
//             if(isDarkMode) {
//                 document.body.classList.add("dark-mode");
//                 themeIcon.classList.replace("bx-moon", "bx-sun");
//             }else {
//                 document.body.classList.remove("dark-mode");
//                 themeIcon.classList.replace("bx-moon", "bx-sun");
//             }
//         });
//     }else {
//         console.log("Element #theme-toggle not found.");
//     }
// };