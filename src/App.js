import React, {Component} from "react"
import "./App.css";

export default class App extends Component {

  btnStyle = {
    color : "#fff",
    border : "none",
    padding : "5px 9px",
    borderRadius: "50%",
    cursor : "pointer",
    float : "right"
  }

  btnSubmitStyle = {
    color : "#fff",
    padding : "5px 9px",
    borderRadius: "3px",
    cursor : "pointer",
    float : "right"
  }

  getStyle = () => {
    return {
      padding: "10px",
      borderBottom : "1px #ccc dotted",
      textDecoration : "none"
    }
  }

  state = {
    todoData : [{
      id:1,
      title:'study',
      complete:true
  
    },
    {
      id:2,
      title:'clean',
      complete:false
    }
  ],
  value : ""

  }

  

handleClick = (id) => {
  let rets = this.state.todoData.filter((da) => da.id != id)
  this.setState({todoData : rets})

  console.log('newtododate', rets)
}


  render(){
    return(
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>

          <div>
            <form style={{display:'flex'}}>
            <input 
              type="text" 
              name="value"
              style={{ flex: '10', padding: '5px'}}
              placeholder="해야 할 일을 입력하세요"
              value=""
            />
            <button style={this.btnSubmitStyle}></button>
            </form>
          </div>

          {this.state.todoData.map((data, index) => (
            <div style={this.getStyle()} key={data.id}>
            
            <input type="checkbox" defaultChecked={false} />
            {data.title}
            <button style={this.btnStyle} onClick={() => this.handleClick(data.id)} >x</button>
          </div>
          ))}

            
        </div>
      </div>
    ) 
  }

}