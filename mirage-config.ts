import {
  Factory,
  Model,
  RestSerializer,
  Server
} from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
  let server = new Server({
    environment,

    serializers: {
      application: RestSerializer,
    },

    models: {
      project: Model,
    },

    factories: {
      project: Factory.extend({
        id: 0,
        name: 'Nome projeto',
        description: 'Descrição do Projeto',
      }),
    },

    routes() {
      this.namespace = 'api';

      this.get('/projects', () => [
        {
          id: '0',
          name: 'Ostenta',
          description:
            'Aplicação web para registro de transações financeiras de entradas, gastos e investimentos.',
          url: 'https://www.ostentar.com.br/',
          img: './assets/ostenta.png'
        },
        {
          id: '1',
          name: 'Imersão Direito Eleitoral',
          description:
            'Landing Page do primeiro curso Imersão Direito Eleitoral 2022.',
          url: 'https://imersaodireitoeleitoral.com.br/',
          img: './assets/imersao.png'
        },
        {
          id: '2',
          name: 'Urban Cookie',
          description:
            'O Urban Cookie é um projeto que acontece na plataforma Instagram e se ocupa em compartilhar pequenas crônicas acompanhadas de ilustrações sobre diferentes personagens e contextos Urbanos.',
          url: 'https://urbancookie.github.io/',
          img: './assets/urbcookie.png'
        },
        {
          id: '3',
          name: 'Venda Verde',
          description:
            'E-commerce desenvolvido no Bootcamp Generation Brazil, tem como objetivo fortalecer o consumo local e a produção agrícola responsável e sustentável.',
          url: 'https://oivendaverde.herokuapp.com/',
          img: './assets/vv.png'
        },
        {
          id: '4',
          name: 'Amo Brindes',
          description:
            'amobrindes é um projeto open source que nasceu do React Bootcamp, realizado pela WoMakersCode.',
          url: 'https://amobrindes-womakerscode.netlify.app/',
          img: './assets/ostenta.png'
        },
        {
          id: '5',
          name: 'Chama no Zap',
          description:
            'Chama no Zap permite que o usuário envie uma mensagem para um número sem precisar salvar o contato.',
          url: 'https://dianacoelho.com.br/chamanozap/',
          img: './assets/imersao.png'
        },
      ]);
    },
  });

  return server;
}
