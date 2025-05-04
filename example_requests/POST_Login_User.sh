curl --request POST \
  --url 'http://localhost:3000/users/login' \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "novouser11",
    "email": "novouser11@gmail.com",
    "password": "senha1234"
    }'