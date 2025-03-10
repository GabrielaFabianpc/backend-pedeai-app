### **Rotas do Restaurante**

- `POST /public/restaurants`
    - Cadastro de um restaurante. Retorna informações do restaurante criado, exceto a senha.
    - Se já existir um restaurante com o mesmo username ou email, retorna um erro.
- `POST /public/login`
    - Login do restaurante. Retorna todas as informações do restaurante e token, exceto a senha.
- `GET /public/restaurants`
    - Retorna todos os restaurantes.
- `GET /public/restaurants/:id`
    - Retorna um restaurante específico pelo seu ID.
- `PUT /restaurants/:id` *(Protegida por Bearer Token)*
    - Atualiza um restaurante específico pelo seu ID.
- `DELETE /restaurants/:id` *(Protegida por Bearer Token)*
    - Deleta um restaurante específico pelo seu ID.

---

### **Rotas do Produto**

- `POST /restaurant/products` *(Protegida por Bearer Token)*
    - Cadastra um produto para um restaurante. Retorna as informações do produto cadastrado.
    - Se já existir um produto com o mesmo nome no restaurante, retorna um erro.
- `GET /restaurant/products`
    - Retorna todos os produtos.
- `GET /restaurant/products/:id` *(Protegida por Bearer Token)*
    - Retorna todos os produtos de um restaurante específico.
- `PUT /restaurant/products/:id`
    - Atualiza um produto específico pelo seu ID.
- `DELETE /restaurant/products/:id`
    - Deleta um produto específico pelo seu ID.

---

### **Rotas de Pedido**

- `POST /restaurant/orders` *(Protegida por Bearer Token)*
    - Cadastra um pedido e retorna informações da ordem recém-criada e do comprador.
- `GET /restaurant/orders/:id` *(Protegida por Bearer Token)*
    - Retorna todas as ordens de um restaurante específico, incluindo os compradores.
- `PUT /restaurant/orders/:id` *(Protegida por Bearer Token)*
    - Atualiza um pedido específico pelo seu ID.
- `DELETE /restaurant/orders/:id`
    - Deleta um pedido específico pelo seu ID.

---

### **Rotas de Compradores**

- `POST /public/buyers`
    - Cadastra um comprador.
- `GET /public/buyers`
    - Retorna todos os compradores.
- `GET /public/buyers/:id`
    - Retorna um comprador específico pelo seu ID.
- `PUT /public/buyers/:id`
    - Atualiza um comprador específico pelo seu ID.
- `DELETE /public/buyers/:id`
    - Deleta um comprador específico pelo seu ID.