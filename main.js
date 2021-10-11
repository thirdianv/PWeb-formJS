function form() {
  var nama, nrp, email, jurusan;

  nama = document.forms["formJS"]["nama"].value;
  if (nama == "") {
    alert("Isi nama");
    return false;
  }
  nrp = document.forms["formJS"]["nrp"].value;
  if (nrp == "") {
    alert("Isi NRP");
    return false;
  }
  email = document.forms["formJS"]["email"].value;
  if (email == "") {
    alert("Isi email");
    return false;
  }
  jurusan = document.forms["formJS"]["jurusan"].value;
  if (jurusan == "") {
    alert("Isi jurusan");
    return false;
  }
}
