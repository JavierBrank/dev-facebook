
module.exports.insertarJSON = function(valor){
    console.log(valor);
    return valor;   
};



var pg        =   require('pg');
var sqlString =   require('sqlstring');
var conString =   require('conf-postgresql').PGURL;


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
    if (received_updates != []){
      var data = {
        'id_page': sqlstring.escape(received_updates[0].entry[0].id),
        'sender_id': JSON.stringify(received_updates[0])
      }
      var id_page = received_updates[0].entry[0].id,
      json = JSON.stringify(received_updates[0]),
      sender_id = received_updates[0].entry[0].messaging[0].sender.id,
      estado = 1,
      saliente = false,
      detalle = "Javi: Mensaje entarnte";
   if (id_page == sender_id) {
      detalle += "Javi: Mensaje saliente";
      saliente = true;
   }
    if (conString != dblocal){
      var id_log = unshift(req.body);
      var insert = "INSERT INTO tbface_log(id_log, fecha, id_page, json_data, saliente, estado, detalle) VALUES ("+id_log+", now(), '"+id_page+"', '"+json+"',"+saliente+", "+estado+",'"+detalle+"' );";

    }else{
       var insert = "INSERT INTO tbface_log(fecha, id_page, json_data, saliente, estado, detalle) VALUES (now(), '"+id_page+"', '"+json+"',"+saliente+", "+estado+",'"+detalle+"' );";
   
    }
   
    return insert;
  }else{
    return false;
  }
    
}
