
document.getElementById("connect").onclick = function() {  
login = document.getElementById("inputLogin").value;
password = document.getElementById("inputPassword").value;
if (login == 'LU24EL' && password == 'OX24HO'){
document.location.href = 'administration.html';
} else {
document.getElementById("modelerror").style.display = "block";
}
}; 
