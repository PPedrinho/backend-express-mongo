import express from 'express';
import createTask  from '../controller/taskController.js';
import getAllTasks from '../controller/taskController.js';
import getTaskById from '../controller/taskController.js';
import updateTask from '../controller/taskController.js';
import partialUpdateTask from '../controller/taskController.js';
import deleteTask from '../controller/taskController.js';
import protect from '../middleware/authMiddleware.js'; // Middleware de autenticação



const router = express.Router();

router.post('/', protect, createTask); // Criar nova tarefa
router.get('/', protect, getAllTasks); // Listar todas as tarefas
router.get('/:id', protect, getTaskById); // Detalhes de uma tarefa
router.put('/:id', protect, updateTask); // Atualizar todos os dados de uma tarefa
router.patch('/:id', protect, partialUpdateTask); // Atualizar parcialmente os dados de uma tarefa
router.delete('/:id', protect, deleteTask); // Deletar uma tarefa

export default router;
