
module.exports.insertarJSON = function(valor){
      

    var reqbody   =   valor;
    var pg        =   require('pg');
    var sqlString =   require('sqlstring');
    //var conString =   require('conf-postgresql').PGURL 
    var conString =   require('./conf').PGURL ;    
    
    var ejecutarQuery = function(error, dato){
  
          var ok = "nada";
          var client = new pg.Client(conString);

      client.connect(function(err){
 
          if(err) {
            ok = "No es posible conectar con postgres:";
            return ok;

            //res.send('<pre>No es posible conectar con postgres: '+ err +'</pre>');
            return console.error('No es posible conectar con postgres:', err);
          }else {
            ok = "query ok:";
          }

          var queryInsert = crearQuery();
          if (!queryInsert){
            //  res.send('<pre>La variable esta vacia: '+ err +'</pre>');
            ok = "la variable esta vacia";
            return ok;
            return console.error('la variable esta vacia:', err);
          }
        else
            {
              ok = "query ok ok ";
            }
              client.query(queryInsert, function(err, result) {
                if(err) {
                  ok = "Error corriendo la queryInsert";
                  return ok;
                 // res.send('<pre>Error corriendo la queryInsert: '+ err +'</pre>');
                  return console.error('Error corriendo la queryInsert:', err);
                }else {
                  ok = "query ok ok  ok";
                }
               
              //  res.send('<pre> corriendo la queryInsert: ' + JSON.stringify(result) + '</pre>')
                //console.log(result.rows[0].theTime);
                //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
                
                client.end();
                
              });
              return ok;
            });


}
const crearQuery = () => {
    //var obj = JSON.parse(received_updates);
    if (reqbody){


      detalle = "Javi: Mensaje entarnte";
      var id_log = unshift(req.body);
      var insert = "INSERT INTO tbface_log(fecha, json_data, estado, detalle) VALUES (now(), '"+reqbody+"', null, '"+detalle+"' );";
      //var insert = "INSERT INTO tbface_log(fecha, id_page, json_data, saliente, estado, detalle) VALUES (now(), '"+id_page+"', '"+json+"',"+saliente+", "+estado+",'"+detalle+"' );";
       return insert;
    }else{
    return false;
      
    }
    
}

};



