// Classe que representa uma data
class Data {
    dia: number
    mes: number
    ano: number

    //construtor: fornece um valor inicia aos atributos do objeto
    constructor(dd: number, mm: number, aa: number) {
        if (dd >= 1 && dd <= 31) { this.dia = dd } else { 
            this.dia = 1 
        }
        if (mm >= 1 && mm <= 12) { this.mes = mm } else { 
            this.mes = 1 
        }
        this.ano = aa
    }

    /** Devolve a data no formato dd/mm/aaaa */
    obterDataFormatada(): string {
        const dia = this.dia < 10 ? '0'+this.dia : this.dia
        const mes = this.mes < 10 ? '0'+this.mes : this.mes
        return `${dia}/${mes}/${this.ano}`
    }
}

//objeto do tipo data chamado 'hoje'
let hoje = new Data(15, 10, 2025)
let aniversario = new Data(23, 8, 2006)
console.log(aniversario.obterDataFormatada())