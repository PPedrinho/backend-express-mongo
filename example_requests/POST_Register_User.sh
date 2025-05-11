curl --request POST \
  --url 'http://localhost:3000/users/register' \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "UsuarioTeste99",
    "email": "usuario99@gmail.com",
    "password": "porta99"
    }'