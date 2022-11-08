<template>
<div id="modal" class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
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