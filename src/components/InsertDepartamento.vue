<template>
 <div style="width: 500px; margin: 0 auto">
    <h1>Inserta un departamento</h1>
    <h3 style="color: red">{{mensaje}}</h3>
    <form method="post" v-on:submit.prevent="insertDepart()">
    <div class="mb-3">
        <label class="form-label">Numero departamento: </label>
        <input type="number" class="form-control" aria-describedby="textHelp" v-model="departamento.numero">
        <div id="textHelp" class="form-text">Escribe algo</div>
    </div>
    <div class="mb-3">
        <label class="form-label">Nombre departamento: </label>
        <input type="text" class="form-control" aria-describedby="textHelp" v-model="departamento.nombre">
    </div>
    <div class="mb-3">
        <label class="form-label">Localidad departamento: </label>
        <input type="text" class="form-control" aria-describedby="textHelp" v-model="departamento.localidad">
    </div>
    <button class="btn btn-success">Confirmar</button>
    </form>
 </div>
</template>

<script>
import ServiceDepartamentos from './../services/ServiceDepartamentos';
const service = new ServiceDepartamentos();
export default {
 name: 'InsertDepartamento',
 methods: {
    insertDepart(){
       service.insertDepartamentos(this.departamento).then(result=> {
        console.log(result)
        this.mensaje="Departamento insertado";
        this.$router.push("/");
       })
    }
}
 ,data() {
    return {
        mensaje: "",
        departamento : {
            "numero": 0,
            "nombre": "",
            "localidad": ""
        }
    };
 },
};
</script>

<style scoped>

</style>