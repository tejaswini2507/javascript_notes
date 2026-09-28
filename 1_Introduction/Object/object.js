let student = {
  sname : "miller",
  sid : 101,
  isStudying : false,
  skills : ["sql","python","java","webtech"],
  address : {
           city : "chennai",
           pin : 52346
  },
  work:function() {
    console.log("likes to sleep");
  }

}
console.log(student)

// ! How to access object properties

console.log("student name is ",student.sname);
console.log("student id is ",student.sid);
console.log("student skills are ",student.skills);
console.log("student third skill is ",student.skills[2]);
console.log("student's address is ",student.address);
console.log("student's pin ",student.address.pin);
student.work();

// ! How to modify the object value

student.sid = 102;
console.log(student)

// ! How to add new property

student.phNo = 9876543210

// ! How to delete

delete student.isStudying


