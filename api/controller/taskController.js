import Task from '../models/task.js';
import mongoose from 'mongoose';

// Criar uma nova tarefa
export const createTask = async (req, res) => {
  const { title, description } = req.body;
  
  if (!title) {
    return res.status(400).json({ message: "O título da tarefa é obrigatório" });
  }

  try {
    const task = new Task({
      title,
      description,
      userId: req.userId,  // Associa a tarefa ao usuário autenticado
    });
    await task.save();
    res.status(201).json({ message: "Tarefa criada com sucesso", task });
  } catch (error) {
    res.status(500).json({ message: `Erro ao criar tarefa: ${error.message}` });
  }
};

// Listar todas as tarefas do usuário autenticado
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.userId });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: `Erro ao listar tarefas: ${error.message}` });
  }
};

// Obter uma tarefa específica pelo ID
export const getTaskById = async (req, res) => {
  const { id } = req.params;

  // Verifica se o ID do MongoDB é válido
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "ID inválido" });
  }

  try {
    // Busca a tarefa pelo ID e pelo userId (garantindo que apenas o dono da tarefa possa acessá-la)
    const task = await Task.findOne({ _id: id, userId: req.userId });
    if (!task) {
      return res.status(404).json({ message: "Tarefa não encontrada" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: `Erro ao buscar tarefa: ${error.message}` });
  }
};

// Atualizar todos os dados de uma tarefa
export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  // Verifica se o ID do MongoDB é válido
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "ID inválido" });
  }

  try {
    // Atualiza todos os dados da tarefa
    const updatedTask = await Task.findOneAndUpdate(
      { _id: id, userId: req.userId },
      { title, description, completed },
      { new: true }  // Retorna o documento atualizado
    );
    if (!updatedTask) {
      return res.status(404).json({ message: "Tarefa não encontrada" });
    }
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: `Erro ao atualizar tarefa: ${error.message}` });
  }
};

// Atualizar parcialmente os dados de uma tarefa
export const partialUpdateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  // Verifica se o ID do MongoDB é válido
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "ID inválido" });
  }

  try {
    // Atualiza parcialmente os dados da tarefa
    const updatedTask = await Task.findOneAndUpdate(
      { _id: id, userId: req.userId },
      { title, description, completed },
      { new: true, runValidators: true }  // Validadores de Mongoose
    );
    if (!updatedTask) {
      return res.status(404).json({ message: "Tarefa não encontrada" });
    }
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: `Erro ao atualizar tarefa: ${error.message}` });
  }
};

// Deletar uma tarefa
export const deleteTask = async (req, res) => {
  const { id } = req.params;

  // Verifica se o ID do MongoDB é válido
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "ID inválido" });
  }

  try {
    // Deleta a tarefa pelo ID e userId (garantindo que apenas o dono possa deletar)
    const task = await Task.findOneAndDelete({ _id: id, userId: req.userId });
    if (!task) {
      return res.status(404).json({ message: "Tarefa não encontrada" });
    }
    res.status(200).json({ message: "Tarefa deletada com sucesso" });
  } catch (error) {
    res.status(500).json({ message: `Erro ao deletar tarefa: ${error.message}` });
  }
};


