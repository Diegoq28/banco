const express=require('express');
const controller = require('../controlador/controller');
const rutas=express.Router();

rutas.get('/',controller.index);


/*---------------------------login------------------------------------*/
rutas.post('/login',controller.login);
/*---------------------------------------------------------------*/



/*----------------------------crud usuarios-----------------------------------*/
rutas.get('/consulta',controller.consultageneral);
rutas.post('/frminserta',controller.insertar);
rutas.post('/actu',controller.actu);
rutas.post('/eliminar',controller.eliminar);
/*---------------------------------------------------------------*/



/*--------------------------cerrar sesion-------------------------------------*/
rutas.get('/cerrar',controller.cerrar);
/*---------------------------------------------------------------*/



/*------------------------------crudt creditos---------------------------------*/
rutas.get('/consultacredito',controller.consultacredito)
rutas.post('/frminsertarcre',controller.insertarcredito);
rutas.post('/actulizarcredito',controller.actucredito);
rutas.post('/eliminarcredito',controller.eliminarcredito);
/*---------------------------------------------------------------*/



/*----------------------------crud clientes-----------------------------------*/

rutas.get('/consultacliente',controller.consultacliente)
rutas.post('/frminsertarcliente',controller.insertarcliente);
rutas.post('/actulizarcliente',controller.actucliente);
rutas.post('/eliminarcliente',controller.eliminarcliente);
/*---------------------------------------------------------------*/



/*-----------------------lineas de credito----------------------------------------*/
rutas.get('/consultalinea',controller.lineacredi)
rutas.post('/frmlinea',controller.insertarlicredito);
rutas.post('/actulineacodigo',controller.actulineacredito);
rutas.post('/eliminalineacre',controller.eliminarlineacredito);
/*---------------------------------------------------------------*/


/*----------------------------vista del cliente-----------------------------------*/
rutas.get('/clientes',controller.cliente);
/*---------------------------------------------------------------*/


rutas.get('/ahorro',controller.ahorro);

rutas.get('/miscreditos',controller.miscreditos);
rutas.get('/dt',controller.miscreditos);


module.exports=rutas;

/*---------------------------------------------------------------*/
//separador de bloques de codigo
/*---------------------------------------------------------------*/