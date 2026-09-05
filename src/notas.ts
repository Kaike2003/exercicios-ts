import PromptSync from "prompt-sync"

interface IAluno {
    id: number
    nome: string
    nota1: number
    nota2: number
    notatrabalho: number
    media: number
    situacao: TSituacao
}

class Aluno {
    private static gerarId: number = 1
    private constructor(private readonly props: IAluno) { }

    static criar(props: Omit<IAluno, "id">) {
        return new Aluno(
            {
                id: this.gerarId++,
                ...props,
            }
        )
    }

    get nota1(): number {
        return this.props.nota1
    }

    get nota2(): number {
        return this.props.nota2
    }

    get notatrabalho(): number {
        return this.props.notatrabalho
    }

    get nome(): string {
        return this.props.nome
    }

    get situacao(): TSituacao {
        return this.props.situacao
    }

    get media(): number {
        return this.props.media
    }

    set nota1(nota1: number) {
        this.props.nota1 = nota1
    }

    set nota2(nota2: number) {
        this.props.nota2 = nota2
    }

    set notatrabalho(notatrabalho: number) {
        this.props.notatrabalho = notatrabalho
    }

    set nome(nome: string) {
        this.props.nome = nome
    }

    set situacao(situacao: TSituacao) {
        this.props.situacao = situacao
    }

    set media(media: number) {
        this.props.media = media
    }

    toString() {
        return {
            "nome:": this.nome,
            "nota 1:": this.nota1,
            "nota 2:": this.nota2,
            "nota de trabalho:": this.notatrabalho,
            "media: ": this.media,
            "situacao": this.situacao
        }
    }
}

class Media {
    static calcularMedia(...notas: number[]) {
        let media = notas.reduce((ac, cu) => ac + cu) / notas.length
        return parseFloat(media.toFixed(2))
    }
}

type TSituacao = "aprovado" | "reprovado" | "recuperacao"


class Situacao {
    static verifcarSituacao(media: number): TSituacao {
        if (media >= 14) {
            return "aprovado"
        } else if (media >= 10 && media <= 14) {
            return "recuperacao"
        } else {
            return "reprovado"
        }
    }
}


class Validar {
    static validarNota(nota: number): boolean {
        if (nota >= 0 && nota <= 20) {
            return true
        } else {
            return false
        }
    }
}

function log(entrada: any) {
    console.log(entrada)
}

class Main {

    static main(): void {
        const prompt = PromptSync()
        let quantidade = parseFloat(prompt("Quantos alunos vai cadastar? "))
        let alunos: Aluno[] = []

        for (let i = 0; i < quantidade; i++) {
            let nome = prompt("Digite o nome: ")
            let nota1 = parseFloat(prompt("Digite a nota 1: "))
            let nota1Valida = Validar.validarNota(nota1)
            while (nota1Valida === false) {
                console.log("Nota inválida! Digite novamente.")
                nota1 = parseFloat(prompt("Digite a nota 1: "))
                nota1Valida = Validar.validarNota(nota1)
            }

            let nota2 = parseFloat(prompt("Digite a nota 2: "))
            let nota2Valida = Validar.validarNota(nota2)
            while (nota2Valida === false) {
                console.log("Nota inválida! Digite novamente.")
                nota2 = parseFloat(prompt("Digite a nota 2: "))
                nota2Valida = Validar.validarNota(nota2)
            }

            let notatrabalho = parseFloat(prompt("Digite a nota do trabalho: "))
            let notatrabalhoValida = Validar.validarNota(notatrabalho)
            while (notatrabalhoValida === false) {
                console.log("Nota inválida! Digite novamente.")
                notatrabalho = parseFloat(prompt("Digite a nota do trabalho: "))
                notatrabalhoValida = Validar.validarNota(notatrabalho)
            }

            log("")

            Validar.validarNota(nota1)
            Validar.validarNota(nota2)
            Validar.validarNota(notatrabalho)
            let media = Media.calcularMedia(nota1, nota2, notatrabalho)
            let situacao = Situacao.verifcarSituacao(media)
            const aluno = { nota1, nota2, notatrabalho, nome, media, situacao }

            alunos.unshift(Aluno.criar(aluno))
        }


        log(" ==== Resultado detalhado ====")

        log(alunos.map((aluno) => {
            return {
                "nome: ": aluno.nome,
                "nota 1: ": aluno.nota1,
                "nota 2: ": aluno.nota2,
                "nota de trabalho: ": aluno.notatrabalho,
                "media: ": aluno.media,
                "situação: ": aluno.situacao,
            }
        }))
        log("")
        log("")

        log(" ==== Todos resultados ====")
        log(`Total de alunos: ${alunos.length}`)
        log(`Aprovados: ${alunos.filter((aluno) => aluno.situacao === "aprovado").length}`)
        log(`Recuperação: ${alunos.filter((aluno) => aluno.situacao === "recuperacao").length}`)
        log(`Reprovados: ${alunos.filter((aluno) => aluno.situacao === "reprovado").length}`)
    }
}


Main.main()


export { }