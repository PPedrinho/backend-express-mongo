curl --request POST \
  --url 'http://localhost:3000/users/login' \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "NovoUsuario",
    "email": "novoemail@gmail.com",
    "password": "senhaerrada"
    }'