 <template>
  <div class="home">
    <h1>Welcome to the Home Page</h1>
    <p>This is the content of the home page.</p>
    {{ userInfo.username }}的年龄是{{ userInfo.age }}
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/modules/user'
const userStore = useUserStore()
let userInfo = userStore.userInfo
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  /* Add your custom styles for the home page here */
}
</style>
