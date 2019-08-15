import React, { Component,Fragment} from 'react';
import { render } from 'react-dom';
import MobileKeyboard from './mobileKeyboard';
class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      keyboard:false,
      value:'',
      title:'inter value'
    }
  }
  theme1 = {
    keyBackground:'#696969',
    keyColor:'#fff',
    background:'#242424',
    titleColor:'#fff',
    lcdColor:'#000',
    lcdBackground:'#eee',
    keyActiveColor:'#4c6bff',
    keyBoxShadow:'0 1px 2px 0px #000', 
  }
  theme2 = {
    keyBackground:'#5b696c',
    keyColor:'#fff',
    background:'#36474f',
    titleColor:'#fff',
    lcdColor:'#000',
    lcdBackground:'#fff',
    keyActiveColor:'#699bb4',
    keyBoxShadow:'0 1px 2px 1px #29333c', 
  }
  theme3 = {
    keyBackground:'#3b3e4b',
    keyColor:'#fff',
    background:'#2d2f39',
    titleColor:'#fff',
    lcdColor:'#000',
    lcdBackground:'#eee',
    keyActiveColor:'#4556aa',
    keyBoxShadow:'0 1px 2px 1px #222', 
  }
  openKeyboard(){
    this.setState({keyboard:true});
  }
  callback(value){
    this.setState({value});
  }
  closeKeyboard(){
    this.setState({keyboard:false});
  }
  render(){
    return(
      <Fragment>
        <button onClick={this.openKeyboard.bind(this)}>open keyboard</button>
        <div id='result'>{this.state.value}</div>
        <MobileKeyboard 
          value={this.state.value} 
          open={this.state.keyboard} 
          title={this.state.title}
          callback={this.callback.bind(this)} 
          onclose={this.closeKeyboard.bind(this)}
          keyHeight={36}//default is 36
          gap={3}//default is 2
          theme={this.theme3}
        />
      </Fragment>
    );
  }
}
render(<App />, document.getElementById('root'));
