(() => {
  // src/index.ts
  var modalConst = document.getElementById("modal");
  var modalBoxConst = document.getElementById("modal");
  var closeButtonConst = document.getElementById("modal");
  closeButtonConst.addEventListener("click", closeButton);
  modalBoxConst.addEventListener("click", modalBox);
  closeButtonConst.addEventListener("click", closeButton);
  var modalDiv = document.getElementById("modal");
  var modalBoxDiv = document.getElementById("modal-box");
  var containerDiv = document.getElementById("body");
  function modalBox(event) {
    event.stopPropagation();
  }
  function closeButton() {
    modalDiv.classList.add("hidden");
    modalBoxDiv.classList.add("hidden");
    containerDiv.classList.remove("overflow-hidden");
  }
  document.addEventListener("click", function(event) {
    var modal = document.getElementById("modal");
    var modalBox2 = document.getElementById("modal-box");
    var triggerButton = document.getElementById("triggerButton");
    var container = document.getElementById("body");
    var isClickButton = triggerButton.contains(event.target);
    var isClickModal = modal.contains(event.target);
    if (isClickButton) {
      modal.classList.remove("hidden");
      modalBox2.classList.remove("hidden");
      container.classList.add("overflow-hidden");
      console.log(modal.classList);
    } else if (isClickModal) {
      modal.classList.add("hidden");
      modalBox2.classList.add("hidden");
      container.classList.remove("overflow-hidden");
    }
  });
})();
