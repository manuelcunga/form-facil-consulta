import { Router } from 'express';
import { api } from './api.router';
import { atendimento } from './atendimento.router';
import { profissional } from './profissional.router';
 
const router = Router();

router.get('/',api)
router.use('/listar',profissional)
router.use('/profissional',profissional)
router.use('/atendimento',atendimento)

export { router };

