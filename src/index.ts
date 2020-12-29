const modalConst: HTMLDivElement | any = document.getElementById("modal");
const modalBoxConst: HTMLDivElement | any = document.getElementById("modal");
const closeButtonConst: HTMLDivElement | any = document.getElementById("modal");
closeButtonConst.addEventListener("click", closeButton);
modalBoxConst.addEventListener("click", modalBox);
closeButtonConst.addEventListener("click", closeButton);

var modalDiv: HTMLDivElement | any = document.getElementById("modal");
var modalBoxDiv: HTMLDivElement | any = document.getElementById("modal-box");
var containerDiv: HTMLDivElement | any = document.getElementById("body");

function modalBox(event: Event) {
  event.stopPropagation();
}

function closeButton() {
  modalDiv.classList.add("hidden");
  modalBoxDiv.classList.add("hidden");
  containerDiv.classList.remove("overflow-hidden");
}

document.addEventListener("click", function (event: Event) {
  var modal: HTMLDivElement | any = document.getElementById("modal");
  var modalBox: HTMLDivElement | any = document.getElementById("modal-box");
  var triggerButton: HTMLDivElement | any = document.getElementById("triggerButton");
  var container: HTMLDivElement | any = document.getElementById("body");
  var isClickButton = triggerButton.contains(event.target);
  var isClickModal = modal.contains(event.target);
  if (isClickButton) {
    modal.classList.remove("hidden");
    modalBox.classList.remove("hidden");
    container.classList.add("overflow-hidden");
    console.log(modal.classList);
  } else if (isClickModal) {
    modal.classList.add("hidden");
    modalBox.classList.add("hidden");
    container.classList.remove("overflow-hidden");
  }
});

  