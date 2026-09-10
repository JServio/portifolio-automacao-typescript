// Importa dependencias
import{test, expect, vi} from 'vitest';
//simulando login lento
function loginLento(usuario:string):Promise<string>{
   return new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(`Bem Vindo, ${usuario}!`);
    },5000);
    });
}

test(`Simular login usuando fake timers`, async ()=>{
    //ligando contados de tempo simulado
    vi.useFakeTimers();
    console.log(`Iniciando Cenário de teste ;D`)

    //Chamando promisse de usuário se, awalt ainda
    const promessaLongin = loginLento(`Julie`);

    //Configurando avanço de 5 segundos
    vi.advanceTimersByTime(5000);

    const resultado = await promessaLongin;

    //Verificar resultado
    expect(resultado). toBe(`Bem Vindo, Julie!`);

    console.log(`Sucesso Teste executado dentro dos parâmetros especificados`);

    //Desligamento o contador de tempo simulado 
    vi.useRealTimers();   
})