var btnModal = document.getElementById("btn");  //chama o botão pelo ID e põe na variável

var modal = document.getElementById("modal"); //chama o modal pelo ID e põe na variável 

var closeBtn = document.getElementsByClassName("close")[0];  //chama o botão de fechar pelo ID e põe na variável 

var checkBox = document.getElementById("termos"); //chama o checkbox de termos pelo ID e põe na variável 

// modifica o display do modal que estava em NONE, para BLOCK, fazendo assim aparecer o modal ao clicar no botão ENVIAR
btnModal.onclick = function () {
  modal.style.display = "block";  
};

// modifica o display do modal que estava em BLOCK, para NONE, fazendo assim fechar o modal ao clicar no botão CLOSE
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// modifica o display do modal que estava em BLOCK, para NONE, quando se clica em qualquer outra área do site fora do Form.
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Exibe um alerta de mensagem enviada, somente se o checkbox estiver marcado.
function exibirAlerta() {
  if (checkBox.checked) {
    alert("Sua mensagem foi enviada com sucesso!");
  }
}
