module.exports.simulandoUploadCsv = async (event) => {
  try {
    console.log('simule aqui o upload');


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
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};
