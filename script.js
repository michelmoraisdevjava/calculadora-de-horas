const calcularBtn = document.getElementById('calcular');
calcularBtn.addEventListener('click', calcular);

function calcular(event) {
  event.preventDefault();

  const intervalo = document.getElementById('intervalo').value;
  const tempo = document.getElementById('tempo').value;

  if (intervalo && tempo) {
    calcularHorarios(intervalo, tempo);
    calcularDataFinal(tempo);
  }
}

function calcularHorarios(intervalo, tempo) {
  const resultadoEl = document.getElementById('resultado');
  resultadoEl.innerHTML = '';

  const horaInicio = new Date();
  horaInicio.setMinutes(horaInicio.getMinutes() + 10);
  horaInicio.setSeconds(0);

  let horaAtual = new Date(horaInicio);

  const horaFim = new Date(horaInicio);
  horaFim.setDate(horaFim.getDate() + parseInt(tempo));

  const totalHorarios = Math.ceil((24 - horaAtual.getHours()) / parseInt(intervalo));

  let horarios = '';
  horarios += horaInicio.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + '<br>';
  horaAtual.setHours(horaAtual.getHours() + parseInt(intervalo));
  for (let i = 0; i <= totalHorarios; i++) {
    horarios += horaAtual.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + '<br>';
    horaAtual.setHours(horaAtual.getHours() + parseInt(intervalo));
  }

  resultadoEl.innerHTML = `<h2>Horários:</h2><p>${horarios}</p>`;
}

function calcularDataFinal(tempo) {
  const resultadoEl = document.getElementById('resultado');
  const dataAtual = new Date();
  const dataFinal = new Date(dataAtual.getTime() + (parseInt(tempo) - 1) * 24 * 60 * 60 * 1000);

  const dataFormatada = `${dataFinal.getDate().toString().padStart(2, '0')}/${(dataFinal.getMonth()+1).toString().padStart(2, '0')}/${dataFinal.getFullYear()}`;
  const dataFinalEl = document.createElement('p');
  dataFinalEl.innerText = `Data final da medicação: ${dataFormatada}`;
  resultadoEl.appendChild(dataFinalEl);
}
