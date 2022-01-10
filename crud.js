let selectedRow = null;

//hanlde onsubmit
function onSubmit(e){
  event.preventDefault();
    let name,color,type,number_plate,capacity;
      name = document.getElementById("name").value;
      color = document.getElementById("color").value;
      type = document.getElementById("type").value;
      number_plate = document.getElementById("number_plate").value;
      capacity = parseInt(document.getElementById("capacity").value);
      if(name == "" || color == "" || type == "" || number_plate == "" || isNaN(capacity)){
        alert("Invalid input. Please enter all fields.\n Capacity be numbers.");
        return;
      }else{
        let carData = newCarData();
        if (selectedRow === null) {
          //if no row swlwcted create a car
          createNewCar(carData);
        } else {
          //update details
            updateCarDetails(carData)
        }
        resetForm();

      }
    
}



//set new car data to carData 
function newCarData(){
  let carData = {};
  carData["name"] = document.getElementById("name").value;
  carData["color"] =document.getElementById("color").value;
  carData["type"] = document.getElementById("type").value;
  carData["number_plate"] = document.getElementById("number_plate").value;
  carData["capacity"] = parseInt(document.getElementById("capacity").value);
 
  return carData;
}



//create a a car
function createNewCar(carData){
    let table = document.getElementById("carsTable").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    let cell1 = newRow.insertCell(0);
    cell1.innerHTML = carData.name;
    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = carData.color;
    let cell3 = newRow.insertCell(2);
    cell3.innerHTML = carData.type;
    let cell4 = newRow.insertCell(3);
    cell4.innerHTML = carData.number_plate;
    let cell5 = newRow.insertCell(4);
    cell5.innerHTML = carData.capacity;
    let cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<button class="tblBtn  bg-blue-500 hover:bg-blue-700 text-white font-boldrounded" onClick="editCarDetails(this)">Edit</button>
                       <a class="tblBtn btn bg-red-800 " onClick="deleteCarDetails(this)">Delete</a>`;
}

// reset inputs
function resetForm(){
    document.getElementById("name").value="";
    document.getElementById("color").value="";
    document.getElementById("type").value="";
    document.getElementById("number_plate").value="";
    document.getElementById("capacity").value="";
}

// set data to input fields
//then edit
function editCarDetails(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value= selectedRow.cells[0].innerHTML;
    document.getElementById("color").value= selectedRow.cells[1].innerHTML; 
    document.getElementById("type").value= selectedRow.cells[2].innerHTML;
    document.getElementById("number_plate").value= selectedRow.cells[3].innerHTML;
    document.getElementById("capacity").value= selectedRow.cells[4].innerHTML;
}

function updateCarDetails(carData){
    selectedRow.cells[0].innerHTML = carData.name;
    selectedRow.cells[1].innerHTML = carData.color;
    selectedRow.cells[2].innerHTML = carData.type;
    selectedRow.cells[3].innerHTML = carData.number_plate;
    selectedRow.cells[4].innerHTML = carData.capacity;
}
//delete a car
function deleteCarDetails(td){
    if(confirm('Confirm to delete this car ?')){
        row = td.parentElement.parentElement;
        document.getElementById('carsTable').deleteRow(row.rowIndex);
        resetForm();
    }
}




// let cars = [
//     {
//       "id":1,
//       "name":"car1",
//       "color": "purple",
//       "type": "minivan",
//       "registration_number": "KCB 113F",
//       "capacity": 7
//     },
//     {
//       "id":2,
//      "name":"car2",
//       "color": "red",
//       "type": "station wagon",
//       "registration_number":"KEG 400D",
//       "capacity": 5
//     }
//   ]
  
  
// function submit() {
//   var name,color,type,number_plate,capacity;
//   name = document.getElementById("name").value;
//   color = parseInt(document.getElementById("color").value);
//   type = parseInt(document.getElementById("type").value);
//   number_plate = parseInt(document.getElementById("number_plate").value);
//   capacity = parseInt(document.getElementById("capacity").value);
//   if(name == "" || color == "" || type == "" || number_plate == "" || isNaN(capacity)){
//     alert("Invalid input. Please enter all fields.\n Capacity be numbers.");
//     return;
//   }
//   // Generate unique ID
//   var id = 1;
//   var val = arr.map(function(x){return x.id; }).indexOf(id);
//   while(val != -1){
// 	  id++;
// 	  val = arr.map(function(x){return x.id; }).indexOf(id);
//   }
  
//   var newCar = {
//     id: id,
//     name: name,
//     color: color,
//     type: type,
//     registration_number:number_plate,
//     capacity:capacity,
//   }
  
//   cars.push(newCar);
//   clearForm();
//   print();
// }

// function clearForm(){
//   document.getElementById("name").value = "";
//   document.getElementById("color").value = "";
//   document.getElementById("type").value = "";
//   document.getElementById("number_plate").value = "";
//   document.getElementById("capacity").value = "";
// }

// function print() {
//   var list = document.getElementById("list");
//   list.innerHTML = "";
//   for(var i = 0; i < cars.length; i++) {    
//     //create row
//     var item = document.createElement("tr");
//     var itemElems = [cars[i].id, cars[i].name, cars[i].color, cars[i].type,cars[i].registration_number,,cars[i].capacity];
//     //assign ID to row
//     item.id = cars[i].id;
    
//     //Loop through itemElems to create id, name, price, tax columns in row:
//     for(var j=0; j<itemElems.length; j++){
//       node = document.createElement("td");
//       node.textContent = itemElems[j];
//       if(itemElems[j] != cars[i].id){
//         //Add function to edit element to every column except id
//         node.addEventListener("click", editMe);
//       }
//       item.appendChild(node);
//     }

//     //append action
//     node = document.createElement("td");
//     var removeButton = document.createElement("button");
//     removeButton.className = "btn btn-danger glyphicon glyphicon-remove";
//     removeButton.id = "rm" + (i+1);
//     removeButton.addEventListener("click", removeMe);
//     removeButton.textContent = "";
//     node.appendChild(removeButton)
//     item.appendChild(node);
    
//     //append row
//     list.appendChild(item);
//   }
// }


//   function car(){
//     cars.forEach(function(car){
//      console.log(car)
//  });
//  }

 
//   /* console.log(cars[0].registration_number); */
  
//   //add an new array at the start use array UNSHIFT
//   let unshiftNewCar = {
//    "name":"car3", 
//     "color": "red",
//     "type": "premio",
//     "registration_number": "KAB 456H",
//     "capacity": 2
//   }
//   //write the 
//   cars.unshift(unshiftNewCar);
  
//   /* console.log(cars); */ 
  
//   //add an object at the end
//   let pushNewCar = {
//    "name":"car4",  
//    "color": "red",
//    "type": "Honda",
//    "registration":"KMK 100P",
//    "capacity": 5
//   }
//   cars.push(pushNewCar);
  
//   /* console.log(cars); */
  
  
//   //add elements using splice
//   //index to start, number of items, option value to add
//   let spliceCar = {
//    "name":"spliceCar",  
//    "color": "yellow",
//    "type": "Honda",
//    "registration":"KMK 100P",
//    "capacity": 5
//   }
//   /* cars.splice(0,1,spliceCar);
//   console.log(cars); */
  
//   //array find
//   /* find an object */
//   /* This function returns the first matching element: */
//   let findCar = cars.find(car => car.name === "car2");
//       findCar.name="car edited";
    
//     /* console.log(cars); */
  
//   /* console.log(car); */
  
//   //use array find with multiple values
  
//   let multipleCar = cars.find(car => car.color === "red" && car.type === "premio");
//   /* console.log(multipleCar); */
  
  
//   let redCars = cars.filter(car => car.color === "red");
//   /* console.log(redCars); */
  
  
//   //removing elements
//   //removes element at end of array
//   cars.pop();
//   /* console.log(cars); */
  
//   //removes at the begging of array
//   cars.shift();
//   /* console.log(cars); */
  
  
//   //delete all
  
//   cars.length = 0;
  
//   console.log(cars); 
  
//   // Output []