const { converteDadosCsv } = require("../../converteDadosCsv");
const { fazUploasNoBucket, obtemDadosDoCsvDoBucket } = require("./servidorS3");

module.exports.simulandoUploadCsv = async (event) => {
  try {
    await fazUploasNoBucket();


    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Simulando upload do arquivo"
      })
    };
  } catch (erro) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify(erro)
    };
  }
}

module.exports.cadastrarAlunos = async (event) => {
  const eventS3 = event.Records[0].s3;
  const nomeBucket = eventS3.bucket.name;
  const chaveBucket = decodeURIComponent(eventS3.object.key.replace(/\+g/, " "));

  const dadosArquivo = await obtemDadosDoCsvDoBucket(nomeBucket, chaveBucket);

  const alunos = converteDadosCsv(dadosArquivo);
};

