// Importando função utilitária de aguardar o tempo(delay)
import { aguardar } from "../../utils/helpers";
//SIMULADOR UMA API DE LOGIN
function simularLogin (usuario:string, senha:string):Promise<string>{
    return new Promise((resolve,reject) => {
        if(usuario === 'admin' && senha === '123456'){
            resolve('token-secreto-aprovado-123');
        }else{
            reject('ERRO 401 - USUARIO AO SENHA INVÁLIDOS! ❌');
        }
    });
}
//FUNÇÃO PRINCIPAL TESTANDO COM ASYNC/AWAIT ;D
async function executarCT() {
    console.log(' ⏳INICIANDO CENÁRIO DE TESTE ;D')
    try{
        console.log('Passo 1: abrindo tela tela do login ...');
        await aguardar(5000);
        console.log('Passo 2: Imserindo credencias ...');
        await aguardar(3000);

        const token = await simularLogin('jul', '123456');
        console.log(`SUCESSO! USUÁRIO LOGADO TOKEN RECEBIDO: ${token}\n`);
    }catch(erro){
        console.error(`FALHA NO TESTE: $(erro)\n`);
    }finally{
        console.log('Passo final: Fechando navegador e limpando dados.');

    }
}
executarCT();