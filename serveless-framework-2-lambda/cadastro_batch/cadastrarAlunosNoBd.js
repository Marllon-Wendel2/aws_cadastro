async function cadastrarAlunosNoBd (alunos) {
    const alunosPromessas = alunos.map((aluno) => {
        return fetch("curso-serverless2-api-393789137.us-east-1.elb.amazonaws.com", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(aluno)
        } )
    });

    await Promise.all(alunosPromessas);
}

module.exports = { cadastrarAlunosNoBd }