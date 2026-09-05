interface IAluno {
    id: number
    nome: string
    nota1: number
    nota2: number
    notatrabalho: number
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

    toString() {
        return {
            "nome:": this.nome,
            "nota 1:": this.nota1,
            "nota 2:": this.nota2,
            "nota de trabalho:": this.notatrabalho
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

class Resultado {
    static mostrarResultado(aluno: Aluno, media: number, situacao: TSituacao) {
        return {
            ...aluno.toString(),
            "media:": media,
            "situação:": situacao,
        }
    }
}

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

const aluno1: Aluno = Aluno.criar({ nome: "kaike bartolomeu", nota1: 10, nota2: 14, notatrabalho: 13 })
const aluno2: Aluno = Aluno.criar({ nome: "dinis", nota1: 18, nota2: 16, notatrabalho: 16 })
const aluno3: Aluno = Aluno.criar({ nome: "joaquim", nota1: 16, nota2: 4, notatrabalho: 18 })
const aluno4: Aluno = Aluno.criar({ nome: "franklim", nota1: 6, nota2: 4, notatrabalho: 8 })

const alunos : Aluno[] = [aluno1, aluno2, aluno3, aluno4]

alunos.forEach((aluno)=>{
    let media = Media.calcularMedia(aluno.nota1, aluno.nota2, aluno.notatrabalho)
    let situacao = Situacao.verifcarSituacao(media)
    let resultado = Resultado.mostrarResultado(aluno, media, situacao)
    console.log(resultado)
})


export{}