type Produto = {
  nome: string;
  preco: number;
 emEstoque: boolean;
}

// 2. Criando uma instância de produto
const meuProduto: Produto = {
  nome: "Bolsa de Couro",
  preco: 350.00,
  emEstoque: true
};

// 3. Aplicando o operador ternário
// Sintaxe: condição ? valor_se_verdadeiro : valor_se_falso
const statusEstoque = meuProduto.emEstoque ? "Disponível para compra" : "Esgotado";
const desconto = meuProduto.preco > 300 ? "Ganhou frete grátis!" : "Frete pago";
console.log(`${meuProduto.nome}: ${statusEstoque}. ${desconto}`);
// Saída: Bolsa de Couro: Disponível para compra. Ganhou frete grátis!