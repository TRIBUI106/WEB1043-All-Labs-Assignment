function get_data(){
    let A = document.getElementById("A").value;
    let B = document.getElementById("B").value;
    let sum = parseInt(A)+parseInt(B);

    if ( sum == null ) {
        document.getElementById("showSum").innerHTML = 0;
    } else {
        document.getElementById("showSum").innerHTML = sum;
    }
}