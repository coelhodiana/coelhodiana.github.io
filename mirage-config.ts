import { Server, Model, Factory, belongsTo, hasMany, RestSerializer } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
    let server = new Server({
        environment,

        serializers: {
            application: RestSerializer,
        },

        models: {
            project: Model
        },

        factories: {
            project: Factory.extend({
                id: 0,
                name: 'Nome projeto',
                description: 'Descrição do Projeto'
            }),
        },

        routes() {
            this.namespace = 'api';

            this.get('/projects', () => [
              { id: "1", name: "Luke" },
              { id: "2", name: "Leia" },
              { id: "3", name: "Anakin" },
            ]);
        }
    });

    return server;
}
