<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

const Route = useRoute(); //obtener parametros 
const Router = useRouter(); //redireccionar
const blog = {
  title: "",
  content: ""  //al parecer tiene conflictos con otras directivas, y no sé cual, por eso no aparece en el input
}

const mostrarBlogs = () => {
  axios.get(`/api/blog/${Route.params.id}`)
    .then(response => {
      const { title, content } = response.data.element;
      blog.title = title;
      blog.content = content;
      console.log(response.data.element);
      console.log(blog);
    })
    .catch(err => {
      blog.value = [];
    })
}

const actualizar = () => {
  axios.put(`/api/blog/${Route.params.id}`, blog)
    .then(response => {
      Router.push('/blogs');
    })
    .catch(err => {
      console.log('crear' + err);
    })
}

onMounted(() => {
  mostrarBlogs();
})

</script>
<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h4>Crear Blog</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="actualizar">
            <div class="row">
              <div class="col-12 mb-2">
                <div class="form-group">
                  <label>Título</label>
                  <input type="text" class="form-control" v-model="blog.title">
                </div>
              </div>
              <div class="col-12 mb-2">
                <div class="form-floating">
                  <textarea class="form-control" id="floatingTextarea2" v-model="blog.content"
                    style="height: 100px"></textarea>
                  <label for="floatingTextarea2">Contenido</label>
                </div>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-primary">Guardar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>