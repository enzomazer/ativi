import express from 'express'
import { adicionaGuitarra, listarGuitarras, atualizarGuitarras, excluirGuitarras } from '../controllers/guitarrasControllers.js';
const router = express.Router();

router.get('/', listarGuitarras)
router.post('/', adicionaGuitarra)
router.put('/', atualizarGuitarras)
router.delete('/', excluirGuitarras)


export {router}