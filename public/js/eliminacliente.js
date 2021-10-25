$(Document).ready(function(){
    $('.btneli').on('click',function(){
        console.log("entro a qjr");
        let btn=$('.btneli').index(this);
        let doc=$('.docc').eq(btn);
        let nom=$('.nomc').eq(btn);
        let ape=$('.apec').eq(btn);
        let cor=$('.correoc').eq(btn);
        let cel=$('.celc').eq(btn);
        let sex=$('.sexoc').eq(btn);
        let fec=$('.fechac').eq(btn);


        let d=doc.val();
        let n=nom.val();
        let a=ape.val();
        let c=cor.val();
        let ce=cel.val();
        let s=sex.val();
        let f=fec.val();
        alert(btn+"\n"+d+"\n"+n+"\n"+a+"\n"+c+"\n"+ce+"\n"+s+"\n"+f)



$.ajax({
    
    type:"POST",
    url:'/eliminarcliente',
    data:{
        dd:d,nn:n,aa:a,cc:c,ce:ce,ss:s,ff:f
    }
        });
    });
});