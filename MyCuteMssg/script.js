const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

// Define a named function for the click event
function handleYesButtonClick() {
 
  
  
    // Update the source of the image with the ID "gif"
    gif.src = "https://media1.tenor.com/m/ob39YeT8nkgAAAAC/yeah-im-hungry-milk-and-mocha.gif";
  
  noBtn.style.display = "none";
  yesBtn.style.display = "none";

}
  // Add the named function as an event listener to the "Yes" button
  yesBtn.addEventListener("click", handleYesButtonClick);
  
  

// Define a named function for the mouseover event
function handleMouseover() {
    // Get the bounding rectangle of the "No" button
    const noBtnRect = noBtn.getBoundingClientRect();
  
    // Calculate the maximum X and Y coordinates within the window
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;
  
    // Generate random X and Y coordinates within the window
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
  
    // Set the new position of the "No" button using the random coordinates
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
  }
  
  // Add the named function as an event listener to the "No" button
  noBtn.addEventListener("mouseover", handleMouseover);
  