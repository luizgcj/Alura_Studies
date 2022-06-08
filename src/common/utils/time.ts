export default function tempoParaSegundos(tempo: string){
    const [horas = '0', minutos = '0', segundos = '0'] = tempo.split(":");

    const horasEmSegundo = Number(horas) * 3600;
    const MinutosEmSegundo = Number(minutos) * 60;

    return horasEmSegundo + MinutosEmSegundo + Number(segundos);
}