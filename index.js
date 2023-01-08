var regex=(document.getElementById('regex').value)
var btn=document.getElementById('btn')
var result=document.getElementById('result')
var reg=/^([a-z]{2}[0-9]{1,6})$/
btn.addEventListener('click',()=>{
    if(reg.test(regex)){
        result.innerHTML="正確"
    }else{
        result.innerHTML="錯誤"
    }
})
console.log()
