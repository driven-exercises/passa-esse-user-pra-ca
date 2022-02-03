Crie o middleware na pasta `middlewares` com o nome `tokenValidationMiddleware.js`

Retire a lógica de validação de token de dentro dos métodos do `userController.js` e a coloque no middleware

Não se esqueça de passar o usuário por meio de `res.locals.user`

Faça as adaptações necessárias nos endpoints que utilizavam esse usuário