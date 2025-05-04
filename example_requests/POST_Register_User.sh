curl --request POST \
  --url 'http://localhost:3000/users/register' \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "novouser11",
    "email": "novouser11@gmail.com",
    "password": "senha1234"
    }'