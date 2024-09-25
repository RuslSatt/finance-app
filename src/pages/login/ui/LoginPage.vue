<template>
    <div class="wrapper">
        <div class="container">
            <div class="preview">
                <p>Welcome back</p>
            </div>
            <div class="form">
                <p class="form-title">Login</p>
                <AuthForm />
            </div>
        </div>
    </div>
</template>

<script setup>
import { AuthForm } from '@/features/auth';
</script>

<style scoped>
.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    display: flex;
    width: 100%;
    height: 100%;
}

.form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 0 0 50%;
    background-color: #fff;
    gap: 20px;
}

.form-title {
    font-size: 24px;
    font-weight: 700;
    color: var(--p-primary-color);
}

.preview {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 50%;
    background-color: #686868;
}

.btn-auth {
    font-size: 12px;
}
</style>
