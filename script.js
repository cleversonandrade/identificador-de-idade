function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.querySelector('input#txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
               //Criança
               img.setAttribute('src', 'img/homembebê.jpg') 
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'img/homemjovem.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'img/homemadulto.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'img/homemidoso.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'img/mulherbebê.jpg')
                
             } else if (idade < 21) {
                 //Jovem
                 img.setAttribute('src', 'img/mulherjovem.jpg')
                 
             } else if (idade < 50) {
                 //Adulto
                 img.setAttribute('src', 'img/mulheradulta.jpg')
                 
             } else {
                 //Idoso
                 img.setAttribute('src', 'img/mulheridosa.jpg')
             }    
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}