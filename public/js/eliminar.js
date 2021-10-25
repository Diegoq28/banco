$(Document).ready(function(){
    $('.btneli').on('click',function(){
        console.log("entro a qjr");
        let btn=$('.btneli').index(this);
        let doc=$('.doccli').eq(btn);
        let nom=$('.nomusu').eq(btn);
        let cla=$('.clave').eq(btn);
        let rol=$('.rol').eq(btn);
        let est=$('.estado').eq(btn);
        let img=$('.imagen').eq(btn);;


        let d=doc.val();
        let n=nom.val();
        let c=cla.val();
        let r=rol.val();
        let e=est.val();
        let i=img.val();
        alert(btn+"\n"+d+"\n"+n+"\n"+c+"\n"+r+"\n"+e+"\n"+i)



$.ajax({
    
    type:"POST",
    url:'/eliminar',
    data:{
        dd:d,uu:n,cc:c,rr:r,ee:e,ii:i
    }
        });
    });
});