let cars = [
    {
      "id":1,
      "name":"car1",
      "color": "purple",
      "type": "minivan",
      "registration_number": "KCB 113F",
      "capacity": 7
    },
    {
      "id":2,
     "name":"car2",
      "color": "red",
      "type": "station wagon",
      "registration_number":"KEG 400D",
      "capacity": 5
    }
  ]
  
  
function submit() {
  var name,color,type,number_plate,capacity;
  name = document.getElementById("name").value;
  color = parseInt(document.getElementById("color").value);
  type = parseInt(document.getElementById("type").value);
  number_plate = parseInt(document.getElementById("number_plate").value);
  capacity = parseInt(document.getElementById("capacity").value);
  if(name == "" || color == "" || type == "" || number_plate == "" || isNaN(capacity)){
    alert("Invalid input. Please enter all fields.\n Capacity be numbers.");
    return;
  }
  // Generate unique ID
  var id = 1;
  var val = arr.map(function(x){return x.id; }).indexOf(id);
  while(val != -1){
	  id++;
	  val = arr.map(function(x){return x.id; }).indexOf(id);
  }
  
  var newCar = {
    id: id,
    name: name,
    color: color,
    type: type,
    registration_number:number_plate,
    capacity:capacity,
  }
  
  cars.push(newCar);
  clearForm();
  print();
}

function clearForm(){
  document.getElementById("name").value = "";
  document.getElementById("color").value = "";
  document.getElementById("type").value = "";
  document.getElementById("number_plate").value = "";
  document.getElementById("capacity").value = "";
}

function print() {
  var list = document.getElementById("list");
  list.innerHTML = "";
  for(var i = 0; i < cars.length; i++) {    
    //create row
    var item = document.createElement("tr");
    var itemElems = [cars[i].id, cars[i].name, cars[i].color, cars[i].type,cars[i].registration_number,,cars[i].capacity];
    //assign ID to row
    item.id = cars[i].id;
    
    //Loop through itemElems to create id, name, price, tax columns in row:
    for(var j=0; j<itemElems.length; j++){
      node = document.createElement("td");
      node.textContent = itemElems[j];
      if(itemElems[j] != cars[i].id){
        //Add function to edit element to every column except id
        node.addEventListener("click", editMe);
      }
      item.appendChild(node);
    }

    //append action
    node = document.createElement("td");
    var removeButton = document.createElement("button");
    removeButton.className = "btn btn-danger glyphicon glyphicon-remove";
    removeButton.id = "rm" + (i+1);
    removeButton.addEventListener("click", removeMe);
    removeButton.textContent = "";
    node.appendChild(removeButton)
    item.appendChild(node);
    
    //append row
    list.appendChild(item);
  }
}


  function car(){
    cars.forEach(function(car){
     console.log(car)
 });
 }

 
  /* console.log(cars[0].registration_number); */
  
  //add an new array at the start use array UNSHIFT
  let unshiftNewCar = {
   "name":"car3", 
    "color": "red",
    "type": "premio",
    "registration_number": "KAB 456H",
    "capacity": 2
  }
  //write the 
  cars.unshift(unshiftNewCar);
  
  /* console.log(cars); */ 
  
  //add an object at the end
  let pushNewCar = {
   "name":"car4",  
   "color": "red",
   "type": "Honda",
   "registration":"KMK 100P",
   "capacity": 5
  }
  cars.push(pushNewCar);
  
  /* console.log(cars); */
  
  
  //add elements using splice
  //index to start, number of items, option value to add
  let spliceCar = {
   "name":"spliceCar",  
   "color": "yellow",
   "type": "Honda",
   "registration":"KMK 100P",
   "capacity": 5
  }
  /* cars.splice(0,1,spliceCar);
  console.log(cars); */
  
  //array find
  /* find an object */
  /* This function returns the first matching element: */
  let findCar = cars.find(car => car.name === "car2");
      findCar.name="car edited";
    
    /* console.log(cars); */
  
  /* console.log(car); */
  
  //use array find with multiple values
  
  let multipleCar = cars.find(car => car.color === "red" && car.type === "premio");
  /* console.log(multipleCar); */
  
  
  let redCars = cars.filter(car => car.color === "red");
  /* console.log(redCars); */
  
  
  //removing elements
  //removes element at end of array
  cars.pop();
  /* console.log(cars); */
  
  //removes at the begging of array
  cars.shift();
  /* console.log(cars); */
  
  
  //delete all
  
  cars.length = 0;
  
  console.log(cars); 
  
  // Output []