function makecircle(radius){
    return{
        radius,
        draw(){
            console.log('draw');
        }
    };
}

const circle1 = makecircle(1);
console.log(circle1);
