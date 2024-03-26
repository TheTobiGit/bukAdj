export default defineNuxtRouteMiddleware((to, from) => {
    const user = false;

    // if (to.path === '/home' && !user) {
    //     return '/auth/login';
    // }

    if (to.path === '/auth/login' && user) {
        return '/home';
    }

    // if (to.path === '/auth/') {
    //     return '/auth/login';
    // }
})
