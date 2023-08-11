'use strict'

const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')
const forma6 = document.getElementById('forma6')
const forma7 = document.getElementById('forma7')
const forma8 = document.getElementById('forma8')

function mudarCor (){
    forma1.classList.toggle('vermelho')


}

function mudarForma(){
      forma2.classList.toggle('circulo')

}

function mudarForma2(){
    forma3.classList.toggle('triangulo')
}

function rotacao(){
    forma4.classList.toggle('rotacao')
}

function mudarFoto(){
    forma5.classList.toggle('mudarFoto')
}

function desaparecer(){
    forma6.classList.toggle('desaparecer')
}

function rodarCor(){
    forma7.classList.toggle('rodarCor')
}

function inverter(){
    forma8.classList.toggle('inverter')
}




forma1.addEventListener('click', mudarCor)
forma2.addEventListener('click', mudarForma)
forma3.addEventListener('click', mudarForma2 )
forma4.addEventListener('click', rotacao)
forma5.addEventListener('click', mudarFoto)
forma6.addEventListener('click', desaparecer)
forma7.addEventListener('click', rodarCor)
forma8.addEventListener('click', inverter)

