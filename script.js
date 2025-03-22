function pagelogin() {
    document.getElementById("loginmodel").style.display = "block";
}

function loginuser() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "admin" && pass === "1234") {
        document.getElementById("successmessage").style.display = "block";
        document.getElementById("loginmodel").style.display = "none";
    } else {
        alert("Inalid Credentials!")
    }
}

function link() {
    document.getElementById("clk").innerHTML = "https://danish624-bash.github/Danishproflie/";
}