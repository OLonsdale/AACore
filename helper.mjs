let testObject = {
  "a":"test",
  "b":"",
  "c":"",
}

Object.keys(testObject).forEach((key) => {
  if (testObject[key] === "") {
    delete testObject[key];
  }
});

console.log(testObject)