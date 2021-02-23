import Matrix3x3 from "./Matrix3x3.js"
import Rect from "./Rect.js";

export default class Camera{
    constructor(position, rotation, distance, fov){
        this.position = position;
        this.rotation = rotation;
        this.distance = distance;
        this.fov = fov;
    }

    GetViewport(){
        return new Rect(0, 0, 
            2 * this.distance * Math.tan((this.fov / 2) * Math.PI / 180), 2 * this.distance * Math.tan((this.fov / 2) * Math.PI / 180));
    }

    GetRotationMatrix(){
        let x = this.RotateXMatrix();
        let y = this.RotateYMatrix();
        let z = this.RotateZMatrix();

        return x.Multiply3x3(y.Multiply3x3(z));
    }

    RotateXMatrix(){
        return new Matrix3x3(
            1, 0, 0, 
            0, Math.cos(-this.rotation.x), -Math.sin(-this.rotation.x), 
            0, Math.sin(-this.rotation.x), Math.cos(-this.rotation.x)
        )
    }
    RotateYMatrix(){
        return new Matrix3x3(
            Math.cos(-this.rotation.y), 0, Math.sin(-this.rotation.y), 
            0, 1, 0, 
            -Math.sin(-this.rotation.y), 0, Math.cos(-this.rotation.y)
        )
    }
    RotateZMatrix(){
        return new Matrix3x3(
            Math.cos(-this.rotation.z), -Math.sin(-this.rotation.z), 0, 
            Math.sin(-this.rotation.z), Math.cos(-this.rotation.z), 0, 
            0, 0, 1
        )
    }
}