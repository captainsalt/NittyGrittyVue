import Vue from "vue";
import { Component } from 'vue-property-decorator';
import "./counter.scss"

@Component
export default class CounterComponent extends Vue {
    count: number = 0;

    increment() : void {
        this.count++;
    }
}