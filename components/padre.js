Vue.component('padre', {
    template: //HTML
    `
    <div>
        <h4>Componente padre</h4>
        <!-- Props para la comunicación entre componentes -->
        <!-- <hijo numero="16"></hijo> -->   

        <hijo :numero="numeroPadre"></hijo>
        <button @click="numeroPadre++">+</button>
        <input v-model="numeroPadre" />
    </div>
    `,
    data(){
        return{
            numeroPadre: 0
        }
    }
})