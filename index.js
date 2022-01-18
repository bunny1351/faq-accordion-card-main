var ques = document.getElementsByClassName("ques");
let down = document.getElementById("down");
let i;

for (i = 0; i < ques.length; i++) {
  ques[i].addEventListener("click", function () {

    this.classList.toggle("active");

    let ans = this.nextElementSibling;
    if (ans.style.display === "block") {
      ans.style.display = "none";
      down[i].style.transform = "rotateZ(360deg)";

    } else {
      ans.style.display = "block";
      down[i].style.transform = "rotateZ(180deg)";

    }
  });
}
