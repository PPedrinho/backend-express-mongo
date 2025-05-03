curl --request POST \
  --url 'http://localhost:3000/users/login' \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "NovoUsuario",
    "email": "emailerrado@gmail.com",
    "password": "novasenha"
    }'