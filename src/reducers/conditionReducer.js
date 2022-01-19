const conditionReducer = [
  { value: "New", label: "New" },
  { value: "Like New", label: "Like New" },
  { value: "Good", label: "Good" },
  { value: "Acceptable", label: "Acceptable" },
];

export default (state = conditionReducer, action) => {
  return state;
};
