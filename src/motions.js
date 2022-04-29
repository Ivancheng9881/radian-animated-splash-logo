const timingArr = [1, 2, 3];

const timing = () => {
    let arr = timingArr;
    console.log(arr);
    for(let i = 1; i < arr.length; i++){
        if(i === arr[i]) {
            console.log(arr[i]);
        } else {
            console.log(arr[i]);
        }
    }
}

const template1 = ({rotate, x}) => {
    return `rotate(${rotate}) translateX({${x}})`
}

export default timing;


console.log(timing());