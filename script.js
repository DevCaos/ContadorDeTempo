function clica() {
    let nome = document.getElementById('name')
    let idade = document.getElementById('age')
    let hora = document.getElementById('hour')
    let nomeFinal = nome.value
    let idadeFinal = idade.value
    let horaFinal = hora.value
    let minutoFinal = horaFinal * 30 * 12 * 60 * idadeFinal


    res.innerHTML += `Olá, ${nomeFinal} sua idade é ${idadeFinal} anos. Você gastou ${minutoFinal} minutos dormindo durante ${idadeFinal} anos da sua vida.`

}
