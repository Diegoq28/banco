$(Document).ready(function(){
    $('.prueba').on('click',function(){
        alert("entro a qjr");
        let btn=$('.prueba').index(this);
        let cod=$('#usuario').eq(btn);


        let c=cod.val();


        alert(btn+"\n"+c)



$.ajax({
    
    type:"POST",
    url:'/dt',
    data:{
        cc:c
    }
        });
    });
});