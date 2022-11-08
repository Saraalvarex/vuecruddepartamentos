<template>
 <div style="width: 900px; margin: 0 auto">
    <h1>Departamentos</h1>
    <div v-if="status==false">
            <img src="./../assets/loading.gif"/>>
        </div>
    <table class="table table-dark table-hover table-bordered border-warning" v-else>    
    <thead> 
        <tr>
        <th scope="col">Número</th>
        <th scope="col">Nombre</th>
        <th scope="col">Localidad</th>
        <th></th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="depart in departamentos" :key="depart">
        <th scope="row">{{depart.numero}}</th>
        <td>{{depart.nombre}}</td>
        <td>{{depart.localidad}}</td>
    <td>
        <router-link class="btn btn-outline-light" :to="'/detalles/'+depart.numero+'/'+depart.nombre+'/'+depart.localidad">Detalles</router-link>
        <router-link class="btn btn-outline-warning" :to="'/modificar/'+depart.numero">Modificar</router-link>
        <router-link class="btn btn-outline-danger" :to="'/delete/'+depart.numero">Eliminar</router-link>
    </td>
        </tr>
    </tbody>
    </table>
 </div>
</template>

<script>
import ServiceDepartamentos from './../services/ServiceDepartamentos';
const service = new ServiceDepartamentos();

export default {
 name: 'DepartamentosComponent',
 data() {
 return {
        departamentos: [],
        status: false
    };
 },
 methods: {
    
 },
 mounted(){
    service.getDepartamentos().then(result=>{
        this.departamentos=result;
        this.status=true
    })
 }
};
</script>

<style scoped>

</style>