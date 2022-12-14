const http = require('http');

http.createServer( ( req, res ) => {
    
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    // res.writeHead(200, { 'Content-Type': 'application/csv' });



    res.write( 'Hola Mundo')
    res.end();

} )
.listen( 4200 );

console.log('Escuchando el puerto', 4200);