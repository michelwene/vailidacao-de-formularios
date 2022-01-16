export function valida(input) {
  const tipoDeInput = input.dataset.tipo;

  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }
}

const validadores = {
  dataNascimento: (input) => validaDataNascimento(input),
};

function validaDataNascimento(input) {
  const dataRecebeida = new Date(input.value);
  let mensagem = "";

  if (!maiorQue18(dataRecebeida)) {
    mensagem = "Idade deve ser maior que 18.";
  }

  input.setCustomValidity(mensagem);
}

function maiorQue18(data) {
  const dataAtual = new Date();
  const dataMais18 = new Date(
    data.getUTCFullYears() + 18,
    data.getUTCFullMonth(),
    data.getUTCFullDate()
  );

  return dataMais18 <= dataAtual;
}
