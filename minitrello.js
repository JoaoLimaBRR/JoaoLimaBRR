function recuperarTarefa()
{
    
    //ACIONADO QUANDO CLICAMOS NO BUTTON RECUPERAR TAREFAS, VAI ATÉ A URL E TRAS POR METADO GET E JSON OS DADOS
    fetch("http://www.professorisidro.com.br/tarefas.php", {"method":"GET"})
       .then(response => response.json())
      .then(json => exibirTarefas(json));

}

function exibirTarefas(json){
    //console.log(json.length);
    console.log(json);
    //UM FOR PARA CONTAR DE 0 ATÉ MENOR QUE O TAMANHO DO 'VETOR' DO JSON
    for(i=0;i<json.length;i++)
    {
        //VARIAVEL QUE GUARDA O ATRIBUTO DE JSON NA POSIÇÃO i, POREM APENAS O NOME
        var textoTarefa = json[i].nome;
        //CRIANDO UMA DIV COM A VARIAVEL tarefDOM
        var tarefaDOM = document.createElement("div");
        //ATRIBUINDO UM ID PARA A DIV
        tarefaDOM.setAttribute("id",[i]);
        //draggable POSSIBILITA A DIV SER 'ARRASTAVEL'
        tarefaDOM.setAttribute("draggable","true");
        //CHAMANDO A CLASSE QUE TRATA O VISUAL DA DIV NO CSS
        tarefaDOM.setAttribute("class","itemtarefa");
        //CHAMANDO O EVENTO DE PEGAITEM QUE ESTA NO JS
        tarefaDOM.setAttribute("ondragstart","pegaItem(event);");
        //CONCATENANDO O TEXTO GUARDADO DO VETOR DO JSON AO tarefaDOM
        tarefaDOM.innerHTML = textoTarefa;
        //ESCREVENDO NA COLUNA DE ID "PENDENTES" O CONTEUDO DE TAREFADOM
        document.getElementById("pendentes").appendChild(tarefaDOM);
    }
}

function pegaItem(evt){
    console.log("comecei a arrastar "+evt.target.id);
    // adicionei o id do item que vou arrastar na estrutura dataTransfer
    evt.dataTransfer.setData("TAREFA",evt.target.id);
}

function habilitaArrastar(evt){
    evt.preventDefault();
    //console.log("Estou sobre um determinado ponto que vai receber a tarefa");
}

function recebeItem(evt){
    // agora preciso recuperar a TAREFA que estava no dataTransfer e adicioná-la na coluna
    var idTarefa = evt.dataTransfer.getData("TAREFA");
    //PEGA O CONTEUDO DO QUE ESTIVER SENDO TRANSFERIDO PASSADO PELA IDTAREFA
    var tarefa = document.getElementById(idTarefa);
    console.log("Dropei a tarefa aqui ="+evt.target.id);


    if (evt.target.id === "pendentes" ||
        evt.target.id === "feita"    ||
        evt.target.id === "fazendo"     ){
        evt.target.appendChild(tarefa);
        }
    else{
        alert("nesta versao nao aninhamos tarefas...")
    }
  

    

}