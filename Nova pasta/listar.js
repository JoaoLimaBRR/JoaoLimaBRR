var i = 1;
function incluirAtividade(parametro)
{
    
    var parametro = document.getElementById("entrada").value;
    document.getElementById("saida").innerHTML += "<div class='container-fluid' id = 'saida'> "
    + "<div class='row'>  <div class='col-md-4'>  <label><input type = 'checkbox' onclick = 'verificarCheck(this)' value=''>Feito ?</label>"
    +" </div> <div class='row'> <div class = 'col-md-8' id = 'mod'> " + parametro + " </div></div> </div> </div>";
    i++

}

function verificarCheck(campo)
{
    
    if(campo.checked)
    {
        document.getElementById('mod').style.textDecoration = "line-through";
    }
    else{
        document.getElementById('mod').style.textDecoration = "";
    }
}
