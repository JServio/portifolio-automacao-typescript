import { resolveDocumentURI } from "typescript/unstable/proto";

//Função delay de tempo para retorna promises
export function aguardar(ms: number): Promise<void>{
   return new Promise(resolve => setTimeout (resolve, ms));
};