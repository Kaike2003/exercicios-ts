import PromptSync from "prompt-sync"

interface ICalculadoraProps {
    numero1: number
    numero2: number
}

interface ICalculadoraActions {
    dividir(): number
    multiplicar(): number
    somar(): number
    subtrair(): number
    restodadivisao(): number
}

class Calculadora implements ICalculadoraActions {

    constructor(public props: ICalculadoraProps) { }

    dividir(): number | never {
        if (this.props.numero2 != 0) {
            return this.props.numero1 / this.props.numero2
        }

        throw new Error("Divisão por 0 inválida...")
    }

    restodadivisao(): number | never {
        if (this.props.numero2 != 0) {
            return this.props.numero1 % this.props.numero2
        }

        throw new Error("Divisão por 0 inválida...")
    }

    multiplicar(): number {
        return this.props.numero1 * this.props.numero2
    }

    somar(): number {
        return this.props.numero1 + this.props.numero2
    }

    subtrair(): number {
        return this.props.numero1 - this.props.numero2
    }
}


function log(entrada: any) {
    console.log(entrada)
}

type Operador = "+" | "*" | "/" | "%" | "-"

function resultado(numero1: number, numero2: number, resultado: number, operador: Operador) {
    log(`${numero1} ${operador} ${numero2} = ${resultado}`)
}


class Main {

    static main(): void {
        let opcao: number | null
        let numero1: number | null
        let numero2: number | null

        let prompt = PromptSync()

        do {
            log("===== CALCULADORA =====")
            log("1 - Somar");
            log("2 - Sutrair");
            log("3 - Multiplicar");
            log("4 - Dividir");
            log("5 - Resto da divisão");
            log("0 - Sair");
            log("");
            opcao = parseFloat(prompt("Escolha uma opção: "));


            if (opcao > 0) {

                numero1 = parseFloat(prompt("Digite o primeiro número: "));
                numero2 = parseFloat(prompt("Digite o segundo número: "));

                if (numero1 && numero2) {
                    const calculadora: Calculadora = new Calculadora({ numero1, numero2 })

                    switch (opcao) {
                        case 1:
                            resultado(numero1, numero2, calculadora.somar(), "+")
                            break;
                        case 2:
                            resultado(numero1, numero2, calculadora.subtrair(), "-")
                            break;
                        case 3:
                            resultado(numero1, numero2, calculadora.multiplicar(), "-")
                            break;
                        case 4:
                            resultado(numero1, numero2, calculadora.dividir(), "/")
                            break;
                        case 5:
                            resultado(numero1, numero2, calculadora.restodadivisao(), "%")
                            break;
                        default:
                            log("Opcao invalida!!!")
                            break;
                    }

                } else {
                    log("[ERRO] - Verifique os numeros digitados!!!")
                }
            }

        } while (opcao !== 0);
    }
}

Main.main()