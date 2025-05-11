import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: false 
  },
  completed: {
    type: Boolean,
    default: false,
  },
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
}, {
  timestamps: true,  // Para rastrear quando a tarefa foi criada ou atualizada
});

export default taskSchema;

