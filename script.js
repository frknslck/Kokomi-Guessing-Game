const randomnum = Math.trunc(Math.random() * 100);
let life = 5;
let bottom = 1;
let topp = 100;
let closer;
let further;
let input = document.querySelector(".guess-input");

console.log(randomnum);

document.querySelector('.guess-retry').addEventListener("click", function(){
    window.location.reload()
})

document.querySelector('.guess-input').focus();
document.querySelector(".guess-check").addEventListener("click", function (){
    let answer = document.querySelector('.guess-input').value;
    document.querySelector('.guess-input').focus();
    if (answer < 0 || answer > 100){12
        document.querySelector(".info-txt").classList.add("hide");
        document.querySelector(".info-warning").classList.remove("hide");
    }
    else{
        document.querySelector(".info-txt").classList.remove("hide");
        document.querySelector(".info-warning").classList.add("hide");
        if (answer == randomnum) {
            document.querySelector(".info-txt").innerText = `Congratulations Adventurer! You guessed the number correct!`;
            document.querySelector(".reaction-txt").innerText = "Kokomi is so proud of you!";
            document.querySelector(".reaction-img").src = "./img/right.png"
            document.querySelector(".guess-input").classList.add("hide");
            document.querySelector(".guess-check").classList.add("hide");
            document.querySelector(".life").innerText = life-=1;
        }
        else if (life == 1){
            document.querySelector(".info-txt").innerText = `Oh... So you couldn't get the number right... Maybe another time...`;
            document.querySelector(".reaction-txt").innerText = "Kokomi is disappointed...";
            document.querySelector(".reaction-img").src = "./img/wrong.png";
            document.querySelector(".guess-input").classList.add("hide");
            document.querySelector(".guess-check").classList.add("hide");
            document.querySelector(".life").innerText = life-=1;
        }
        else if (answer > randomnum){
            topp = answer;
            if (answer - randomnum < randomnum - bottom) {
                document.querySelector(".info-txt").innerText = `So close! Try lower!`;
                document.querySelector(".reaction-img").src = "./img/closer.png";
            } else {
                document.querySelector(".info-txt").innerText = `That's too high! Try lower!`;
                document.querySelector(".reaction-img").src = "./img/farther.png";
            }
            document.querySelector(".reaction-txt").innerText = `Kokomi pointing out: number is between ${bottom} and ${topp}!`;
            life-=1;
            document.querySelector(".life").innerText = life;
            document.querySelector(".guess-input").value = "";
        }
        else if (answer < randomnum){
            bottom = answer;
            if (randomnum - answer < topp - randomnum) {
                document.querySelector(".info-txt").innerText = `So close! Try higher!`;
                document.querySelector(".reaction-img").src = "./img/closer.png";
            } else {
                document.querySelector(".info-txt").innerText = `That's too low! Try higher!`;
                document.querySelector(".reaction-img").src = "./img/farther.png";
            }
            document.querySelector(".reaction-txt").innerText = `Kokomi pointing out: number is between ${bottom} and ${topp}!`;
            life-=1;
            document.querySelector(".life").innerText = life;
            document.querySelector(".guess-input").value = "";
        }
    }
});

input.addEventListener("keydown", function(e) {
    if (e.keyCode == 13){
        document.querySelector(".guess-check").click();
    }
});
