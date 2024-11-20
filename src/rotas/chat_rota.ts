import express from 'express';
import { buscarMensagensAnteriores, enviarMensagemParaUsuario,buscarMensagemParaUsuario,buscarMensagemParaAdm,usuarioEnviarMensagemParaAdm, excluirMensagemAdm, excluirMensagemUsuario, usuarioEnviarPostGeral ,buscarPostsGeral, enviarMensagemChatGeral} from '../controller/mensagemController';

export const routerMensagem = express();

routerMensagem.get('/administrativa/:nome', buscarMensagemParaUsuario);
routerMensagem.get('/buscar-adm', buscarMensagemParaAdm);

routerMensagem.delete('/deletar-adm',excluirMensagemAdm); 
routerMensagem.delete('/deletar-usuario',excluirMensagemUsuario);

routerMensagem.post('/adm-enviar-msg', enviarMensagemParaUsuario);
routerMensagem.post('/enviar-adm', usuarioEnviarMensagemParaAdm);

routerMensagem.post('/enviar-post', usuarioEnviarPostGeral)
routerMensagem.get('/buscar-posts', buscarPostsGeral);

routerMensagem.post('/mensagemGeral', enviarMensagemChatGeral);
routerMensagem.get('/anteriores', buscarMensagensAnteriores);
