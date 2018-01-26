var http = require('http');
var url = require("url");
var querystring = require('querystring');

// req = request, tout ce que le client demande
// res = response, la réponse à renvoyer sur la page, code HTML de la page
var server = http.createServer(function(req, res) {
    var params = querystring.parse(url.parse(req.url).query);
    var page = url.parse(req.url).pathname;
    res.writeHead(200,{"content-type":"text/plain"});
    if ('prenom' in params || 'nom' in params) {
        res.write(' Vous vous appelez ' + params['prenom'] + ' ' + params['nom']); 
    }
    else{
        res.write('Vous devez bien avoir un prénom et un nom, non ?!'); 
    }

    res.end();
    console.log(page);
    
    // // 200 signifie que tout va bien, 404 la page n'existe pas
    // // {"content-type":"text/html"} est le type MIME de la réponse, on peut rajouter d'autres éléments au tableau
    
    // res.write('Bien le bonjour !'); 
    
});
server.listen(8080);

