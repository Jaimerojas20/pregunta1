const yesBtn = document.querySelector("#yesBtn");

yesBtn.addEventListener("click",function () {
    alert("sabias que ibas a decir que si JAJAJAJ , le dedico esta cancion corazón: https://www.youtube.com/watch?v=OuSNzkdyd-8&ab_channel=angeelsauro")
});

const noBtn = document.querySelector("#noBtn");

noBtn.addEventListener("mouseover",function() {
    const ramdomx = parseInt(Math.random()*100);
    const ramdomy = parseInt(Math.random()*100);
    noBtn.style.setProperty("top" ,ramdomy+"%");
    noBtn.style.setProperty("left",ramdomx+"%");
    noBtn.style.setProperty("transform",`translate(-${ramdomx}$,-${ramdomy}%,)`);
})