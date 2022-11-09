<template>
    <h1>Update</h1>
 <div style="width: 500px; margin: 0 auto" v-if="departamento">
    <form method="post" v-on:submit.prevent="modificarDepart()">
        <label style="color: red">Estás modificando departamento número: {{departamento.numero}}</label>
        <input class="form-control" type="hidden"
        v-model="departamento.numero"
        /><br/>
        <label>Nombre: </label>
        <input class="form-control" type="text"
        v-model="departamento.nombre"
        /><br/>
        <label>Localidad: </label>
        <input class="form-control" type="text"
        v-model="departamento.localidad"
        /><br/>
        <button class="btn btn-success">Modificar</button>
    </form>
 </div>
</template>

<script>
import ServiceDepartamentos from './../services/ServiceDepartamentos';
const service = new ServiceDepartamentos();

export default {
 name: 'UpdateDepartamento',
 data() {
    return {
        departamento: null
        // id: 0
    }
 },
 mounted(){
    // this.id = ;
    service.findDepartamento(this.$route.params.id).then(result => {
        this.departamento=result;
    });
 },
 methods: {
    modificarDepart(){
        service.updateDepartamento(this.departamento).then(result => {
            console.log(result);
            this.$router.push("/")
        });
    }
 }
};
</script>

<style scoped>

</style>