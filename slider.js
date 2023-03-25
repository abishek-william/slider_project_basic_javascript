const slideRight = document.querySelector(".right");
const slideLeft = document.querySelector(".left");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottomDiv = document.querySelector('.bottom');

let slideNum = 1;
const imagesLength = images.length;

for(i = 0; i < imagesLength; i++){
    const div = document.createElement('div');
    div.className = 'button';
    bottomDiv.appendChild(div);
}

const buttons = document.querySelectorAll('.button');
buttons[0].style.backgroundColor = 'black'


const resetBg = () => {
    buttons.forEach((button) => {
        button.style.backgroundColor = 'transparent';
    })
}

buttons.forEach((button , i) => {
    button.addEventListener('click' , () => {
        resetBg();
        slider.style.transform = `translateX(-${i * 300}px)`;
        slideNum = i + 1;
        button.style.backgroundColor = 'black'
    })
})

const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNum * 300}px)`;
  slideNum++;
};

const prevSlide = () => {
    slider.style.transform = `translateX(-${(slideNum - 2) * 300}px)`;
    slideNum--;
}

const getFirstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNum = 1;
};

const getLastSlide = () => {
    slider.style.transform = `translateX(-${(imagesLength - 1) * 300}px)`;
    slideNum = imagesLength;
}

const setColor = () => {
    resetBg();
    buttons[slideNum - 1].style.backgroundColor = 'black';
}

slideRight.addEventListener("click", () => {
  slideNum < imagesLength ? nextSlide() : getFirstSlide();
  setColor();
});

slideLeft.addEventListener("click", () => {
  slideNum > 1 ? prevSlide() : getLastSlide();
  setColor();
});




