<template>

  <div class="page">
    
    <div class="flex-fill">
      
      <topbar msg="Deneme"></topbar>
      <!-- Content Box -->

      <div class="my-3 my-md-5">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title">Title</h3>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-lg-12">Content here</div>
                  </div>
                </div>

                <formBottomBar submitButtonText="a"></formBottomBar>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
  import topbar from './components/topbar.vue'
  import formBottomBar from './components/formBottomBar.vue'


  export default {
    name: 'App',
    components: {
      topbar, formBottomBar
    }
  }
</script>

<style>
 @import './tabler/assets/css/dashboard.css';
</style>