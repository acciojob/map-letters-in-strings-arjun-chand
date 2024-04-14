//your JS code here. If required.
function mapLetters(str){
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if(obj[element] === undefined){
            obj[element] = [i];
        }
        else{
            obj[element].push(i);
        }
    }
    return(obj);
}

const str = prompt("Enter str :")
alert(JSON.strigify(mapLetters(str)));