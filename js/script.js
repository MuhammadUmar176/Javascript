document.getElementById('alertName').onclick= function(){
    let name="Muhammad Umar"
    alert(name)
}
document.getElementById('alertNumber').onclick= function(){
    let number="0300 2345678"
    alert(number)
}
document.getElementById('variablName').onclick= function(){
    document.getElementById('OutPut').innerHTML="<ul><li>A variable name can't contain any spaces.</li><li>A variable name can contain only letters, numbers, dollar signs, and underscores.</li><li>Though a variable name can't be any of JavaScript's keywords, it can contain keywords. For example, <code>userAlert</code> and <code> myVar </code> are legal. </li></ul>";

}
document.getElementById('camelCase').onclick= function(){
    document.getElementById('OutPut').innerHTML="<h3>Examples of camelCase</h3><ul><code><li>user</li><li>userResponse</li><li>userResponseTime</li><li>userResponseTimeLimit</li></code></ul>";

}
document.getElementById('clear').onclick=function(){
    document.getElementById('OutPut').innerHTML=" "
}
document.getElementById('clearStatement').onclick=function(){
    document.getElementById('getstatement').innerHTML=" "
}
document.getElementById('sum2').onclick=function(){
    let num1=5
    let num2=6
    let sum=num1 + num2
    document.getElementById('OutPut').innerHTML=sum;
    document.getElementById('getstatement').innerHTML="let num1=5 <br> let num2=6 <br> let sum=num1 - num2"

}
document.getElementById('sub2').onclick=function(){
    let num1=7
    let num2=6
    let sum=num1 - num2
    document.getElementById('OutPut').innerHTML=sum;
    document.getElementById('getstatement').innerHTML="let num1=7 <br> let num2=6 <br> let sum=num1 + num2"

}
document.getElementById('mul2').onclick=function(){
    let num1=7
    let num2=6
    let sum=num1 * num2
    document.getElementById('OutPut').innerHTML=sum;
    document.getElementById('getstatement').innerHTML="let num1=7 <br> let num2=6 <br> let sum=num1 * num2";
    console.log(sum);

}
document.getElementById('dvd2').onclick=function(){
    let num1=7
    let num2=6
    let sum=num1 / num2
    document.getElementById('OutPut').innerHTML=sum;
    document.getElementById('getstatement').innerHTML="let num1=7 <br> let num2=6 <br> let sum=num1 / num2"
}


document.getElementById('calculate').onclick=function(){
    
    let sum=36/6 + 7 - 5 * 3  +(3*5)
    document.getElementById('OutPut').innerHTML=sum;
    document.getElementById('getstatement').innerHTML=" let sum=36/6 + 7 - 5 * 3 +(3*5)"

}