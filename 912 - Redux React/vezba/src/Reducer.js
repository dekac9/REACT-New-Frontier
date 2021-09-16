

function reducer(state,action){
if(state==undefined){
  return{count:0};
}
let count=state.count;
if(action.type==="decrease"){
  return {count:count-1}
}else if(action.type==="increase"){
  return {count:count+1}
}else{
  return state
}
}

export default reducer