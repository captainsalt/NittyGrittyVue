import Vue from "vue";
import { Component } from 'vue-property-decorator';

@Component
export default class CounterComponent extends Vue {
    count: number = 0;

    increment() : void {
        this.count++;
    }
}