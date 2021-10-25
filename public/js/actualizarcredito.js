
$(Document).ready(function(){
    $('.btnact').on('click',function(){
        console.log("entro a qjr");
        let btn=$('.btnact').index(this);
        let cod=$('.codigo').eq(btn);
        let doc=$('.doc').eq(btn);
        let codli=$('.codli').eq(btn);
        let mon=$('.monto').eq(btn);
        let fec=$('.fecha').eq(btn);
        let pla=$('.plazo').eq(btn);


        let c=cod.val();
        let d=doc.val();
        let cl=codli.val();
        let m=mon.val();
        let f=fec.val();
        let p=pla.val();
        alert(btn+"\n"+c+"\n"+d+"\n"+cl+"\n"+m+"\n"+f+"\n"+p)



$.ajax({
    
    type:"POST",
    url:'/actulizarcredito',
    data:{
        cc:c,dd:d,cl:cl,mm:m,ff:f,pp:p
    }
        });
    });
});