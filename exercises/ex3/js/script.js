let letterList = [];
let currentShow = null;
let numletters = 0;
let lastLetterVal;
let newSection;
let content = document.getElementById("content-area");
document.getElementById("box-btn").addEventListener("click", function () {
  lastLetterVal = "A".charCodeAt(0) + Math.floor(numletters / 2);
  letterList.push(
    ...[
      String.fromCharCode(lastLetterVal + (numletters++ % 2 == 0 ? 0 : 1)),
      String.fromCharCode(lastLetterVal + (numletters++ % 2 == 0 ? 0 : 1)),
      String.fromCharCode(lastLetterVal + (numletters++ % 2 == 0 ? 0 : 1)),
    ].sort(() => 0.5 - Math.random())
  );
  for (let i = 0; i < 3; i++) {
    newSection = document.createElement("section");
    newSection.style.width = content.lastElementChild
      ? `calc(${content.lastElementChild.style.width} + 20px)`
      : "80px";
    newSection.style.height = content.lastElementChild
      ? `calc(${content.lastElementChild.style.height} + 20px)`
      : "80px";
    newSection.id =
      "box-" + document.getElementById("content-area").children.length;
    newSection.addEventListener("click", function (e) {
      e.target.innerHTML = e.target.innerHTML
        ? ""
        : "" + letterList[parseInt(e.target.id.split("-")[1])];
      if (!currentShow) {
        currentShow = e.target;
        return;
      }
      if (e.target === currentShow) {
        currentShow = null;
        return;
      }
      if (currentShow.innerHTML !== e.target.innerHTML) {
        currentShow.innerHTML = "";
        e.target.innerHTML = "";
        currentShow = null;
        return;
      }
      currentShow.style.background = "gray";
      e.target.style.background = "gray";
      currentShow.parentNode.replaceChild(
        currentShow.cloneNode(true),
        currentShow
      );
      e.target.removeEventListener("click", arguments.callee);
      currentShow = null;
    });
    content.appendChild(newSection);
  }
});
