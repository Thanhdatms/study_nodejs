// Function
// 2 được truyền qua đối số

function myFunction(param){
    param('Hoc lap trinh')
}


function mycallback(value){
    console.log('value: ', value)
}
 
myFunction(123) // nếu truyền vào 123 sẽ lỗi ngày vì trong param

