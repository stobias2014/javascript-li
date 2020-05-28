function Student(name, address, course) {
	this.name = name;
	this.address = address;
	this.course = course;
	walk = function() {
		console.log("Im walking");
	};
}

var course = new Object();

course = {
	title: "Course",
	courseNumer: 5,
	views: 0,
	updateViews: function() {
		return course.views++;
	}
}

console.log("Course", course);
console.log("Title", course.title);
console.log("Views", course.views);
course.updateViews();
console.log("Views", course.views);

var student = new Student("Saul", "123", course);
console.log("Student: ", student);