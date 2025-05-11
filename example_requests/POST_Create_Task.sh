curl --request POST \
  --url 'http://localhost:3000/tasks' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MTZiMGMwNzEwNDhhYTA1MjA4ODk3MCIsImlhdCI6MTc0Njc0MzU4OCwiZXhwIjoxNzQ2NzQ3MTg4fQ.e1siU1PBaNvpftUlnQOmq_QvIZ4FBjLfXfPd4zPr0b4 '\
  --data '{
    "title": "Estudar Node.js",
    "description": "Revisar conceitos e práticas de Node.js"
  }'
