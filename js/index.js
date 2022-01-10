function loginForm(){
    //prompt for user inputs (username and password)
    alert("WELCOME TO OUR SYSTEM \n\n\n PLEASE REGISTER ")
    var username = prompt("Enter Your Username:","")
    var password = prompt("Enter Your Password:","")
    //call login function register with username
    register(username);
    }

    //register
    function register(name)
        {
            //loggedd in status function
            var loggedStatus=" You have been logged in";
            function login(){
                    //closure accessing the loggedStatus function
               
                alert(' Congradulations ' + name + '  '  +loggedStatus );
            }
        
            login();
        }


        //closure
        function add(a){
             
           return function updateY(y){
                 return a+y;
            }

        }

        var addition = add(10);
        console.log(addition(10))

        //calculate marks

        function markcalc(){
            //prompt for user marks
            alert("ENTER YOUR MARKS TO GET THE TOTAL")
            var mark1 = prompt("Enter Your mark 1:","")
            var mark2 = prompt("Enter Your Mark2:","")
            //call sumMark function
            var newmark = new sumMark(mark1,mark2);

            alert(newmark.add());
    }

        function sumMark(mark1, mark2) {
            this.mark1 = mark1;
            this.mark2 = mark2;
        }

        sumMark.prototype.add= function(){
            console.log(sumMark.mark1);
            return parseInt(this.mark1 )+ parseInt(this.mark2);
        };

       
//inheritance
    //class person
    class Person { 
        constructor(name) {
            this.name = name;
        }

        greet() {
            alert("Hello" +this.name);
        }
    }

    // inheriting parent class
    //cytonn users
    class cytonnUsers extends Person {

    constructor(name,department,employeeNumber) {
        // call the super class constructor and pass in the name parameter
        super(name);
        this.department=department;
        this.employeeNumber=employeeNumber;
    }

    welcome(){
            alert('Welcome '+ this.name+ " of " +this.department + ' Department');
        }

    }

    function staff(){
        let newEmployee= new cytonnUsers('BIll Lumanya', 'Cytonn Technology');
          newEmployee.greet();  
          newEmployee.welcome();
    }
   
    function intern(){
        let intern= new cytonnUsers(' Cytonn Intern');
          intern.greet();
    }



    //incapsulation
    //restrict access to variables and methods
    class cytonnEmployee  
{  
  //put all variables and function in a constructor
constructor(name,department,salary)  
        {  
            var name= name;  
            var  department=department; 
            var   salary=salary;

            this.getName = function() {
            return name;
            };


                this.getSalary = function() {
            return salary;
            };

                this.getDepartment = function() {
            return department;
            };
        
        }  
    
        }  
    var employee=new cytonnEmployee("Jontee", 'CT'); 
    //undefined
    // console.log(employee.department);
    //works correctly
    console.log(employee.getDepartment());



    function failStrict(){
        "use strict";
        y = 4; // invalid in strict mode y is not defined
        

    //Since we have the 'use strict' directive on top of our script, 
    // we’ll get an error with the y = 4 expression since we haven’t declared y yet.
    // Without strict mode, this would create a global variable called y
    // and assign 4 to it and pollute the global scope.
    }
    function passStrict(){
        "use strict";
        var x = 1; // valid in strict mode

        alert( "passed strict mode " +x );
    }



