const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".l-button");
const noBtn = document.querySelector(".r-button");

yesBtn.addEventListener("click", () => {
  question.innerText = "I love you too! 🥰";
  gif.style.backgroundImage =
    "url(https://media.tenor.com/wkzCX9s5kxQAAAAi/0906-peacegoma.gif)";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const x = window.innerWidth - noBtnRect.width;
  const y = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * x);
  const randomY = Math.floor(Math.random() * y);

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});
