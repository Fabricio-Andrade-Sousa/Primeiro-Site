function validar() {
    let x = document.getElementById("num").value;
    if (x < 0 || x > 100 ) {
      alert("Este campo só deve ser prenchido com números de 0 a 100");
    return false;
    }
    else{
      alert("Obrigado pela sua avaliação")
    }
    return true;
  }
  