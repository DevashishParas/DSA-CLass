class employee{
    constructor(name, id){
        this.name = name;
        this.id = id;
    }
    work(){
        console.log("Employee is working on Parent Class");
    }
    showDetailes(){
        console.log(this.name);
        console.log(this.id);
    }
}

class developer extends employee{
    constructor(name, id,lang){
        super(name, id);
        this.lang = lang;
    }
    writeCode(){
        console.log("Developer class is working");
    }
    work(){
        console.log("working Dev class inheriting employee")
    }
}

class FrontDev extends developer{
    constructor(name, id, lang, framework){
        super(name, id, lang);
        this.framework = framework;
    }
    buildUI(){
        console.log("Frontend Developer class is creating UI");
    }
    work(){
        console.log("Front Dev class is working and inherited in developer class");
    }
}

class manager extends employee{
    constructor(name, id, teamsize){
        super(name, id);
        this.teamsize = teamsize;
    }
    conductMeeting(){
        console.log("Manager class is conducting meeting");
    }
    work(){
        console.log("Manager is conducting a Session on Products in manager class and inherited  in employee class");
    }
}

// Creating Objects
const a1 = new employee("Devansh", 101);
const a2 = new FrontDev("Vidit", 102, "Javascript", "React");
const a3 = new manager("Nepheww", 103, 10);

console.log(a1);
console.log(a2);
console.log(a3);



a1.work();
a1.showDetailes();
a2.work();
a2.writeCode();
a2.buildUI();
a3.work();
a3.conductMeeting(); 