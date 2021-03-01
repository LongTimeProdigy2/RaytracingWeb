import Color from "./Color.js";
import Vector2 from "./Vector2.js";
import Vector3 from "./Vector3.js";
import Sphere from "./Sphere.js";
import Camera from "./Camera.js";
import AmbientLight from "./AbientLight.js";
import PointLight from "./PointLight.js";
import DirectionalLight from "./DirectionalLight.js";
import Rect from "./Rect.js";

var canvas = document.getElementById("RayTrace");
var ctx = canvas.getContext("2d");
ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
var id = ctx.getImageData(0, 0, canvas.clientWidth, canvas.clientHeight);
var pixels = id.data;

const Screen = new Rect(0, 0, canvas.clientWidth, canvas.clientHeight);

const camera = new Camera(new Vector3(0, 0, 0), new Vector3(0, 0, 0), 1, 90);
//#region CameraPosition Button
//#region Position
// X
var CameraPositionX = document.getElementById("CameraPositionX");
CameraPositionX.onchange = () =>{
    camera.position.x = Number(CameraPositionX.value);
    CanvasUpdate();
}
var CameraPositionXUPButton = document.getElementById("CameraPositionXUP");
CameraPositionXUPButton.onclick = () => {
    CameraPositionX.value = Number(CameraPositionX.value) + 1;
    camera.position.x = Number(CameraPositionX.value);
    CanvasUpdate();
}
var CameraPositionXDOWNButton = document.getElementById("CameraPositionXDOWN");
CameraPositionXDOWNButton.onclick = () => {
    CameraPositionX.value = Number(CameraPositionX.value) - 1;
    camera.position.x = Number(CameraPositionX.value);
    CanvasUpdate();
}
// Y
var CameraPositionY = document.getElementById("CameraPositionY");
CameraPositionY.onchange = () =>{
    camera.position.y = Number(CameraPositionY.value);
    CanvasUpdate();
}
var CameraPositionYUPButton = document.getElementById("CameraPositionYUP");
CameraPositionYUPButton.onclick = () => {
    CameraPositionY.value = Number(CameraPositionY.value) + 1;
    camera.position.y = Number(CameraPositionY.value);
    CanvasUpdate();
}
var CameraPositionYDOWNButton = document.getElementById("CameraPositionYDOWN");
CameraPositionYDOWNButton.onclick = () => {
    CameraPositionY.value = Number(CameraPositionY.value) - 1;
    camera.position.y = Number(CameraPositionY.value);
    CanvasUpdate();
}
// Z
var CameraPositionZ = document.getElementById("CameraPositionZ");
CameraPositionZ.onchange = () =>{
    camera.position.z = Number(CameraPositionZ.value);
    CanvasUpdate();
}
var CameraPositionZUPButton = document.getElementById("CameraPositionZUP");
CameraPositionZUPButton.onclick = () => {
    CameraPositionZ.value = Number(CameraPositionZ.value) + 1;
    camera.position.z = Number(CameraPositionZ.value);
    CanvasUpdate();
}
var CameraPositionZDOWNButton = document.getElementById("CameraPositionZDOWN");
CameraPositionZDOWNButton.onclick = () => {
    CameraPositionZ.value = Number(CameraPositionZ.value) - 1;
    camera.position.z = Number(CameraPositionZ.value);
    CanvasUpdate();
}
CameraPositionX.value = camera.position.x;
CameraPositionY.value = camera.position.y;
CameraPositionZ.value = camera.position.z;
//#endregion
//#region Rotation
// X
var CameraRotationX = document.getElementById("CameraRotationX");
CameraRotationX.onchange = () =>{
    camera.rotation.x = Number(CameraRotationX.value) * Math.PI / 180;
    CanvasUpdate();
}
var CameraRotationXUPButton = document.getElementById("CameraRotationXUP");
CameraRotationXUPButton.onclick = () => {
    CameraRotationX.value = Number(CameraRotationX.value) + 1;
    camera.rotation.x = Number(CameraRotationX.value) * Math.PI / 180;
    CanvasUpdate();
}
var CameraRotationXDOWNButton = document.getElementById("CameraRotationXDOWN");
CameraRotationXDOWNButton.onclick = () => {
    CameraRotationX.value = Number(CameraRotationX.value) - 1;
    camera.rotation.x = Number(CameraRotationX.value) * Math.PI / 180;
    CanvasUpdate();
}

// Y
var CameraRotationY = document.getElementById("CameraRotationY");
CameraRotationY.onchange = () =>{
    camera.rotation.y = Number(CameraRotationY.value) * Math.PI / 180;
    CanvasUpdate();
}
var CameraRotationYUPButton = document.getElementById("CameraRotationYUP");
CameraRotationYUPButton.onclick = () => {
    CameraRotationY.value = Number(CameraRotationY.value) + 1;
    camera.rotation.y = Number(CameraRotationY.value) * Math.PI / 180;
    CanvasUpdate();
}
var CameraRotationYDOWNButton = document.getElementById("CameraRotationYDOWN");
CameraRotationYDOWNButton.onclick = () => {
    CameraRotationY.value = Number(CameraRotationY.value) - 1;
    camera.rotation.y = Number(CameraRotationY.value) * Math.PI / 180;
    CanvasUpdate();
}

// Z
var CameraRotationZ = document.getElementById("CameraRotationZ");
CameraRotationZ.onchange = () =>{
    camera.rotation.z = Number(CameraRotationZ.value) * Math.PI / 180;
    CanvasUpdate();
}
var CameraRotationZUPButton = document.getElementById("CameraRotationZUP");
CameraRotationZUPButton.onclick = () => {
    CameraRotationZ.value = Number(CameraRotationZ.value) + 1;
    camera.rotation.z = Number(CameraRotationZ.value) * Math.PI / 180;
    CanvasUpdate();
}
var CameraRotationZDOWNButton = document.getElementById("CameraRotationZDOWN");
CameraRotationZDOWNButton.onclick = () => {
    CameraRotationZ.value = Number(CameraRotationZ.value) - 1;
    camera.rotation.z = Number(CameraRotationZ.value) * Math.PI / 180;
    CanvasUpdate();
}
CameraRotationX.value = camera.rotation.x;
CameraRotationY.value = camera.rotation.y;
CameraRotationZ.value = camera.rotation.z;
//#endregion
//#region FOV
var CameraFOV = document.getElementById("CameraFOV");
CameraFOV.onchange = () => {
    camera.fov = Number(CameraFOV.value);
    CanvasUpdate();
}
var CameraFOVUP = document.getElementById("CameraFOVUP");
CameraFOVUP.onclick = () => {
    CameraFOV.value = Number(CameraFOV.value) + 1;
    camera.fov = Number(CameraFOV.value);
    CanvasUpdate();
}
var CameraFOVDOWN = document.getElementById("CameraFOVDOWN");
CameraFOVDOWN.onclick = () => {
    CameraFOV.value = Number(CameraFOV.value) - 1;
    camera.fov = Number(CameraFOV.value);
    CanvasUpdate();
}
CameraFOV.value = camera.fov;
//#endregion
//#endregion

const BACKGROUNDCOLOR = new Color(125, 125, 125, 255);
//#region BackGround
var BackgroundColorR = document.getElementById("BackgroundColorR");
BackgroundColorR.onchange = () => {
    BACKGROUNDCOLOR.r = Number(BackgroundColorR.value);
    CanvasUpdate();
}
var BackgroundColorG = document.getElementById("BackgroundColorG");
BackgroundColorG.onchange = () => {
    BACKGROUNDCOLOR.g = Number(BackgroundColorG.value);
    CanvasUpdate();
}
var BackgroundColorB = document.getElementById("BackgroundColorB");
BackgroundColorB.onchange = () => {
    BACKGROUNDCOLOR.b = Number(BackgroundColorB.value);
    CanvasUpdate();
}
BackgroundColorR.value = BACKGROUNDCOLOR.r;
BackgroundColorG.value = BACKGROUNDCOLOR.g;
BackgroundColorB.value = BACKGROUNDCOLOR.b;
//#endregion

var boundCount = 3;
var shadowMerge = false;
var shadowMergeIntensity = 0.3;
//#region Reflection & Lighting
var BoundingCount = document.getElementById("BoundingCount");
BoundingCount.value = boundCount;
BoundingCount.onchange = () => {
    boundCount = Number(BoundingCount.value);
    CanvasUpdate();
}

var ShadowMerge = document.getElementById("ShadowMerge");
ShadowMerge.checked = shadowMerge;
ShadowMerge.onchange = () => {
    shadowMerge = ShadowMerge.checked;
    CanvasUpdate();
}

var ShadowMergeIntensity = document.getElementById("ShadowMergeIntensity");
ShadowMergeIntensity.value = shadowMergeIntensity;
ShadowMergeIntensity.onchange = () => {
    shadowMergeIntensity = Number(ShadowMergeIntensity.value);
    CanvasUpdate();
}
//#endregion


var lights = [
    new AmbientLight(0.2), 
    new PointLight(0.4, new Vector3(0, 1, 2), 1), 
    new DirectionalLight(0.4, new Vector3(1, 4, 4)), 
]
//#region Lighting
//#region Ambient
var AmbientIntensity = document.getElementById("AmbientIntensity");
AmbientIntensity.onchange = () => {
    lights[0].intensity = Number(AmbientIntensity.value);
    CanvasUpdate();
}
AmbientIntensity.value = lights[0].intensity;
//#endregion
//#region Direciontal
var DirectionalIntensity = document.getElementById("DirectionalIntensity");
DirectionalIntensity.onchange = () => {
    lights[2].intensity = Number(DirectionalIntensity.value);
    CanvasUpdate();
}
DirectionalIntensity.value = lights[2].intensity;

var DirectionVector3X = document.getElementById("DirectionVector3X");
DirectionVector3X.onchange = () => {
    lights[2].direction.x = Number(DirectionVector3X.value);
    CanvasUpdate();
}
DirectionVector3X.value = lights[2].direction.x;

var DirectionVector3Y = document.getElementById("DirectionVector3Y");
DirectionVector3Y.onchange = () => {
    lights[2].direction.y = Number(DirectionVector3Y.value);
    CanvasUpdate();
}
DirectionVector3Y.value = lights[2].direction.y;

var DirectionVector3Z = document.getElementById("DirectionVector3Z");
DirectionVector3Z.onchange = () => {
    lights[2].direction.z = Number(DirectionVector3Z.value);
    CanvasUpdate();
}
DirectionVector3Z.value = lights[2].direction.z;
//#endregion
//#region Point
var PointIntensity = document.getElementById("PointIntensity");
PointIntensity.onchange = () => {
    lights[1].intensity = Number(PointIntensity.value);
    CanvasUpdate();
}
PointIntensity.value = lights[1].intensity;

var PointVector3X = document.getElementById("PointVector3X");
PointVector3X.onchange = () => {
    lights[1].position.x = Number(PointVector3X.value);
    CanvasUpdate();
}
PointVector3X.value = lights[1].position.x;

var PointVector3Y = document.getElementById("PointVector3Y");
PointVector3Y.onchange = () => {
    lights[1].position.y = Number(PointVector3Y.value);
    CanvasUpdate();
}
PointVector3Y.value = lights[1].position.y;

var PointVector3Z = document.getElementById("PointVector3Z");
PointVector3Z.onchange = () => {
    lights[1].position.z = Number(PointVector3Z.value);
    CanvasUpdate();
}
PointVector3Z.value = lights[1].position.z;
//#endregion
//#endregion

var spheres = [
    new Sphere(
        "sphere_red", 
        new Vector3(0, -0.7, 2), 
        0.3, 
        new Color(255, 0, 0, 255), 
        500, 
        0.5
    ),
    new Sphere(
        "sphere_green", 
        new Vector3(-2, -0.5, 4), 
        1, 
        new Color(0, 255, 0, 255), 
        10, 
        0.4
    ),  
    new Sphere(
        "sphere_blue", 
        new Vector3(2, 1, 3), 
        1, 
        new Color(0, 0, 255, 255), 
        500, 
        0.3
    ),
    // plane (Just big shpere)
    new Sphere(
        "plane", 
        new Vector3(0, -5001, 0), 
        5000, 
        new Color(255, 255, 0, 255), 
        1000, 
        0.1
    )
]
//#region Spheres
//#region Position
var RedPositionX = document.getElementById("RedPositionX");
var RedPositionY = document.getElementById("RedPositionY");
var RedPositionZ = document.getElementById("RedPositionZ");
var GreenPositionX = document.getElementById("GreenPositionX");
var GreenPositionY = document.getElementById("GreenPositionY");
var GreenPositionZ = document.getElementById("GreenPositionZ");
var BluePositionX = document.getElementById("BluePositionX");
var BluePositionY = document.getElementById("BluePositionY");
var BluePositionZ = document.getElementById("BluePositionZ");
var PlanePositionX = document.getElementById("PlanePositionX");
var PlanePositionY = document.getElementById("PlanePositionY");
var PlanePositionZ = document.getElementById("PlanePositionZ");
RedPositionX.onchange = () => {
    spheres[0].center.x = Number(RedPositionX.value);
    CanvasUpdate();
}
RedPositionX.value = spheres[0].center.x;
RedPositionY.onchange = () => {
    spheres[0].center.y = Number(RedPositionY.value);
    CanvasUpdate();
}
RedPositionY.value = spheres[0].center.y;
RedPositionZ.onchange = () => {
    spheres[0].center.z = Number(RedPositionZ.value);
    CanvasUpdate();
}
RedPositionZ.value = spheres[0].center.z;

GreenPositionX.onchange = () => {
    spheres[1].center.x = Number(GreenPositionX.value);
    CanvasUpdate();
}
GreenPositionX.value = spheres[1].center.x;
GreenPositionY.onchange = () => {
    spheres[1].center.y = Number(GreenPositionY.value);
    CanvasUpdate();
}
GreenPositionY.value = spheres[1].center.y;
GreenPositionZ.onchange = () => {
    spheres[1].center.z = Number(GreenPositionZ.value);
    CanvasUpdate();
}
GreenPositionZ.value = spheres[1].center.z;

BluePositionX.onchange = () => {
    spheres[2].center.x = Number(BluePositionX.value);
    CanvasUpdate();
}
BluePositionX.value = spheres[2].center.x;
BluePositionY.onchange = () => {
    spheres[2].center.y = Number(BluePositionY.value);
    CanvasUpdate();
}
BluePositionY.value = spheres[2].center.y;
BluePositionZ.onchange = () => {
    spheres[2].center.z = Number(BluePositionZ.value);
    CanvasUpdate();
}
BluePositionZ.value = spheres[2].center.z;

PlanePositionX.onchange = () => {
    spheres[3].center.x = Number(PlanePositionX.value);
    CanvasUpdate();
}
PlanePositionX.value = spheres[3].center.x;
PlanePositionY.onchange = () => {
    spheres[3].center.y = Number(PlanePositionY.value);
    CanvasUpdate();
}
PlanePositionY.value = spheres[3].center.y;
PlanePositionZ.onchange = () => {
    spheres[3].center.z = Number(PlanePositionZ.value);
    CanvasUpdate();
}
PlanePositionZ.value = spheres[3].center.z;
//#endregion
//#region Radius
var RedRadius = document.getElementById("RedRadius");
var GreenRadius = document.getElementById("GreenRadius");
var BlueRadius = document.getElementById("BlueRadius");
var PlaneRadius = document.getElementById("PlaneRadius");

RedRadius.onchange = () => {
    spheres[0].radius = Number(RedRadius.value);
    CanvasUpdate();
}
RedRadius.value = spheres[0].radius;

GreenRadius.onchange = () => {
    spheres[1].radius = Number(GreenRadius.value);
    CanvasUpdate();
}
GreenRadius.value = spheres[1].radius;

BlueRadius.onchange = () => {
    spheres[2].radius = Number(BlueRadius.value);
    CanvasUpdate();
}
BlueRadius.value = spheres[2].radius;

PlaneRadius.onchange = () => {
    spheres[3].radius = Number(PlaneRadius.value);
    CanvasUpdate();
}
PlaneRadius.value = spheres[3].radius;
//#endregion
//#region Specular
var RedSpecular = document.getElementById("RedSpecular");
var GreenSpecular = document.getElementById("GreenSpecular");
var BlueSpecular = document.getElementById("BlueSpecular");
var PlaneSpecular = document.getElementById("PlaneSpecular");

RedSpecular.onchange = () => {
    spheres[0].specular = Number(RedSpecular.value);
    CanvasUpdate();
}
RedSpecular.value = spheres[0].specular;

GreenSpecular.onchange = () => {
    spheres[1].specular = Number(GreenSpecular.value);
    CanvasUpdate();
}
GreenSpecular.value = spheres[1].specular;

BlueSpecular.onchange = () => {
    spheres[2].specular = Number(BlueSpecular.value);
    CanvasUpdate();
}
BlueSpecular.value = spheres[2].specular;

PlaneSpecular.onchange = () => {
    spheres[3].specular = Number(PlaneSpecular.value);
    CanvasUpdate();
}
PlaneSpecular.value = spheres[3].specular;
//#endregion
//#region Refelction
var RedReflection = document.getElementById("RedReflection");
var GreenReflection = document.getElementById("GreenReflection");
var BlueReflection = document.getElementById("BlueReflection");
var PlaneReflection = document.getElementById("PlaneReflection");

RedReflection.onchange = () => {
    spheres[0].reflective = Number(RedReflection.value);
    CanvasUpdate();
}
RedReflection.value = spheres[0].reflective;

GreenReflection.onchange = () => {
    spheres[1].reflective = Number(GreenReflection.value);
    CanvasUpdate();
}
GreenReflection.value = spheres[1].reflective;

BlueReflection.onchange = () => {
    spheres[2].reflective = Number(BlueReflection.value);
    CanvasUpdate();
}
BlueReflection.value = spheres[2].reflective;

PlaneReflection.onchange = () => {
    spheres[3].reflective = Number(PlaneReflection.value);
    CanvasUpdate();
}
PlaneReflection.value = spheres[3].reflective;
//#endregion
//#endregion

var Viewport = camera.GetViewport();

CanvasUpdate();

function CanvasUpdate(){
    if(canvas.getContext){
        Viewport = camera.GetViewport();
        var cameraRotationMatrix = camera.GetRotationMatrix();

        for(let x = -Screen.width / 2; x <= Screen.width / 2; ++x){
            for(let y = -Screen.height / 2; y <= Screen.height / 2; ++y){
                let directionToViewport = CanvasToViewport(x, y);
                directionToViewport = cameraRotationMatrix.MultiplyVector3(directionToViewport);
                
                var color = TraceRay(camera.position, directionToViewport, 1, Infinity, boundCount);
    
                var fixX = (x + Screen.width / 2);
                var fixY = (-y + Screen.height / 2);
                var off = (fixY * Screen.width + fixX) * 4;
                pixels[off      ] = color.r;
                pixels[off + 1  ] = color.g;
                pixels[off + 2  ] = color.b;
                pixels[off + 3  ] = color.a;
    
            }
        }
        
        ctx.putImageData(id, 0, 0);
    }
}

function CanvasToViewport(x, y) {
    const xRatio = Viewport.width / Screen.width;
    const yRatio = Viewport.height / Screen.height;
    return new Vector3(x * xRatio, y * yRatio, camera.distance);
}

function CheckRay(origin, direction, sphere) {
    const center = sphere.center;
    const radius = sphere.radius;
    
    const directionOC = Vector3.Minus(origin, center)
    const k1 = Vector3.Dot(direction, direction);
    const k2 = Vector3.Dot(directionOC, direction) * 2;
    const k3 = Vector3.Dot(directionOC, directionOC) - radius * radius;
    const discriminant = k2 * k2 - 4 * k1 * k3;
    if(discriminant < 0){
        return {t1: Infinity, t2: Infinity};
    }

    let t1 = (-k2 + Math.sqrt(discriminant)) / (2 * k1);
    let t2 = (-k2 - Math.sqrt(discriminant)) / (2 * k1);

    return {t1: t1, t2: t2};
}

function GetClosestIntersction(origin, direction, t_min, t_max){
    var closest_t = Infinity;
    var closest_sphere = null;

    spheres.forEach(sphere => {
        var result = CheckRay(origin, direction, sphere);

        if(result.t1 >= t_min && result.t1 <= t_max && result.t1 < closest_t){
            closest_t = result.t1;
            closest_sphere = sphere;
        }

        if(result.t2 >= t_min && result.t2 <= t_max && result.t2 < closest_t){
            closest_t = result.t2;
            closest_sphere = sphere;
        }
    });

    return {sphere: closest_sphere, t: closest_t};
}

function TraceRay(origin, direction, t_min, t_max, depth) {
    var result = GetClosestIntersction(origin, direction, t_min, t_max);
    
    if(result.sphere == null){
        return BACKGROUNDCOLOR;
    }

    let hitPoint = Vector3.Add(origin, Vector3.MultiplyScalar(direction, result.t));
    let normal = Vector3.Minus(hitPoint, result.sphere.center).Normalized();
    let intensity = ComputeLight(hitPoint, normal, Vector3.MultiplyScalar(direction, -1), result.sphere.specular);
    let localColor = result.sphere.color.Multiply(intensity);

    let reflective = result.sphere.reflective;
    if(depth <= 0 || reflective <= 0){
        return localColor;
    }

    let reflectDirection = ReflectedRay(Vector3.MultiplyScalar(direction, -1), normal);
    let reflectedColor = TraceRay(hitPoint, reflectDirection, 0.001, Infinity, depth - 1);

    let color = Color.Add(localColor.Multiply(1 - reflective), reflectedColor.Multiply(reflective));
    return color;
}

function ComputeLight(hitPoint, normal, viewDirection, specular) {
    let intensity = 0;
    let t_max = Infinity;
    for(let i = 0; i < lights.length; ++i){
        let light = lights[i];

        if(light.type == "ambient"){
            intensity += light.intensity;
        }
        else{
            let lightDirection;
            if(light.type == "point"){
                lightDirection = Vector3.Minus(light.position, hitPoint);
                t_max = light.distance;
            }
            else{
                lightDirection = light.direction;
                t_max = Infinity;
            }

            // shadow
            var shadowData = GetClosestIntersction(hitPoint, lightDirection, 0.001, t_max);
            if(shadowData.sphere != null){
                if(shadowMerge){
                    intensity = shadowMergeIntensity;
                }
                continue;
            }
            
            // Diffuse
            let dot = Vector3.Dot(normal, lightDirection);
            if(dot > 0){
                intensity += light.intensity * dot / (normal.Length() * lightDirection.Length());
            }

            // Specular
            if(specular != -1){
                let reflectDirection = ReflectedRay(lightDirection, normal);
                let r_dot_v = Vector3.Dot(reflectDirection, viewDirection);
                if(r_dot_v > 0){
                    intensity += light.intensity * Math.pow(r_dot_v / (reflectDirection.Length() * viewDirection.Length()), specular);
                }
            }
        }
    };

    return intensity;
}

function ReflectedRay(direction, normal) {
    return Vector3.Minus(Vector3.MultiplyScalar(Vector3.MultiplyScalar(normal, Vector3.Dot(normal, direction)), 2), direction);
}