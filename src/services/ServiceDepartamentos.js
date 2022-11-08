import axios from 'axios'
import Global from './../Global'

export default class ServiceDepartamentos {
    getDepartamentos(){
        return new Promise(function(resolve){
            var request = 'api/departamentos';
            var url = Global.url + request;
            var departamentos = [];
            axios.get(url).then(res=> {
                departamentos = res.data;
                resolve(departamentos)
            })
        });
    }
    insertDepartamentos(departamento){
        return new Promise(function(resolve){
            var request = '/api/departamentos';
            var url = Global.url + request;
            axios.post(url, departamento).then(response => {
                resolve(response.data)
            })
        })
    }
    //Metodo para buscar un departamento en el api
    //recibimos el id del departamento
    findDepartamento(iddepart){
        return new Promise(function(resolve){
            var request = "api/departamentos/"+iddepart;
            var url = Global.url+request;
            axios.get(url).then(response => {
                resolve(response.data)
            })
        })
    }
    //Confirmar modificar departamento
    updateDepartamento(departamento){
        return new Promise(function(resolve){
            var request = 'api/departamentos/'
            var url = Global.url+request;
            axios.put(url, departamento).then(res=> {
                resolve(res)
            })
        })
    }

    //Eliminar
    deleteDepartamento(iddepart){
        return new Promise(function(resolve){
            var request = 'api/departamentos/'+iddepart;
            var url = Global.url + request;
            axios.delete(url).then(res=> {
                resolve(res);
                console.log(resolve)
            });
        });
    }
}