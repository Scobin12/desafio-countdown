//countdown
//criando constante do tempo
const tempoDia = document.getElementById('dias')
const tempoHora = document.getElementById('horas')
const tempoMin = document.getElementById('minutos')
const tempoSeg = document.getElementById('segundos') 

//contador
function countdown(){

    //constante data final
    const tempoFinal = new Date('2023', '8', '12')

    //constante data inicial
    const tempoInicial = new Date()

    const totalSeg = (tempoFinal - tempoInicial) / 1000

    const dias = Math.floor(totalSeg / 3600 / 24)
    const horas = Math.floor(totalSeg / 3600) % 24
    const muinutos = Math.floor(totalSeg / 60) % 60
    const segundos = Math.floor(totalSeg) % 60

    tempoDia.innerHTML = dias
    tempoHora.innerHTML = formatarTempo(horas)
    tempoMin.innerHTML = formatarTempo(muinutos)
    tempoSeg.innerHTML = formatarTempo(segundos)

}

function formatarTempo(tempo){
    return tempo < 10 ? `0${tempo}` : tempo;
}

countdown()

setInterval(countdown, 1000)

//------------------------------------------------//

//criando um modal
//constantes do modal
const abrirModal = document.getElementById("abrir-modal");
const modal = document.getElementById("modal");
const fecharModal = document.querySelector(".enviar");

//abrir modal
abrirModal.addEventListener("click", function(){
    modal.style.display = "block";
});

//fechar modal
fecharModal.addEventListener("click", function(){
    modal.style.display = "none";
});
