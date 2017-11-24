import Vue from "vue";
import App from "./app.vue"
import Counter from "./components/simplecomponent.vue"

Vue.component("simpleComponent", Counter);

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    render: h => h(App)
});