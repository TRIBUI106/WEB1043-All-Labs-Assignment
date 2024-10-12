function tinhCanhHuyen() {
    let canh1 = document.getElementById("canh1").value;
    let canh2 = document.getElementById("canh2").value;

    let canhHuyen = Math.sqrt((canh1 * canh1) + (canh2 * canh2));

    document.getElementById("showCanh1").innerHTML = canh1;
    document.getElementById("showCanh2").innerHTML = canh2;
    document.getElementById("ketQua").innerHTML = canhHuyen.toFixed(1);
}

function tinhMauDat() {
    let metVuong = document.getElementById("m2").value;
    
    let tinhSao = metVuong / 360;
    let tinhMau = metVuong / 3600;
    let tinhHecta = metVuong / 3600;

    document.getElementById("showMetVuong").innerHTML = metVuong;
    document.getElementById("showSao").innerHTML = tinhSao;
    document.getElementById("showMau").innerHTML = tinhMau;
    document.getElementById("showHecta").innerHTML = tinhHecta;



}