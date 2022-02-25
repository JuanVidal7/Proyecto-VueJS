Vue.component('hijo', {
    template: //HTML
    `
    <div>
        <h4>Componente Hijo</h4>
        <h5>{{numero}}</h5>
        
        <p>{{nombre}}</p>
    </div>
    `,
    props: ['numero'],
    data(){
        return{
            nombre: 'Juanchito'
        }
    }
})