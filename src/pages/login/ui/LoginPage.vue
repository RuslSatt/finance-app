<template>
    <div class="login">
        <div class="login-container">
            <div class="login-preview"></div>
            <div class="login-form"></div>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
.login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.login-container {
    display: flex;
    width: 100%;
    height: 100%;
}

.login-preview {
    flex: 0 0 50%;
    background-color: #fff;
}

.login-form {
    flex: 0 0 50%;
    background-color: #686868;
}
</style>
