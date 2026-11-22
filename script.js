// WEBSITE WELCOME MESSAGE 
 
window.addEventListener("load", function() { 
 
    console.log( 
        "Welcome to Prempeh College Laboratories!" 
    ); 
 
}); 
 
 
// SCROLL TO TOP BUTTON
let topButton = document.createElement("button"); 
 
topButton.innerHTML = "↑"; 
 
topButton.id = "topButton"; 
 
document.body.appendChild(topButton); 
 
 
// BUTTON STYLE 
 
topButton.style.position = "fixed"; 
 
topButton.style.bottom = "25px"; 
 
topButton.style.right = "25px"; 
 
topButton.style.padding = "12px 18px"; 
 
topButton.style.backgroundColor = "#07552b"; 
 
topButton.style.color = "white"; 
 
topButton.style.border = "none"; 
 
topButton.style.borderRadius = "5px"; 
 
topButton.style.cursor = "pointer"; 
 
 
// BUTTON FUNCTION 
 
topButton.addEventListener("click", function() { 
 
    window.scrollTo({ 
 
        top: 0, 
 
        behavior: "smooth" 
 
    }); 
 
}); 