
function validar(){
     var nome = document.getElementById("nome");
     var telefone = document.getElementById("telefone");
     var email = document.getElementById("email");
     var assunto = document.getElementById("assunto");
     var mensagem = document.getElementById("mensagem");


     if (nome.value == "") {
        alert("Nome não informado")

        nome.focus();
     }

     if (telefone.value == ""){
        alert("Telefone não informado")

        telefone.focus();
     }

     if (email.value ==""){
        alert ("E-mail não informado")

        email.focus()
     }

     if (assunto.value == ""){
        alert ("Assunto não informado")

        assunto.focus()
     }

     if (mensagem.value ==""){
        alert ("Mensagem não informada")    

        mensagem.focus()
     }
}

