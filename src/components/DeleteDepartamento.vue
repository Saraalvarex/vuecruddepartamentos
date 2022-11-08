<template>
 <div>
    <h5 style="color: red">Eliminar</h5>
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
    var id = this.$route.params.id;
    service.deleteDepartamento(id).then(result=> {
        console.log(result);
        this.$router.push("/");
    })
 }
};
</script>

<style scoped>

</style>