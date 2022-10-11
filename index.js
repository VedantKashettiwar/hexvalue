function RandomValue(a) {
    const randInt1 = Math.floor(Math.random() * a.length);
    const randInt2 = Math.floor(Math.random() * a.length);
    const randInt3 = Math.floor(Math.random() * a.length);
    const randInt4 = Math.floor(Math.random() * a.length);
    const randInt5 = Math.floor(Math.random() * a.length);
    const randInt6 = Math.floor(Math.random() * a.length);

    const value = a[randInt1]+a[randInt2]+a[randInt3]+a[randInt4]+a[randInt5]+a[randInt6];
    return "#"+ value;
}
const char = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
document.getElementById("btn").onclick = function(){
    console.log(RandomValue(char));
    const Hex=RandomValue(char);
    document.getElementById("input").value=Hex;
    document.body.style.backgroundColor=Hex;
    document.getElementById('error').innerHTML = '';
}
document.getElementById("Submit").onclick = function(){
    const Hexin = document.getElementById('input').value;
    console.log(Hexin);
    document.getElementById('error').innerHTML = '';
    if(Hexin.indexOf("#")==-1){
        window.alert("Enter Hex value with #");
        document.getElementById('input').value = '';
    }
    if(Hexin.length < 6){
        document.getElementById('error').innerHTML = 'Enter six character with #';
    }
    document.body.style.backgroundColor=Hexin;
}
document.getElementById("Clear").onclick = function(){
    document.body.style.backgroundColor='#FFFFFF';
    document.getElementById('input').value = '';
    document.getElementById('error').innerHTML = '';
}
