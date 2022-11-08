<template>
 <div>
    <h1>Detalles Departamento</h1>
    <router-link to="/" class="btn btn-warning">Volver</router-link>
    <h2>
        Nombre: {{$route.params.nombre}}
    </h2>
 </div>
</template>

<script>
export default {
 name: 'DetallesDepartamento',
 data() {
    return {
    
    };
 },
};
</script>

<style scoped>

</style>