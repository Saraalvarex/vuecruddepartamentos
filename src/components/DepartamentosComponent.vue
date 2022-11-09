<template>
 <div style="width: 900px; margin: 0 auto">
    <h1>Departamentos</h1>
    <div v-if="status==false">
            <img src="./../assets/loading.gif"/>
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
        <!-- <router-link class="btn btn-outline-danger" :to="'/delete/'+depart.numero">Eliminar</router-link> -->
        <button class="btn btn-outline-danger" @click="deleteItem(depart.numero)">Eliminar</button>
    </td>
        </tr>
    </tbody>
    </table>
 </div>
</template>

<script>
import ServiceDepartamentos from './../services/ServiceDepartamentos';
const Swal = require('sweetalert2')
const service = new ServiceDepartamentos();

export default {
name: 'DepartamentosComponent',
data() {
 return {
        departamentos: [], departamento: null, status: false
    };
},
props: ['id'],
methods: {
    deleteItem(id){
        service.findDepartamento(id).then(result => {
            this.departamento=result;
        });
        Swal.fire({
            title: '¿Estás seguro de que quieres eliminar el departamento nº '+id+'?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '##54FF72',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Borrar'
        }).then((result) => {
        if (result.isConfirmed) {
            service.deleteDepartamento(id).then(result=> {
                console.log(result);
                service.getDepartamentos().then(result=>{
                    this.departamentos=result;
                })
            })
            Swal.fire(   
            '¡Borrado!',
            'Tu departamento ha sido eliminado.',
            'success'
            )
        }
    })
}
},
mounted(){
    service.getDepartamentos().then(result=>{
        this.departamentos=result;
        this.status=true;
    })
 },
watch: {
    //EL CONTROL DE LA VARIABLE SE REALIZA 
    //MEDIANTE STRING Y NO SE UTILIZA LA PALABRA this
    '$route.params.numero'(nextVal, oldVal){
    //SI HA CAMBIADO, REALIZAMOS ACCIONES
    if (nextVal != oldVal){
        //ACCIONES
        this.mostrarDoble();
        }
    }
    },
};
</script>

<style scoped>

</style>