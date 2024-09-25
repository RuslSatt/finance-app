<template>
    <div class="wrapper">
        <div class="container">
            <div class="preview">
                <p>Welcome back</p>
            </div>
            <div class="form">
                <p class="form-title">Login</p>
                <div class="form-content">
                    <p-input type="email" placeholder="Email" />
                    <p-input type="password" placeholder="Password" />
                    <p-button class="btn-login" type="submit" label="Login" />
                    <p-button class="btn-auth" link label="Don't have an account? Register" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>

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

.form-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    padding: 0 20px;
    max-width: 350px;
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
