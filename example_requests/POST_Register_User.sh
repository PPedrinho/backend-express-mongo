curl --request POST \
  --url 'http://localhost:3000/users/register' \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "PedroTeste123",
    "email": "pepeuteste@gmail.com",
    "password": "senhasegura123"
    }'