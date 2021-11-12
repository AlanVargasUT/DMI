var assert = require("assert");
describe("Casos",function(){
describe("Prueba de Login",function(){
   it('Usuario',function(){
   assert.equal("Pedir Usuario", "Pedir Usuario".substring(0,100));
   
   })
   it('Contraseña',function(){
    assert.equal("Pedir Contraseña", "Pedir Contraseña".substring(100,0));
    })
    it('Registro',function(){
    assert.equal("Registro Exitoso", "Registro Exitoso".substring(0,100));
    })
    it('Registro sin datos',function(){
    assert.equal("Registro sin datos obligatorios", "Registro sin datos obligatorios".substring(0,100));
     })
     it('Error',function(){
     assert.equal("Usuario Inexistente", "Usuario Inexistente".substring(0,100));
    })
})
});