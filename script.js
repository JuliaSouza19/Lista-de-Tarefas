function adicionarTarefa() {          
    
    const inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim ( )
    
    const mensagem = document.getElementById("mensagem")

    if (tarefa == ""){
        let mensagemErro = "Digite uma tarefa para adicioná-la a sua lista"
        mensagem.textContent = mensagemErro
        mensagem.style.color = "#fd0000";

    } 
    else {
        let mensagemSucesso = "Tarefa adicionada com sucesso!"
        mensagem.textContent = mensagemSucesso
        mensagem.style.color = "green";
        
        
        
        const listaTarefas = document.getElementById("listaTarefas")
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefa
        listaTarefas.appendChild(novaTarefa)
    }
    


    
    
    
    inputTarefa.value = ""

   

    
}
