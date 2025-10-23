import fs = require("fs")

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

enum EstadoCivil {
    SOLTEIRO   = 'Solteiro(a)', 
    CASADO     = 'Casado(a)', 
    SEPARADO   = 'Separado(a)' , 
    DIVORCIADO = 'Divorciado(a)', 
    VIUVO      = 'Viúvo(a)'
} 

class Pessoa {
    private cpf: string
    private identidade: string
    private nome: string
    private dataNasc: Data
    private estadoCivil: EstadoCivil

    constructor(cpf: string, nome: string, nasc: Data) {
        this.cpf = cpf
        if (nome.length >= 2) {
            this.nome = nome
        } else {
            this.nome = ''
        }
        this.identidade = ''
        this.dataNasc = nasc
        this.estadoCivil = EstadoCivil.SOLTEIRO
    }
    setNome(nm: string) {
        //o nome deve ter 2 ou mais caracteres
        if (nm.length >= 2) {
            this.nome = nm
        } 
    }
    getNome(): string { return this.nome }
    setEstadoCivil(ec: EstadoCivil) { this.estadoCivil = ec }
    getEstadoCivil(): EstadoCivil { return this.estadoCivil }
}

let joao = new Pessoa('182828282', 'João', new Data(23, 8, 2006))
let poliana = new Pessoa('244992828', 'Poliana', new Data(31, 5, 2005))


poliana.setEstadoCivil(EstadoCivil.CASADO)
console.log(poliana)
joao.setNome('J')
console.log(joao.getNome())
