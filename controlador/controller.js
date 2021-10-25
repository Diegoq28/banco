
/*---------------------------------------------------------------*/
const connection=require('../conexion/conexion');
const cnn=connection();
const{render}=require('ejs');
const bcryptjs=require('bcryptjs')
const controller={};
/*---------------------------------------------------------------*/
controller.index=(req,res,next)=>{
    res.render('login')
}



controller.ahorro=(req,res,next)=>{
    res.render('ahorro')
}


/*-------------------------------usuarios--------------------------------*/
controller.consultageneral=(req,res,next)=>{
    if(req.session.login){
        cnn.query('select * from tl_usuario',(err,resbd)=>{
            if(err){
                next(new Error(err))
                //console.log("error en la consulta")
    
            }
            else{
                //console.log(resbd)
                res.render('consulta',{datos:resbd})
            }
        })
    }

    else{
        res.redirect('/');
    }
    
}

controller.insertar=async(req,res,next)=>{
    const d=req.body.us_doccli;
    const n=req.body.us_nom;
    const c=req.body.us_clave;
    const r=req.body.us_rol;
    const e=req.body.us_estado;
    const i=req.body.us_imagen;
    const co1=await bcryptjs.hash(c,7)
    cnn.query('insert INTO tl_usuario SET?',{us_doccli:d,us_nom:n,us_clave:co1,us_rol:r,us_estado:e,us_imagen:i},(err,resdb)=>{
        if(err){
            next(new Error(err))
        }
        else{
            res.redirect('consulta');
        }
    })

}

controller.actu=async(req,res,next)=>{
    console.log("actualiza datos");
    const docx=req.body.dd;
    const usux=req.body.uu;
    const clax=req.body.cc;
    const rolx=req.body.rr;
    const estx=req.body.ee;
    const imgx=req.body.ii;
    const password=await bcryptjs.hash(clax,8)
    console.log("hola"+docx);

    cnn.query('UPDATE tl_usuario SET us_nom="'+usux+'",us_clave="'+password+'",us_rol="'+rolx+'",us_estado="'+estx+'",us_imagen="'+imgx+'" WHERE us_doccli="'+docx+'" ',async(err,resdb)=>{
        if(err){
            console.log("docx")
            next(new Error(err));
        }
        else{
            console.log("Actualizado")
            res.redirect('consultar');
        }
    })

    }

controller.eliminar=async(req,res,next)=>{
        console.log("eliminar datos");
        const docx=req.body.dd;
    
        cnn.query('DELETE from tl_usuario WHERE us_doccli="'+docx+'" ',async(err,resdb)=>{
            if(err){
                console.log("docx")
                next(new Error(err));
            }
            else{
                console.log("Actualizado")
                res.redirect('consultar');
            }
        })
    
    }

/*---------------------------------------------------------------*/

/*----------------------------creditos-----------------------------------*/
controller.consultacredito=(req,res,next)=>{
    cnn.query('select * from tl_credito',(err,resbd)=>{
        if(err){
            next(new Error(err))
            //console.log("error en la consulta")

        }
        else{
            //console.log(resbd)
            res.render('credito',{datos:resbd})
        }
    })
}

controller.insertarcredito=async(req,res,next)=>{
    const c=req.body.cre_codigo;
    const d=req.body.cre_doccli;
    const cl=req.body.cre_codlinea;
    const m=req.body.montoprestado;
    const f=req.body.cre_fechaapro;
    const p=req.body.plazo;
    cnn.query('insert INTO tl_credito SET?',{cre_codigo:c,cre_doccli:d,cre_codlinea:cl,montoprestado:m,cre_fechaapro:f,plazo:p},(err,resdb)=>{
        if(err){
            next(new Error(err))
        }
        else{
            res.redirect('consultacredito');
        }
    })

}

controller.actucredito=async(req,res,next)=>{
    console.log("actualiza datos");
    const codx=req.body.cc;
    const docx=req.body.dd;
    const codlix=req.body.cl;
    const monx=req.body.mm;
    const fecx=req.body.ff;
    const plax=req.body.pp;
    cnn.query('UPDATE tl_credito SET cre_codigo="'+codx+'",cre_codlinea="'+codlix+'",montoprestado="'+monx+'",cre_fechaapro="'+fecx+'",plazo="'+plax+'" WHERE  cre_codigo="'+codx+'" ',async(err,resdb)=>{
        if(err){
            console.log("hola")
            next(new Error(err));
        }
        else{
            console.log("Actualizado")
            res.redirect('credito');
        }
    })

    }

controller.eliminarcredito=async(req,res,next)=>{
    console.log("eliminar datos");
    const cod=req.body.cc;
    console.log(cod)
    cnn.query('DELETE from tl_credito WHERE cre_codigo="'+cod+'"',async(err,resdb)=>{
        if(err){
            console.log("hola no elimino")
            next(new Error(err));
        }
        else{
            console.log("eliminado")
            res.redirect('credito');
        }
    })
    
    }

/*---------------------------------------------------------------*/


/*----------------------------clientes-----------------------------------*/
controller.consultacliente=(req,res,next)=>{
    cnn.query('select * from tl_cliente',(err,resbd)=>{
        if(err){
            next(new Error(err))
            //console.log("error en la consulta")

        }
        else{
            //console.log(resbd)
            res.render('cliente',{datos:resbd})
        }
    })
}

controller.insertarcliente=(req,res,next)=>{
    const d=req.body.Documento;
    const n=req.body.Nombre;
    const a=req.body.Apellido;
    const co=req.body.Correo;
    const c=req.body.Celular;
    const s=req.body.Sexo;
    const f=req.body.Fecha;
    cnn.query('insert INTO tl_cliente SET?',{cli_doc:d,cli_nom:n,cli_apell:a,cli_correo:co,cli_cel:c,cli_sexo:s,cli_fechainicio:f,},(err,resdb)=>{
        if(err){
            next(new Error(err))
        }
        else{
            res.redirect('consultacliente');
        }
    })

}

controller.actucliente=async(req,res,next)=>{
    console.log("actualiza datos");
    const docx=req.body.dd;
    const nomx=req.body.nn;
    const apex=req.body.aa;
    const corx=req.body.cc;
    const celx=req.body.ce;
    const sexx=req.body.ss;
    const fechax=req.body.ff;
    console.log("hola"+docx);

    cnn.query('UPDATE tl_cliente SET cli_nom="'+nomx+'",cli_apell="'+apex+'",cli_correo="'+corx+'",cli_cel="'+celx+'",cli_sexo="'+sexx+'",cli_fechainicio="'+fechax+'" WHERE cli_doc ="'+docx+'" ',async(err,resdb)=>{
        if(err){
            console.log("docx")
            next(new Error(err));
        }
        else{
            console.log("Actualizado")
            res.redirect('cliente');
        }
    })

    }

controller.eliminarcliente=async(req,res,next)=>{
    console.log("eliminar datos");
    const docx=req.body.dd;
    
    cnn.query('DELETE from tl_cliente WHERE cli_doc ="'+docx+'" ',async(err,resdb)=>{
        if(err){
            console.log("docx")
            next(new Error(err));
        }
        else{
            console.log("eliminado")
            res.redirect('cliente');
        }
    })
    
    }


/*---------------------------------------------------------------*/

/*------------------------------validacion de logueo---------------------------------*/
controller.login=async(req,res,next)=>{
    const usu=await req.body.usuario;
    const cla=await req.body.contra;
    cnn.query('SELECT * FROM tl_usuario WHERE us_nom =? ',[usu],async(err,results)=>{
        if(err){
            next(new Error("error de consulta login",err));
        }
        else if(results!=0 && await(bcryptjs.compare(cla,results[0].us_clave))){
            //console.log("datos correctos");
            rol= results[0].us_rol;
            uss= results[0].us_nom;
            req.session.login=true;

            switch(rol){
                case 'cliente':
                    if(req.session.login){
                        
                        res.redirect('clientes');
                    }
                    else{
                        res.redirect('login');
                    }
                break
            
                case 'empleado':
                    res.redirect('consultacliente')
                break

                case 'admin':
                    res.redirect('consulta')
                break            
            }
        }
        else{
            //console.log("datos Incorrectos");
            res.redirect('/')
        }
    })
}
/*---------------------------------------------------------------*/

/*------------------------------vistas---------------------------------*/
controller.cliente=(req,res,next)=>{
    //console.log("en la vista del usuario");
    res.render('clientes');
}
/*---------------------------------------------------------------*/

/*---------------------------cerrar sesion------------------------------------*/
controller.cerrar=(req,res,next)=>{
    req.session.destroy(()=>{
        res.redirect('/');
    });
}
/*---------------------------------------------------------------*/

/*--------------------------- lineas de credito------------------------------------*/
controller.lineacredi=(req,res,next)=>{
    cnn.query('select * from tl_linea',(err,resbd)=>{
        if(err){
            next(new Error(err))
            //console.log("error en la consulta")

        }
        else{
            //console.log(resbd)
            res.render('lineacredito',{datos:resbd})
        }
    })
}

controller.insertarlicredito=(req,res,next)=>{
    const c=req.body.codigo;
    const n=req.body.nom;
    const m=req.body.monto;
    const p=req.body.plazo;
    cnn.query('insert INTO tl_linea SET?',{lin_codigo:c,lin_nom:n,lin_montoxcredito:m,lin_plazoxcred:p},(err,resdb)=>{
        if(err){
            next(new Error(err))
        }
        else{
            res.redirect('/consultalinea');
        }
    })

}

controller.actulineacredito=async(req,res,next)=>{
    console.log("actualiza datos");
    const codx=req.body.cc;
    const nomx=req.body.nn;
    const mxc=req.body.mm;
    const pxc=req.body.pp;

    cnn.query('UPDATE tl_linea SET lin_nom="'+nomx+'",	lin_montoxcredito="'+mxc+'",lin_plazoxcred="'+pxc+'" WHERE  lin_codigo="'+codx+'" ',async(err,resdb)=>{
        if(err){
            console.log("hola")
            next(new Error(err));
        }
        else{
            console.log("Actualizado")
            res.redirect('consultalinea');
        }
    })

    }

controller.eliminarlineacredito=async(req,res,next)=>{
    console.log("eliminar datos");
    const cod=req.body.cc;
    console.log(cod)
    cnn.query('DELETE from tl_linea WHERE 	lin_codigo="'+cod+'"',async(err,resdb)=>{
        if(err){
            console.log("hola no elimino")
            next(new Error(err));
            res.redirect('consultalinea');

        }
        else{
            console.log("eliminado")
            res.redirect('consultalinea');
        }
    })
    
    }

/*---------------------------------------------------------------*/


/*---------------------------------------------------------------*/
controller.miscreditos=(req,res,next)=>{
    const uss=req.body.cc;
    uss= results[0].us_nom;
    req.session.login=true;
    console.log(uss);
        cnn.query('SELECT us_doccli,cre_codigo,cre_codlinea,montoprestado,cre_fechaapro,plazo from tl_usuario INNER JOIN tl_credito ON tl_credito.cre_doccli=tl_usuario.us_doccli INNER JOIN tl_cliente on tl_cliente.cli_doc=tl_credito.cre_doccli WHERE us_nom="'+uss+'"',(err,resbd)=>{
            if(err){
                next(new Error(err))
                //console.log("error en la consulta")
            }
            else{
                //console.log(resbd)
                res.render('miscreditos',{datos:resbd})
            }
        })
}
/*---------------------------------------------------------------*/

module.exports=controller;


/*---------------------------------------------------------------*/
//separador de bloques de codigo
/*---------------------------------------------------------------*/