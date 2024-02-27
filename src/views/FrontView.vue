<template>
  <h2>這是前台</h2>
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/about">About</RouterLink> |
    <RouterLink to="/products">產品列表</RouterLink> |
    <RouterLink to="/cart">購物車列表</RouterLink> |
    <RouterLink to="/admin">後台</RouterLink>
  </nav>
  <RouterView></RouterView>
</template>
