const index = 0;

function changeColors(){
    const colors = ['red', 'blue', 'orange', 'yellow', 'green', 'purple'];

    document.getElementsByTagName('body')[0].style.background = colors[index++];
    
    if(index > colors.length - 1) {
        index = 0;
    }
}