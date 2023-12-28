const express = require('express'); //dependencia para lidar com as requisiçōes
const cors = require('cors');
const { Venda } = require('./server');
const app = express();
app.use(express.json());
app.use(cors());

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

//rota para cadastrar produtos
app.post('/cadastrar-produtos', (req, res) => {
  const { nome, preco, quantidade } = req.body;
  const produto = new Venda();
  produto.setProduto([nome, preco, quantidade])
  produto.getProduto()
  const response = { message: 'Produto cadastrado com sucesso', produto: produto.toString() };
  res.json(response);
});

//rota responsável por realizar a venda
app.post('/vender-produtos', (req, res) => {
  const { nome, preco, quantidade } = req.body;
  const produto = new Venda();
  produto.setVenda([nome, preco, quantidade])
  produto.getVenda()
  const response = { message: 'Venda realizada com sucesso', produto: produto.toString() };
  res.json(response);
});

app.get('/produtos', (req, res) => {
  res.send('Hello World!');
});