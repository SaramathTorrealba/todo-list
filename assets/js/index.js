let button = document.querySelector("#button");

let noteArray = [
  {
    id: 0,
    value: "Hacer la cama",
    done: true,
  },
  {
    id: 1,
    value: "Barrer la casa",
    done: false,
  },
  {
    id: 3,
    value: "Hacer desayuno",
    done: false,
  },
  {
    id: 4,
    value: "Recoger la cocina",
    done: true,
  },
];

renderNote();
function renderNote() {
  let listNote = document.querySelector("#listNote");
  listNote.innerHTML = "";
  noteArray.forEach((note) => {
    let checkboxValidator = "";
    if (note.done == true) {
      checkboxValidator = "checked";
    }
    listNote.innerHTML += `<li>${note.value}</li> <input type="checkbox" id="" name="" value="" ${checkboxValidator} >  <button id="button" onclick="removeNote(${note.id})">X</button>`;
  });
}
function removeNote(id) {
  ////let deletE = noteArray.splice(0, 1);
  //// console.log(noteArray);

  noteArray = noteArray.filter((note) => {
    return note.id != id;
  });
  console.log(noteArray);
  renderNote();
  counterTotal
}

function pushNote() {
  let inputChores = document.querySelector("#inputChores").value;
  let pusH = noteArray.push({
    id: noteArray.length + 1,
    value: inputChores,
    done: false,
  });
  console.log(noteArray);
  renderNote();
  counterTotal()
}

function counterTotal() {
  let total = document.querySelector("#total");
  total.innerHTML = `<p>Total: ${noteArray.length}</p>`;
  let counter = 0;
  let done = document.querySelector("#done")
  noteArray.forEach((note) => {
    if (note.done == true) {
      counter++;
      console.log("hola", counter)
    }
  });
  done.innerHTML= `<p>Realizado: ${counter}</p>`
  console.log("hola", counter)
}
counterTotal();

function updateCheckbox(id, value) {

  noteArray = noteArray.forEach((note) => {
   if (note.id== id){
  note.done= value
  }
  });
  console.log(id);
  console.log(value);
  renderNote();
}
