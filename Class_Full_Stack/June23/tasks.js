class Employee {
    constructor(id, name, language, framework, teamSize) {
        this.id = id;
        this.name = name;
        this.language = language;
        this.framework = framework;
        this.teamSize = teamSize;
    }

    showDetails() {
        console.log("ID: " + this.id);
        console.log("Name: " + this.name);
        console.log("Language: " + this.language);
        console.log("Framework: " + this.framework);
        console.log("Team Size: " + this.teamSize);
    }
};

let emp = new Employee(102, "B", "JavaScript", "React", 10);


emp.showDetails();

class developer extends employee{

}

class frontenddeveloper extends developer{
    
}