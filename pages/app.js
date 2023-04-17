//seleciona o botão
var btnModal = document.getElementById("btn");
console.log("000");

var modal = document.getElementById("modal");

var closeBtn = document.getElementsByClassName("close")[0];

var checkBox = document.getElementById("termos");

btnModal.onclick = function () {
  modal.style.display = "block";
};

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function exibirAlerta() {
  if (checkBox.checked) {
    alert("Sua mensagem foi enviada com sucesso!");
  }
}
