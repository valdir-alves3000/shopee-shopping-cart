# Shopee Shopping Cart

Este é um projeto baseado no funcionamento do carrinho de compras da Shopee. Ele fornece funções para adicionar itens ao carrinho, calcular o total da compra, excluir itens do carrinho e remover quantidades específicas de um item.

## Funcionalidades

### 1. Adicionar Item

A função `addItem(userCart, item)` permite adicionar um item ao carrinho de compras. Ela recebe dois parâmetros: `userCart`, que representa o carrinho de compras do usuário, e `item`, que é o item a ser adicionado ao carrinho.

### 2. Calcular Total

A função `calculateTotal(userCart)` calcula o total da compra com base nos itens presentes no carrinho. Ela itera sobre os itens no carrinho e calcula o subtotal de cada item, somando-os para obter o total da compra. O resultado é exibido no console.

### 3. Excluir Item

A função `deleteItem(userCart, name)` permite excluir um item específico do carrinho de compras com base no nome do item fornecido. Se o item for encontrado no carrinho, ele será removido.

### 4. Remover Item

A função `removeItem(userCart, item)` permite remover uma quantidade específica de um item do carrinho de compras. Se a quantidade do item for maior que 1, a função reduzirá a quantidade em 1. Se a quantidade for 1, o item será completamente removido do carrinho.

### 5. Exibir Carrinho

A função `displayCart(userCart)` exibe todos os itens presentes no carrinho de compras. Ela itera sobre os itens no carrinho e exibe o nome do item, o preço unitário, a quantidade e o subtotal de cada item.
