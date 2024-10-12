function getAnotherPage(x) {
    event.preventDefault(); // Ngăn không cho form gửi dữ liệu lên server
    let form = x.parentElement.children;
    let firstName = form[0].value;
    let lastName = form[1].value;
    let age = form[2].value;

    if ( firstName == null || firstName == '' ) {
        alert("Chưa nhập firstName !")
        return false;
    }

    if ( lastName == null || lastName == '' ) {
        alert("Chưa nhập lastName !")
        return false;
    }

    if ( age == null || age == '' ) {
        alert("Chưa nhập age !")
        return false;
    }

    let user = [firstName, lastName, age];
    console.log(user)
    localStorage.setItem("user", JSON.stringify(user))
}