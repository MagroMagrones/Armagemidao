function Usuario () {

//DEFINIÇÃO DE VARIAVEIS
 var nome;
 var chave;
 var data_Cadastro;
 var ativo;
 var rg;
 var especialidade;
 var crm;

//SET E GET 
  this.setNome = function (vNome) {
    nome = vNome;
  }
 
  this.setChave = function (vChave) {
    chave = vChave;
  }
 
  this.setData_Cadastro = function (vData_Cadastro) {
    data_Cadastro = vData_Cadastro;
  }
  
  this.setAtivo = function (vAtivo) {
    ativo = vAtivo;
  }
  
  this.setRG = function (vRG) {
    rg = vRG;
  }
  
  this.setEspecialidade = function (vEspecialidade) {
    especialidade = vEspecialidade;
  }
  
  this.setCRM = function (vCRM) {
    crm = vCRM;
  }
 
  this.getNome = function () {
    return nome;
  }
 
  this.getChave = function () {
    return chave;
  }
 
  this.getData_Cadastro = function () {
    return data_Cadastro;
  }

  this.getAtivo = function () {
    return ativo;
  }

  this.getRG = function () {
    return rg;
  }

  this.getEspecialidade = function () {
    return especialidade;
  }

  this.getCRM = function () {
    return crm;
  }

//Metodo para demonstrar os parametros
  
  this.mostraDados = function () {
    console.log("Nome: " + this.getNome() + "\nchave: " + this.getChave() + "\nData: " + this.getData_Cadastro() + "\nAtivo: " + this.getAtivo() + "\nRG: " + this.getRG() + "\nEspecialidade: " + this.getEspecialidade() + "\nCRM: " + this.getCRM() );
  }
}

//NOVA INSTANCIA

var Usuario = new Usuario();
 
Usuario.setNome("Henrique");
Usuario.setChave("??");
Usuario.setData_Cadastro("28/03/2019");
Usuario.setAtivo("A");
Usuario.setRG("303403408");
Usuario.setEspecialidade("N/A");
Usuario.setCRM("45678965545");
Usuario.mostraDados();
