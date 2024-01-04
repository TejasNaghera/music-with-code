const sounds = ["A","B","C","D","E", "F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T" ,"U" ,"V","W","X","Y","Z"];

const buttons = document.getElementById("buttons");

const stopSounds = () => {
  sounds.forEach((sound) => {
    const currentSound = document.getElementById(sound);
    currentSound.pause();
    currentSound.currentTime = 0;
  }); 
};

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  btn.addEventListener("click", () => {
    stopSounds();
    document.getElementById(sound).play();
  });
  buttons.appendChild(btn);
});