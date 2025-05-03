curl --request POST \
  --url 'http://localhost:3000/users/register' \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "NovoUsuario1",
    "email": "teste@gmail.com",
    "password": "novasenha1"
    }'