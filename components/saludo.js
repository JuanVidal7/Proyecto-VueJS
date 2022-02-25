Vue.component('saludo', {
    template:
    `
    <div>
        <h1>{{saludo}}</h1>
        <p>Soy hacker</p>
    
    </div>

    `,
    data(){
        return {
            saludo: 'Hola Mundito'
        }
    }
})