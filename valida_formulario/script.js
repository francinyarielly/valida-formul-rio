function validaFormulario() {
    
    const nome = document.getElementById("nome").value;
    const email = document.querySelector("#email").value;
    const senha = document.getElementById("senha").value;

    console.log(senha)

    // Validação de campos vazios
    if(nome == '' || email == '' || senha == ''){
        alert("Por favor, preencha os campos vazios!")
        return
    }

    // validacao do campo do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!emailRegex.test(email)){
        alert("Digite um e-mail válido!")

    }

    //verifica tamanho da senha  
    if(senha.length > 8){
        alert("A senha exedeu os limites de caracteres")
        return

}
alert("O cadastro foi realizado com sucesso!")
}

