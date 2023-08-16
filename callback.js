// Function
// 2 được truyền qua đối số


Array.prototype.forEach2 = function(callback){

    for (var index in this) {
        if(this.hasOwnProperty(index)){
           callback(this[index], index);
        } 
    }
}

const course = [
    'javascript',
    'php',
    'Ruby'
]

course.forEach2((course) => {
    console.log(course);
});
