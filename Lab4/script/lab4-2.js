
var sv = new Object();
var mangSinhVien = [];

sv.addData = function() {
    sv.studentID = document.getElementById("studentId").value;
    sv.studentName = document.getElementById("studentName").value;
    sv.studentScore = parseFloat(document.getElementById("studentPoint").value);
    mangSinhVien.push(sv);

    if ( mangSinhVien.length == 1 ) {
        document.getElementById("firstData").innerHTML = sv.studentID;
        document.getElementById("firstDataName").innerHTML = sv.studentName;
    } else if ( mangSinhVien.length == 2 ) {
        document.getElementById("secondData").innerHTML = sv.studentID;
        document.getElementById("secondDataName").innerHTML = sv.studentName;
    } else if ( mangSinhVien.length == 3 ) {
        document.getElementById("thirdData").innerHTML = sv.studentID;
        document.getElementById("thirdDataName").innerHTML = sv.studentName;
    } else if ( mangSinhVien.length == 4 ) {
        document.getElementById("fourthData").innerHTML = sv.studentID;
        document.getElementById("fourthDataName").innerHTML = sv.studentName;
    } else {
        alert("Full !")
    }
    
    console.log(mangSinhVien);

}

let sinhVienIsWatching = 0;


var sv = new Object();
var mangSinhVien = [];

sv.addData = function() {
    sv.studentID = document.getElementById("studentId").value;
    sv.studentName = document.getElementById("studentName").value;
    sv.studentScore = parseFloat(document.getElementById("studentPoint").value);
    mangSinhVien.push(sv);

    if ( mangSinhVien.length == 1 ) {
        document.getElementById("firstData").innerHTML = sv.studentID;
        document.getElementById("firstDataName").innerHTML = sv.studentName;
    } else if ( mangSinhVien.length == 2 ) {
        document.getElementById("secondData").innerHTML = sv.studentID;
        document.getElementById("secondDataName").innerHTML = sv.studentName;
    } else if ( mangSinhVien.length == 3 ) {
        document.getElementById("thirdData").innerHTML = sv.studentID;
        document.getElementById("thirdDataName").innerHTML = sv.studentName;
    } else if ( mangSinhVien.length == 4 ) {
        document.getElementById("fourthData").innerHTML = sv.studentID;
        document.getElementById("fourthDataName").innerHTML = sv.studentName;
    } else {
        alert("Full !")
    }
    
    console.log(mangSinhVien);

}

sv.hienData = function(x) {
    sinhVienIsWatching = x;
    console.log("sinhVienIsWatching == " + sinhVienIsWatching)
    console.dir("Triggered getData / " + x)
    document.getElementById("inforBoard").style.opacity = 1;
    document.getElementById("showID").innerHTML = mangSinhVien[x-1].studentID
    document.getElementById("showName").innerHTML = mangSinhVien[x-1].studentName
    document.getElementById("showScore").innerHTML = mangSinhVien[x-1].studentScore;
    if ( mangSinhVien[x-1].studentScore >= 5 ) {
        document.getElementById("showQuaMon").innerHTML = "Đậu";
    } else if ( mangSinhVien[x-1].studentScore < 5 ) {
        document.getElementById("showQuaMon").innerHTML = "Rớt";
    }
}

sv.deleteInfo = function() {
    mangSinhVien.splice(sinhVienIsWatching - 1, 1);
    console.log(mangSinhVien);
    document.getElementById("inforBoard").style.opacity = 0;

    // Reset các ô miniInfor
    if (sinhVienIsWatching == 1) {
        document.getElementById("firstData").innerHTML = "[ Trống ]";
        document.getElementById("firstDataName").innerHTML = "";
    } else if (sinhVienIsWatching == 2) {
        document.getElementById("secondData").innerHTML = "[ Trống ]";
        document.getElementById("secondDataName").innerHTML = "";
    } else if (sinhVienIsWatching == 3) {
        document.getElementById("thirdData").innerHTML = "[ Trống ]";
        document.getElementById("thirdDataName").innerHTML = "";
    } else if (sinhVienIsWatching == 4) {
        document.getElementById("fourthData").innerHTML = "[ Trống ]";
        document.getElementById("fourthDataName").innerHTML = "";
    }

    // Reset biến sinhVienIsWatching về 0
    sinhVienIsWatching = 0;
}



sv.hienThi = function() {
    this.studentID = document.getElementById("studentId").value;
    this.studentName = document.getElementById("studentName").value;
    this.studentScore = parseFloat(document.getElementById("studentPoint").value);
    
    
    // Xếp loại học lực
    if (this.studentScore >= 5) {
        this.hocLuc = "Đậu";
    } else if (this.studentScore < 5) {
        this.hocLuc = "Rớt";
    } else {
        this.studentID = "Chưa nhập thông tin";
        this.studentName = "Chưa nhập thông tin";
        this.hocLuc = "Chưa nhập thông tin";
    }

    // Hiển thị thông tin
    document.getElementById("showID").innerHTML = this.studentID;
    document.getElementById("showName").innerHTML = this.studentName;
    document.getElementById("showScore").innerHTML = this.hocLuc;
};


sv.deleteInfo = function() {
    mangSinhVien.splice(sinhVienIsWatching - 1, 1);
    console.log(mangSinhVien);
    document.getElementById("inforBoard").style.opacity = 0;

    // Reset các ô miniInfor
    if (sinhVienIsWatching == 1) {
        document.getElementById("firstData").innerHTML = "[ Trống ]";
        document.getElementById("firstDataName").innerHTML = "";
    } else if (sinhVienIsWatching == 2) {
        document.getElementById("secondData").innerHTML = "[ Trống ]";
        document.getElementById("secondDataName").innerHTML = "";
    } else if (sinhVienIsWatching == 3) {
        document.getElementById("thirdData").innerHTML = "[ Trống ]";
        document.getElementById("thirdDataName").innerHTML = "";
    } else if (sinhVienIsWatching == 4) {
        document.getElementById("fourthData").innerHTML = "[ Trống ]";
        document.getElementById("fourthDataName").innerHTML = "";
    }

    // Reset biến sinhVienIsWatching về 0
    sinhVienIsWatching = 0;
}



sv.hienThi = function() {
    this.studentID = document.getElementById("studentId").value;
    this.studentName = document.getElementById("studentName").value;
    this.studentScore = parseFloat(document.getElementById("studentPoint").value);
    
    
    // Xếp loại học lực
    if (this.studentScore >= 5) {
        this.hocLuc = "Đậu";
    } else if (this.studentScore < 5) {
        this.hocLuc = "Rớt";
    } else {
        this.studentID = "Chưa nhập thông tin";
        this.studentName = "Chưa nhập thông tin";
        this.hocLuc = "Chưa nhập thông tin";
    }

    // Hiển thị thông tin
    document.getElementById("showID").innerHTML = this.studentID;
    document.getElementById("showName").innerHTML = this.studentName;
    document.getElementById("showScore").innerHTML = this.hocLuc;
};
