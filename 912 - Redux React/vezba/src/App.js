
import Counter from "./Counter";
import {connect} from "react-redux"

function mapStateToProps(state){
  return {
    countValue:state.count,
  }
}

var increaseAction={type:"increase"}
var decreaseAction={type:"decrease"}

function mapDispatchToProps(dispatch){
  return {
    increaseCount:function(){
      return dispatch(increaseAction)
    },
    decreaseCount:function(){
      return dispatch(decreaseAction)
    }
  }
}

var connectedComponent=connect(mapStateToProps,mapDispatchToProps)(Counter)

export default connectedComponent