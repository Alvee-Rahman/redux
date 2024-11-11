const { createSlice, nanoid } = require("@reduxjs/toolkit");

const Slice = createSlice({
  name: "employee",
  initialState: {
    employees: [],
  },

  reducers: {
    addEmployee: (state, action) => {
      console.log(action);
      const data = {
        id: nanoid(),
        name: action.payload,
      };
      state.employees.push(data);
    },
  },
});
export const { addEmployee } = Slice.actions;
export default Slice.reducer;
