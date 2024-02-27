<template>
  <div class="container">
    <div class="row justify-content-center">
      <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
      <div class="col-8">
        <form class="form-signin" @submit.prevent="login">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              required
              autofocus
              v-model="user.username"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              required
              v-model="user.password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
            登入
          </button>
        </form>
      </div>
    </div>
    <p class="mt-5 mb-3 text-muted">&copy; 2023~∞ - 六角學院</p>
  </div>
</template>

<script>
import axios from 'axios'
const api = 'https://ec-course-api.hexschool.io/v2/admin/signin'
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      axios
        .post(api, this.user)
        .then((res) => {
          const { expired, token } = res.data
          console.log(token, expired)
          // cookie
          document.cookie = `week6Token=${token};week6Expires=${new Date(
            expired
          )};`
          // 跳轉到建立產品頁
          // window.location = 'products.html'
        })
        .catch((error) => {
          // 登入失敗
          alert(error.response.data.message)
        })
    }
  },
  mounted () {}
}
</script>
