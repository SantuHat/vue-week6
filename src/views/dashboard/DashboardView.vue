<template>
  <h2>這是後台</h2>
  <nav>
    <RouterLink to="/admin/order">訂單列表</RouterLink> |
    <RouterLink to="/admin/products">產品列表</RouterLink> |
    <RouterLink to="/">回到前台</RouterLink> |
    <!-- <RouterLink to="/cart">列表</RouterLink> | -->
  </nav>
  <RouterView></RouterView>
</template>

<script>
import axios from 'axios'
const { VITE_API_URL } = import.meta.env

export default {
  methods: {
    // 驗證登入
    checkAdmin () {
      axios
        .post(`${VITE_API_URL}api/user/check`)
        .then((res) => {
          console.log('驗證成功', res.data.success)
        })
        .catch((error) => {
          alert(error.response.data.message)
          // 驗證失敗回登入頁
          this.$router.push('/login')
        })
    }

  },
  mounted () {
    // 取出 Token
    const token = document.cookie.replace(
      // 須與瀏覽器中的key一致
      /(?:(?:^|.*;\s*)week6Token\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    )
    axios.defaults.headers.common.Authorization = token

    this.checkAdmin()
  }
}
</script>
