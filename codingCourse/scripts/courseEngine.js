class CourseEngineClass {
	static NAME_ = "Coding Course Engine";
	static VERSION_ = "1.0.0 2022-06-28";
	
  showVersion() {
  	alert(`${CourseEngineClass.NAME_}\nVersion: ${CourseEngineClass.VERSION_}`);
  }
}
CourseEngine = new CourseEngineClass();