import { LightningElement } from 'lwc';

export default class Example03 extends LightningElement {
name ="Aysen";
    changeHandler(){
        alert("Button has been clicked or text has been changed?")
    }
}