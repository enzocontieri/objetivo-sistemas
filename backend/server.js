class Produto {
//método responsável por cadastrar o Produto
  setProduto(data){
      [ 
          this.nome, 
          this.preco, 
          this.quantidade 
      ] = data
  }
  //método de exibição do produto cadastrado
  getProduto(){
       console.log(`Nome do produto: ${this.nome}, R$${this.preco}, Quantidade disponível: ${this.quantidade}`); 
  }
  //método responsável por formatar a resposta para o frontEnd
  toString() {
    return `Produto: ${this.nome}, Preço: R$${this.preco}, Quantidade: ${this.quantidade}`;
  }
}
class Venda extends Produto {
constructor(){
  super()
  this.desconto
  this.qtdVenda = 0
}

setVenda(){
 //verifica se o produto esta cadastrado 
  if(!this.nome || this.nome === "") {
      console.log("Produto nao cadastrado")
      return 
  }
  //valida o estoque e realiza a Venda
  if(this.quantidade > 0){
      console.log("Venda concluída com sucesso!")
      this.quantidade--;
      this.qtdVenda++;
      this.getVenda()
  }else {
      console.log("Produto indisponível no estoque")
  }
}
// exibe a Última venda realizada 
getVenda(){
  console.log(`
  Quantidade de Vendas: ${this.qtdVenda}
  Venda realizada com sucesso:\n Produto: ${this.nome} \n Quantidade restante em estoque: ${this.quantidade}`)
}
}


module.exports = { Venda };