
// const changeBackGround = document.querySelector(".change_bg");
// changeBackGround.addEventListener("click", function(){
//     const curColour = document.body.style.backgroundColor;
//     document.body.style.backgroundColor = curColour === 'grey' ? 'green' : 'grey';
// });
const name = document.querySelector(".ask_user");
const btn = document.querySelector(".change_bg");
const discountBtn = document.querySelector('.ten-percent');
const originPrice = document.querySelector('.discount');

function random(number) {
  return Math.floor(Math.random() * number);
}

function bgChange() {
  const rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = rndCol;
}

btn.addEventListener("click", bgChange);

const userName = document.querySelector('.userName');

function askName() {
  const personAnswer = prompt("Please enter your name");
  if (personAnswer === "") {
    userName.innerHTML = "Hello Stranger!";
  } else {
    userName.innerHTML = "Hello " + personAnswer + "! How are you today?";
  }
}
name.addEventListener("click", askName);

function makeDiscount(number) {
    return number - (number * 0.10);
}

discountBtn.addEventListener('click', () => {
    const originValue = Number(originPrice.innerHTML);
    const result = makeDiscount(originValue);
    originPrice.innerHTML = result;
    setTimeout(() => {
        discountBtn.style.display = 'none';
    }, 500) 
})


function toggleImage() {
    var img1 = "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F992893220%2F0x0.jpg";
    var img2 = "https://cdn1.expertreviews.co.uk/sites/expertreviews/files/styles/er_main_wide/public/2019/08/best_online_clothes_shops.jpg?itok=M3soL5rF";
    
    var imgElement = document.getElementById('toggleImage');
    
 
    imgElement.src = (imgElement.src === img1)? img2 : img1;
    
 }

 
