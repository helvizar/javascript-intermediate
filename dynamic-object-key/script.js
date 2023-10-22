// dot notation
const person = {
  name: "john",
};

console.log(person.name);
person.age = 25;
console.log(person);

// square bracket notation
const items = {
  "featured-items": ["item1", "item2"]
}

console.log(items["featured-items"]);
console.log(person["name"]);

let appState = "loading";
appState = "error";

const app = {
  [appState]: true // the value became key name
}

const keyName = "fruit";
app[keyName] = "apple";

console.log(app);

const state = {
  loading: false,
  name: "",
  job: "",
}

// function update object
const updateState = (key, value) => {
  state[key] = value;
}

// function delete object
const deleteState = (key) => {
  delete state[key];
}

updateState("name", "john");
updateState("job", "developer");
updateState("loading", true);
updateState("workloads", []); // create new key and value for object state

updateState("name", "peter"); // update again name => overwrite john with peter
console.log(state);

deleteState("loading"); // delete key from object state

console.log(state);
