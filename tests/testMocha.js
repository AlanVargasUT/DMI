login={
    sumar:function(n1,n2){
return n1+n2
    },
    restar:function(n1,n2){
        return n1-n2
},
    dividir:function(n1,n2){
        if(n2==0){
            return 0;
        }else{
            return n1/n2
        }
    
},
    multiplicar:function(n1,n2){
    return n1*n2
}
}

if (typeof module!= 'undefined' && module.exports){
    module.exports= login;
}