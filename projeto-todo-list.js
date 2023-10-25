const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '>> '
});

const tarefas = [];

var OPCAO_ENCERRAMENTO = 6;

var cabecalho = "\nSISTEMA DE GESTÃO DE TAREFAS";

var opcoes =
  "\n 1 - Adicionar uma tarefa;" +
  "\n 2 - Editar uma tarefa salva;" +
  "\n 3 - Remover uma tarefa salva;" +
  "\n 4 - Listar todas as tarefas salvas;" +
  "\n 5 - Obter uma tarefa, através de um parâmetro (id)" +
  `\n ${OPCAO_ENCERRAMENTO} - Sair\n`;

var solicitacaoAcao = "\nDigite a ação desejada: ";

var sequence = 1;

function main() {
  console.log(cabecalho);
  console.log(opcoes);
  rl.setPrompt(solicitacaoAcao);
  rl.prompt();

  rl.on('line', (line) => {
    const opcaoEscolhida = parseInt(line.trim());

    switch (opcaoEscolhida) {
      case 1:
        criarTarefa();
        break;
      case 4:
        listarTodasTarefasSalvas();
        break;
      case OPCAO_ENCERRAMENTO:
        rl.close();
        break;
      default:
        console.log("Opção inválida. Tente novamente.");
        break;
    }
  });
}

function criarTarefa() {
  rl.question("Digite o nome da tarefa: ", (nome) => {
    let id = sequence;
    sequence++;

    let tarefa = {
      id: id,
      nome: nome,
    }

    tarefas.push(tarefa);
    console.log(`Tarefa criada: {id: ${tarefa.id}, nome: ${tarefa.nome}}`);
    rl.prompt();
  });
}

function listarTodasTarefasSalvas() {
  if (tarefas.length === 0) {
    console.log("Não há tarefas salvas.");
  } else {
    console.log("\nTodas as tarefas salvas:");
    tarefas.forEach((tarefa) => console.log(`Tarefa: {id: ${tarefa.id}, nome: ${tarefa.nome}}`));
  }
  rl.prompt();
}

rl.on('close', () => {
  console.log("Obrigado por utilizar o programa.");
  process.exit(0);
});

main();