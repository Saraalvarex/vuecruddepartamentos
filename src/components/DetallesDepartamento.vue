<template>
<div class="card" style="width: 18rem; margin: 0 auto;">
  <img class="card-img-top" src="./../assets/burns.jpg" alt="imagen">
  <div class="card-body">
    <h5 class="card-title">Detalles del departamento nº {{$route.params.numero}}</h5>
    <p class="card-text">descripcion</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Nombre: {{$route.params.nombre}}</li>
    <li class="list-group-item">Localidad: {{$route.params.localidad}}</li>
  </ul>
  <div class="card-body">
   <router-link to="/" class="btn btn-warning">
    <span aria-hidden="true">&larr;</span> Back
   </router-link>
    <!-- <a href="#" class="card-link">Link</a> -->
  </div>
</div>
</template>

<script>
export default {
 name: 'DetallesDepartamento'
};
</script>

<style scoped>

</style>