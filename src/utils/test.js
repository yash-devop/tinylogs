let joinedArr = [];

const recursiveFlatten = (data) => {
  if (Object.keys(data).length <= 0) {
    return joinedArr;
  }

  Object.entries(data).forEach(([key, value]) => {
    if (value !== null && typeof value === "object" && !Array.isArray(value)) {
      console.log("Recursing into:", key);
      recursiveFlatten(value); // ✅ recursion works now
    } else {
      joinedArr.push(`${key}:${value}`);
    }
  });

  return joinedArr;
};
const flat = recursiveFlatten(data);
console.log(flat);
