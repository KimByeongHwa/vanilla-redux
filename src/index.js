import { legacy_createStore as createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

number.innerText = 0;

const ADD = 'ADD';
const MINUS = 'MINUS';

// 리듀서는 state와 action을 인자로 받는다.(EventListener 같은 역할)
const countReducer = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countReducer);

const onChage = () => {
  number.innerText = countStore.getState();
};

// subscribe을 통해 html을 update 해준다.
countStore.subscribe(onChage);

// dispatch를 통해 액션을 발생시킨다.(triggering an event)
// dispatch의 인자로 action을 넣는다.
// action은 항상 Object 타입이어야 한다.
const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
