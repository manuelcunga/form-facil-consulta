import Home from '../views';
import Atendimentos from '../views/atendimentos.vue';
import Parabens from '../views/Parabens.vue';
import Revisao from '../views/revisao.vue';

export default [{
        path: '/',
        name: 'home',
        component: Home,
    }, {
        path: '/atendimentos',
        name: 'atendimentos',
        component: Atendimentos
    }, {
        path: '/revisao',
        name: 'listar-profissional',
        component: Revisao
    },
    {
        path: '/parabens',
        name: 'parabens',
        component: Parabens
    }
];