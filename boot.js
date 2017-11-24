import Vue from "vue";
import App from "./app.vue.html"
import Counter from "./components/counter"

Vue.component("counter", Counter);

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    render: function(h) {
        return h(App);
    }
});