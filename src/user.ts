export class User {
  username: string;
  nome: string;
  idade: number;
  ativo: boolean;

  constructor(
    username: string,
    nome: string,
    idade: number
  ) {
    this.username = username;
    this.nome = nome;
    this.idade = idade;
    this.ativo = false;
  }

  mostrarNome() {
    if (this.ativo === false) {
      console.log(
        "O user não está ativo! Ative ele antes"
      );
      return;
    }
    console.log(
      `Nome: ${this.nome} - Username: ${this.username} - Ativo: ${this.ativo}`
    );
  }

  ativarUser() {
    this.ativo = true;
  }
}

//Nome da classe segue o padrão NomeDaClasse
//PascalCase

// nome de metodo e propriedade seguem o padrão nomeDoMetodo
//camelCase
