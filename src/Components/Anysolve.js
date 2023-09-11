import React, {useReducer} from 'react'

const Anysolve = (state, action) => {
    switch(action.type){
        case "Double":
        return {count : state.count*2 , showtext : state.showtext};
        case "toggleShowtext":
        return {count : state.count , showtext : !state.showtext};
        default : return state;
    }
  };
  const Reducer = () =>{
    const [state, dispatch] = useReducer(Anysolve, {count: 1,showtext: true});
  
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={()=>{
        dispatch({type: "Double"});
        dispatch({type:"toggleShowtext"});
      }}> Double</button>
      {state.showtext && <p>This is the text</p>}
    </div>
  )
};

export default Anysolve
