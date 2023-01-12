var index = 0;
console.log(index)

function changeColor() {
    var colors = ['red', 'blue', 'orange', 'yellow', 'green', 'purple'];
    console.log(colors)
    document.getElementsByTagName('body')[0].style.background = colors[index++];
    console.log(colors);
    if(index > colors.length - 1) {
        index = 0;
    }
}