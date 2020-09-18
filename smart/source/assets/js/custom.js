const homeBtn = document.querySelector(".homeBtn");
// const anchors = Array.from(document.querySelectorAll(".login-type a"));
const body = document.querySelector('body');


const goHome = () => {
  return (window.location.href = "index.html");
};

if(body.classList.contains("test")){ 
    homeBtn.addEventListener("click", goHome);
}

