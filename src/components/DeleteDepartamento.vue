<template>
  <div>
    <h1>Delete</h1>
    <button @click="deleteDepartamento()" class="btn btn-danger">Confirmar</button>
  </div>
</template>

<script>
import ServiceDepartamentos from './../services/ServiceDepartamentos';
const service = new ServiceDepartamentos();

export default {
 name: 'DeleteDepartamento',
 data() {
    return {
        departamento: null, id: 0
    };
 },
 mounted(){
    service.findDepartamento(this.$route.params.id).then(result => {
        this.departamento=result;
    });
 },
 methods: {
    deleteDepartamento(){
        var id = this.$route.params.id;
        service.deleteDepartamento(id).then(result=> {
        console.log(result);
        this.$router.push("/");
    })
    }
 }
};
</script>

<style scoped>

</style>