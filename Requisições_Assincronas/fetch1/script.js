function loadPosts() {
    fetch('http://jsonplaceholder.typicode.com/posts')
        .then(function(resultado){
            return resultado.json()
            .then(function(json){
                document.getElementById("posts").innerHTML = json.length + ' posts';
            })
        })
        .catch(function(erro){
            console.log('Deu Problema ' + erro)
        })
}


