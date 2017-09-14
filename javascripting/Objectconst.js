//Exhibit Object constructors in JS.

function Student(fname, lname, age, course, gpa, factor)
{
  this.fname = fname;
  this.lname = lname;
  this.age = age;
  this.course = course;
  this.gpa = gpa;
  this.factor = function(){
  return ++this.factor;
  };
}


//creating instances.

var std1 = new Student("Eric", 10, "CS", 2.0, 2);
var std2 = new Student("Josh", 13, "EE", 3.0, 1);

console.log(std1);
