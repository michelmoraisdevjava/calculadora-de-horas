const form = document.querySelector('form');
const inputIntervalo = document.querySelector('#intervalo');
const btnCalcular = document.querySelector('#calcular');
const resultado = document.querySelector('#resultado');

function calcularHorarios() {
  const agora = new Date();
  const intervalo = inputIntervalo.value;

  // Transforma o intervalo em milissegundos
  const intervaloMs = intervalo * 60 * 60 * 1000;

  // Calcula o número de horários possíveis
  const numHorarios = Math.floor(24 * 60 * 60 * 1000 / intervaloMs);

  // Calcula todos os horários possíveis e formata como string
  const horarios = Array(numHorarios).fill().map((_, i) => {
    const horaTomar = new Date(agora.getTime() + (intervaloMs * i));
    return horaTomar.toLocaleTimeString('pt-BR', { hour: 'numeric', minute: 'numeric' });
  });

  // Exibe o resultado para o usuário
  resultado.innerHTML = `Os horários para tomar o medicamento são:<br>${horarios.join('<br>')}`;
}

btnCalcular.addEventListener('click', function(event) {
  event.preventDefault();
  calcularHorarios();
});

form.addEventListener('submit', function(event) {
  event.preventDefault();
  calcularHorarios();
});
