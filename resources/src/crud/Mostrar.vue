<script setup>

  import { onMounted, ref, watch } from 'vue';
  import axios from 'axios';

  const blogs = ref([]);

  const mostrarBlogs = () => {
    axios.get('/api/blog')
    .then(response=>{
      blogs.value = response.data;
      // console.log(response);
    })
    .catch(err=>{
      blogs.value = [];
    })
  }
  const borrarBlog = (id) => {
    if(confirm('¿Quieres eliminar este elemento?')){
      axios.delete(`/api/blog/${id}`)
      .then(response=>{
        mostrarBlogs();
      })
      .catch(err=>{
        console.log('BorrarBlog' + err);
      })
    }
  }

  onMounted(()=>{
    mostrarBlogs();
  })

</script>
<template>
  <h1>Xd</h1>
  <div class="row">
    <div class="col-12 mb-2">
      <!-- llamamos al componente para Crear   -->
      <router-link :to='{ name: "crearBlogs" }' class="btn btn-success"><i class="fas fa-plus-circle"></i></router-link>
    </div>
    <div class="col-12">
      <div class="table-responsive">
        <table class="table table-bordered">
          <thead class="bg-primary text-white">
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Contenido</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="blog in blogs" :key="blog.id">
              <td>{{ blog.id }}</td>
              <td>{{ blog.title }}</td>
              <td>{{ blog.content }}</td>
              <td>
                <!-- llamamos al componente para Editar     -->
                <router-link :to='{ name: "editarBlogs", params: { id: blog.id } }' class="btn btn-info"><i class="fas fa-edit"></i></router-link>
                <button type="button" @click="borrarBlog(blog.id)" class="btn btn-danger"><i class="fas fa-trash"></i></button>
              </td>
            </tr>
          </tbody>

        </table>
      </div>
    </div>
  </div>
</template>