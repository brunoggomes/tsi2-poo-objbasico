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
//objeto do tipo data chamado 'hoje'
var hoje = new Data(15, 10, 2025);
var aniversario = new Data(23, 8, 2006);
console.log(aniversario.obterDataFormatada());
