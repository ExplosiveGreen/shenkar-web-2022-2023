let currentShow = null;
let currentLettersList = null;
let lastLetterVal;
let newSection;
let numletters = 0;
const content = $("#content-area");
$("#box-btn").on("click", function () {
  lastLetterVal = "A".charCodeAt(0) + Math.floor(numletters / 2);
  currentLettersList = [
    String.fromCharCode(lastLetterVal + (numletters++ % 2 == 0 ? 0 : 1)),
    String.fromCharCode(lastLetterVal + (numletters++ % 2 == 0 ? 0 : 1)),
    String.fromCharCode(lastLetterVal + (numletters++ % 2 == 0 ? 0 : 1)),
  ].sort(() => 0.5 - Math.random())
  for (let i = 0; i < 3; i++) {
    newSection =  $('<section>').css({
      'width': ( content.children().last().width() + 20 || 80 ) + 'px',
      'height': ( content.children().last().height() + 20 || 80 ) + 'px',
    }).attr('id', 'box-' + content.children().length)
    .html(`<p>${currentLettersList[i]}</p>`);
    $(newSection.children()[0]).hide();
    newSection.on('click', function () {
      $(this.childNodes[0]).toggle();
      if (!currentShow) {
        currentShow = this;
        return;
      }
      if (this === currentShow) {
        currentShow = null;
        return;
      }
      if (currentShow.innerHTML !== this.innerHTML) {
        $(currentShow.childNodes[0]).toggle();
        $(this.childNodes[0]).toggle();
        currentShow = null;
        return;
      }
      $(currentShow).css({'background':'gray'}).off("click");
      $(this).css({'background':'gray'}).off("click");
      currentShow = null;
    });
    content.append(newSection);
  }
});
