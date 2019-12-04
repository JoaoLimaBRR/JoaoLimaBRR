function realizarBusca()
{
    var id = document.getElementById("idUsuario").value;
    var URL = "http://jsonplaceholder.typicode.com/users/"+id;
    console.log(id);
    console.log(URL);

    fetch(URL, { method:"GET" })
       .then(response => response.json() )
       .then(json => preencheHTML(json));

}

function preencheHTML(json)
{
    document.getElementById("id").value = json.id;
    document.getElementById("username").value = json.username;
    document.getElementById("email").value = json.email;
    document.getElementById("street").value = json.address.street;
    document.getElementById("suite").value = json.address.suite;
    document.getElementById("city").value = json.address.city;
    document.getElementById("zipcod").value = json.address.zipcode;
    document.getElementById("phone").value = json.phone;
    document.getElementById("website").value = json.website;
    document.getElementById("company").value = json.company.name;
    document.getElementById("catchPhrase").value = json.company.catchPhrase;
    document.getElementById("bussines").value = json.company.bs;
}


    