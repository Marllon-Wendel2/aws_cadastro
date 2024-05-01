const { S3Client, PutObjectCommand, GetObjectCommand } = require("@aws-sdk/client-s3");
const { readFile } = require("fs/promises");
const { join } = require('path')


function criaClientsS3 () {
    return new S3Client({
      forcePathStyle: true,
      credentials: {
        accessKeyId: "S3RVER",
        secretAccessKey: "S3RVER"
      },
      endpoint: "http://localhost:4569"
   });
  }

async function fazUploasNoBucket() {
    const cliente = criaClientsS3();
    
    const nomeArquivo = "cadastrar_alunos.csv"
    const caminhoArquivo = join(__dirname, nomeArquivo);
    const dadosCsv = await readFile(caminhoArquivo, "utf-8");

    const comandoUpload = new PutObjectCommand({
      Bucket: "alunos-csv-local",
      Key: nomeArquivo,
      Body: dadosCsv
    })
  
    await cliente.send(comandoUpload)
}

async function obtemDadosDoCsvDoBucket(name, key) {
    const cliente = criaClientsS3();
  
    const comando = new GetObjectCommand ({
      Bucket: name,
      Key: key
    });
  
    const resposta = cliente.send(comando);
    const dadosCsv = (await resposta).Body.transformToString();
  
    return dadosCsv;
}

module.exports = { fazUploasNoBucket, obtemDadosDoCsvDoBucket }