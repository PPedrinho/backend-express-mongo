curl --request POST \
  --url 'http://localhost:3000/users/login' \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "PedroTeste123",
    "email": "pepeuteste@gmail.com",
    "password": "senhasegura123"
    }'