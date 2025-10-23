"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Classe que representa uma data
var Data = /** @class */ (function () {
    //construtor: fornece um valor inicia aos atributos do objeto
    function Data(dd, mm, aa) {
        if (dd >= 1 && dd <= 31) {
            this.dia = dd;
        }
        else {
            this.dia = 1;
        }
        if (mm >= 1 && mm <= 12) {
            this.mes = mm;
        }
        else {
            this.mes = 1;
        }
        this.ano = aa;
    }
    /** Devolve a data no formato dd/mm/aaaa */
    Data.prototype.obterDataFormatada = function () {
        var dia = this.dia < 10 ? '0' + this.dia : this.dia;
        var mes = this.mes < 10 ? '0' + this.mes : this.mes;
        return "".concat(dia, "/").concat(mes, "/").concat(this.ano);
    };
    return Data;
}());
var EstadoCivil;
(function (EstadoCivil) {
    EstadoCivil["SOLTEIRO"] = "Solteiro(a)";
    EstadoCivil["CASADO"] = "Casado(a)";
    EstadoCivil["SEPARADO"] = "Separado(a)";
    EstadoCivil["DIVORCIADO"] = "Divorciado(a)";
    EstadoCivil["VIUVO"] = "Vi\u00FAvo(a)";
})(EstadoCivil || (EstadoCivil = {}));
var Pessoa = /** @class */ (function () {
    function Pessoa(cpf, nome, nasc) {
        this.cpf = cpf;
        if (nome.length >= 2) {
            this.nome = nome;
        }
        else {
            this.nome = '';
        }
        this.identidade = '';
        this.dataNasc = nasc;
        this.estadoCivil = EstadoCivil.SOLTEIRO;
    }
    Pessoa.prototype.setNome = function (nm) {
        //o nome deve ter 2 ou mais caracteres
        if (nm.length >= 2) {
            this.nome = nm;
        }
    };
    Pessoa.prototype.getNome = function () { return this.nome; };
    Pessoa.prototype.setEstadoCivil = function (ec) { this.estadoCivil = ec; };
    Pessoa.prototype.getEstadoCivil = function () { return this.estadoCivil; };
    return Pessoa;
}());
var joao = new Pessoa('182828282', 'João', new Data(23, 8, 2006));
var poliana = new Pessoa('244992828', 'Poliana', new Data(31, 5, 2005));
poliana.setEstadoCivil(EstadoCivil.CASADO);
console.log(poliana);
joao.setNome('J');
console.log(joao.getNome());
