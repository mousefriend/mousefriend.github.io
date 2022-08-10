function cat(face) {
    var pic;
    if (face == 0) {
        pic = "cat_happy.gif"
    } else {
        pic = "cat_sad.gif"
    }
    document.getElementById('myImage').src = pic;
}