const fullName = document.getElementById("name");
const email = document.getElementById("email");
const telephone = document.getElementById("telephone");
const address = document.getElementById("address");
const gender = document.getElementsByName("gender");

let students = JSON.parse(localStorage.getItem("students")) || [];
console.log(JSON.parse(localStorage.getItem("students")));

//LƯU:
function saveStudent() {
  document.getElementById("btn").style.display = "block";
  document.getElementById("btn-add").style.display = "none";
  const gender = document.querySelector('input[name="gender"]:checked').value;
  let index = students.findIndex(
    (student) => student.id == localStorage.getItem("studentId")
  );
  console.log(index, "index");
  students[index] = {
    id: students[index].id,
    fullName: fullName.value,
    email: email.value,
    telephone: telephone.value,
    address: address.value,
    gender: gender,
  };
  localStorage.setItem("students", JSON.stringify(students));
  displayData();
}

//DISPLAY:
function displayData() {
  let html = "";
  for (let i in students) {
    html += `
        <tr>
        <td>${students[i].id}</td>
            <td>${students[i].fullName}</td>
            <td>${students[i].email}</td>
            <td>${students[i].address}</td>
            <td>${students[i].telephone}</td>
            <td>${students[i].gender}</td>
            <td><button onclick="editStudent('${students[i].id}')">Edit</button>
            <button onclick="deleteStudent('${students[i].id}')">Delete</button>
            </td>
            </tr>
        `;
  }
  tbody.innerHTML = html;
  fullName.value = "";
  email.value = "";
  telephone.value = "";
  address.value = "";
  gender[0].checked = true;
}

let tbody = document.getElementById("tbody1");

//THÊM:
function addStudents() {
  for (let i in gender) {
    if (gender[i].checked) genderValue = gender[i].value;
  }
  const newStudent = {
    id: Math.floor(Math.random() * 1000),
    fullName: fullName.value,
    address: address.value,
    gender: genderValue,
    email: email.value,
    telephone: telephone.value,
  };
  students.push(newStudent);

  localStorage.setItem("students", JSON.stringify(students));
  displayData();
  alert("Thêm học sinh mới thành công!!!!");
}

//XÓA:
function deleteStudent(studentId) {
  console.log(studentId);

  const index = students.findIndex((student) => student.id == studentId);

  students.splice(index, 1);

  localStorage.setItem("students", JSON.stringify(students));
  displayData();
  alert("Bạn đã xóa thành công!!!");
  console.log(index);
}
displayData();

function editStudent(studentId) {
  // console.log(studentId);
  localStorage.setItem("studentId", studentId);
  document.getElementById("btn").style.display = "block";
  document.getElementById("btn-add").style.display = "none";
  const index = students.findIndex((student) => student.id == studentId);
  for (let i in gender) {
    if (gender[i].value == students[index].gender) gender[i].checked = true;
  }

  id = students[index].id;
  fullName.value = students[index].fullName;
  email.value = students[index].email;
  address.value = students[index].address;
  telephone.value = students[index].telephone;
}

function sortStudent() {
  students.sort((a, b) => {
    if (a.fullName < b.fullName) return -1;
    if (a.fullName > b.fullName) return 1;
    return 0; // Hai chuỗi bằng nhau
  });
  displayData();
}

let filterStudent = document.getElementById("filterStudent");

function searchStudents() {
  let searchQuery = filterStudent.value.trim().toLowerCase(); // trim(): loại bỏ khoảng trắng ở đầu và cuối chuỗi, toLowerCase(): chuyển chuỗi thành chữ thường

  let filteredStudents = students.filter((student) =>
    student.fullName.toLowerCase().includes(searchQuery)
  );

  let html = "";
  for (let i = 0; i < filteredStudents.length; i++) {
    let students = filteredStudents[i];
    html += `
      <tr>
        <td>${students.id}</td>
        <td>${students.fullName}</td>
        <td>${students.email}</td>
        <td>${students.telephone}</td>
        <td>${students.address}</td>
        <td>${students.gender}</td>
        <td><button onclick="editStudent('${students.id}')">Edit</button></td>
        <td><button onclick="deleteStudent('${students.id}')">Delete</button></td>
      </tr>
    `;
  }

  document.getElementById("tbody1").innerHTML = html;
}
const Username = document.getElementById("name");
const errorName = document.getElementById("errorName");
function handleInputName() {
  if (Username.value === "") {
    errorName.innerHTML = "Tên không được để trống";
    errorName.style.color = "red";
  } else {
    errorName = "";
  }
}

const emailInput = document.getElementById("email");
const errorEmail = document.getElementById("errorEmail");

var checkEmail = false;
function handleInputEmail() {
  var emailInformation = /@/;

  if (email.value === "") {
    errorEmail.innerHTML = "Tên không được để trống";
    errorEmail.style.color = "red";
    checkEmail = false;
  } else if (!emailInformation.test(email.value)) {
    errorEmail.innerHTML = "Nhập đúng định dạng email";
    errorEmail.style.color = "red";
    checkEmail = false;
  } else {
    errorEmail.innerHTML = "";
    checkEmail = true;
  }
}
// function handleInputEmail() {
//   const email = emailInput.value;
//   if (email === "") {
//     errorEmail.innerHTML = "Email không được để trống";
//     errorEmail.style.color = "red";
//   } else if (!/\S+@\S+\.\S+/.test(email)) {
//     errorEmail.innerHTML = "Email phải có định dạng hợp lệ"; // Thông báo lỗi khi không có ký tự '@'
//     errorEmail.style.color = "red";
//   } else {
//     errorEmail.innerHTML = ""; // Xóa thông báo lỗi nếu hợp lệ
//   }
// }

// emailInput.addEventListener("input", handleInputEmail);

const telephoneInput = document.getElementById("telephone");
const errorTelephone = document.getElementById("errorTelephone");
function handleInputTelephone() {
  if (telephoneInput.value === "") {
    errorTelephone.innerHTML = "Số điện thoại không được để trống";
    errorTelephone.style.color = "red";
  } else {
    errorTelephone = "";
  }
}

const addressInput = document.getElementById("address");
const errorAddress = document.getElementById("errorAddress");
function handleInputAddress() {
  if (addressInput.value === "") {
    errorAddress.innerHTML = "Địa chỉ không được để trống";
    errorAddress.style.color = "red";
  } else {
    errorAddress = "";
  }
}
