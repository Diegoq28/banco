$(Document).ready(function(){
    $('.btnel').on('click',function(){
        console.log("entro a qjr");
        let btn=$('.btnel').index(this);
        let cod=$('.codigo').eq(btn);
        let nom=$('.nombre').eq(btn);
        let mxc=$('.mxc').eq(btn);
        let pxc=$('.pxc').eq(btn);


        let c=cod.val();
        let n=nom.val();
        let m=mxc.val();
        let p=pxc.val();

        alert(btn+"\n"+c+"\n"+n+"\n"+m+"\n"+p)



$.ajax({
    
    type:"POST",
    url:'/eliminalineacre',
    data:{
        cc:c,nn:n,mm:m,pp:p
    }
        });
    });
});