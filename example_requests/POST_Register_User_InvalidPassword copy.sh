curl --request POST \
  --url 'http://localhost:3000/users/register' \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "NovoUsuario2",
    "email": "novoemail2@gmail.com",
    "password": "123"
    }'