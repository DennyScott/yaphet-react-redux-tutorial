//ACTIONS
const NEW_PERSON = "yaphet/family/NEW_PERSON";

const initialState = {
  people: [
    {
      name: "Yaphet",
      age: 26
    }
  ]
};

// Reducer input === current state
// Reducer output === new state

//REDUCER
export function reducer(state = initialState, action) {
  switch (action.type) {
    case NEW_PERSON: {
      return {
        ...state,
        people: [...state.people, { age: action.age, name: action.name }]
      };
    }
  }
  return state;
}

//ACTION CREATORS
export function newPerson(age, name) {
  return {
    type: NEW_PERSON,
    name,
    age
  };
}
