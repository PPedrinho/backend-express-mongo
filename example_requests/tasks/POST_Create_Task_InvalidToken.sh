curl --request POST \
  --url 'http://localhost:3000/tasks' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer lalalalalalala '\
  --data '{
    "title": "Estudar HTML",
    "description": "Revisar conceitos e práticas de HTML"
  }'
