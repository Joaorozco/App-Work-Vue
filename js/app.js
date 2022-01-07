new Vue({
    el:'#taskApp',
    data: {
        nameApp: 'Tareas',
        tareas: [
            
        ]
    },
    methods: {
        eliminarTarea: function(tarea){
            this.tareas.splice(this.tareas.indexOf(tarea), 1)
        },
        agregarTarea: function(e){
            e.preventDefault();
            // console.log(e);
            this.tareas.push({
                titulo: this.tareas.titulo,
                hecho: false
            });
            this.tareas.titulo = '';
        }
    }
})