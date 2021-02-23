import Light from "./Light.js";

export default class PointLight extends Light{
    constructor(intensity, position){
        super("point", intensity);

        this.position = position;
    }
}