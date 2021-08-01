//pegar os dados do html

var user = document.getElementById("user");
var password = document.getElementById("password");
var buttom = document.getElementById("submit");

//----

// submeter os dados e enviar pro banco de dados

buttom.onclick = function GetData() {
  var userValue = user.value;
  var passwordValue = password.value;

  if (userValue === "fabricio" && passwordValue === "test") {
    document.getElementById(
      "sucess"
    ).innerHTML = `<div>Login efetuado com sucesso</div>`;
  } else {
    document.getElementById("sucess").innerHTML = `<div>Senha Incorreta</div>`;
  }
};
