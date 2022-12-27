import { useReducer } from "react";

enum CountEnum {
  INCREASE = "INCREASE",
  DESCREASE = "DESCREASE",
}

interface CountAction {
  type: CountEnum;
  payload: number;
}

interface CountState {
  count: number;
}

const countReducer = (state: CountState, action: CountAction) => {
  const { type, payload } = action;
  switch (type) {
    case CountEnum.INCREASE:
      return {
        ...state,
        count: state.count + payload,
      };
    case CountEnum.DESCREASE:
      return {
        ...state,
        count: state.count - payload,
      };
    default:
      return state;
  }
};

const initialCount: CountState = {
    count: 0
}


const CounterReducer = () => {
    const [state, dispatch] = useReducer(countReducer, initialCount)

    const handlePlus = () => {
        dispatch({type: CountEnum.INCREASE, payload: 1})
    }

    const handleMinus = () => {
        dispatch({type: CountEnum.DESCREASE, payload: 1})
    }

    console.log(state.count);
    
    return (
        <>
        Count: {state.count}
        <button onClick={handlePlus}>Plus 1</button>
        <button onClick={handleMinus}>Minus 1</button>
        </>
    )
}

export default CounterReducer
