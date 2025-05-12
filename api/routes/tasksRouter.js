import express from 'express';
import { 
  createTask, 
  getAllTasks, 
  getTaskById, 
  updateTask, 
  partialUpdateTask, 
  deleteTask 
} from '../controller/taskController.js';  // Importando as funções corretamente

import protect from '../middleware/authMiddleware.js'; // Middleware de autenticação

const router = express.Router();

// Rota POST para criar uma tarefa
router.post('/', protect, createTask); // Criar nova tarefa

// Rota GET para listar todas as tarefas
router.get('/', protect, getAllTasks); // Listar todas as tarefas

// Rota GET para detalhes de uma tarefa
router.get('/:id', protect, getTaskById); // Detalhes de uma tarefa

// Rota PUT para atualizar todos os dados de uma tarefa
router.put('/:id', protect, updateTask); // Atualizar todos os dados de uma tarefa

// Rota PATCH para atualizar parcialmente os dados de uma tarefa
router.patch('/:id', protect, partialUpdateTask); // Atualizar parcialmente os dados de uma tarefa

// Rota DELETE para deletar uma tarefa
router.delete('/:id', protect, deleteTask); // Deletar uma tarefa

export default router;
