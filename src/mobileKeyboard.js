import React, { Component,createContext} from 'react';
import './index.css';
import $ from 'jquery';
var keyboardContext = createContext();

export default class MobileKeyboard extends Component {
  constructor(props) {
    super(props);
    var {value = '',theme} = this.props;
    this.theme = this.getTheme(theme);
    this.state = {
      caps:false,sym:false,value,init:true,
      isMobile:'ontouchstart' in document.documentElement?true:false,
      row1:{
        index:'1',
        items: [
          {text:'1',sym:'{',width:'10%'},
          {text:'2',sym:'}',width:'10%'},
          {text:'3',sym:'|',width:'10%'},
          {text:'4',sym:'[',width:'10%'},
          {text:'5',sym:']',width:'10%'},
          {text:'6',sym:'\\',width:'10%'},
          {text:'7',sym:'~',width:'10%'},
          {text:'8',sym:'<',width:'10%'},
          {text:'9',sym:'>',width:'10%'},
          {text:'0',sym:'`',width:'10%'},
        ]
      },
      row2:{
        index:'2',
        items: [
          {text:'q',sym:'+',width:'10%'},
          {text:'w',sym:'x',width:'10%'},
          {text:'e',sym:'÷',width:'10%'},
          {text:'r',sym:'=',width:'10%'},
          {text:'t',sym:'/',width:'10%'},
          {text:'y',sym:'_',width:'10%'},
          {text:'u',sym:'€',width:'10%'},
          {text:'i',sym:'£',width:'10%'},
          {text:'o',sym:'¥',width:'10%'},
          {text:'p',sym:'*',width:'10%'},
        ]
      },
      row3:{
        index:'3',
        items: [
          {text:'a',sym:'!',width:'10%',marginLeft:'5%'},
          {text:'s',sym:'@',width:'10%'},
          {text:'d',sym:'#',width:'10%'},
          {text:'f',sym:'$',width:'10%'},
          {text:'g',sym:'%',width:'10%'},
          {text:'h',sym:'^',width:'10%'},
          {text:'j',sym:'&',width:'10%'},
          {text:'k',sym:'(',width:'10%'},
          {text:'l',sym:')',width:'10%'},   
        ]
      },
      row4:{
        index:'4',
        items: [
          {text:'caps',id:'key-caps',width:'15%'},
          {text:'z',sym:'-',width:'10%'},
          {text:'x',sym:"'",width:'10%'},
          {text:'c',sym:'"',width:'10%'},
          {text:'v',sym:':',width:'10%'},
          {text:'b',sym:';',width:'10%'},
          {text:'n',sym:',',width:'10%'},
          {text:'m',sym:'?',width:'10%'},
          {text:'back',type:'type6',id:'key-back',sym:'+',width:'15%'},    
        ]
      },
      row5:{
        index:'5',
        items: [
          {text:'!#1',id:'sym',width:'10%'},
          {text:',',width:'10%'},
          {text:'Space',id:'key-space',width:'60%'},
          {text:'.',width:'10%'},
          {text:'inter',id:'key-inter',width:'10%'},
        ]
      }
    };
  }
  getUpper(item){
    var {caps,sym} = this.state;
    if(['key-close','key-space','key-inter','key-caps','key-back'].indexOf(item.id) !== -1){return item.text;}
    if(sym&& item.sym){return item.sym;}
    else if(caps){return item.text.toUpperCase();}
    else{return item.text;}
  }
  getBack(value){
    if(value.length === 0){return false;}
    return value.slice(0,value.length - 1);
  }
  inter(){
    if(this.props.callback){
      this.props.callback(this.state.value);
      this.close();
    }
  }
  keydown(item){
    var {init,row1,row2,row3,row4,row5,value,caps,sym,isMobile} = this.state;
    var id = item.id;
    if(id === 'key-caps'){this.setState({caps:!caps})}
    else if(id === 'sym'){this.setState({sym:!sym})}
    else if(id === 'key-inter'){
      this.inter();
    }
    else if(id === 'key-space'){
      if(init){this.setState({value:'',init:false})}
      else if(value.length > 0 && value[value.length - 1] !== ' '){
        this.setState({value:value + ' '});
      }
    }
    else if(id === 'key-back'){
      if(init){this.setState({value:'',init:false})}
      else if(value.length > 0){
        this.setState({value:this.getBack(value)})
      }
    }
    else if(id === 'key-close'){
      this.close();
    }
    else{
      $(window).bind(isMobile?'touchend':'mouseup',$.proxy(this.keyup,this));
      this.active = item;
      item.active = true;
      this.setState({row1,row2,row3,row4,row5})
    }
  }
  keyup(){
    var {isMobile} = this.state;
    $(window).unbind(isMobile?'touchend':'mouseup',this.keyup);
    var {row1,row2,row3,row4,row5,value,init} = this.state;
    this.active.active = false;
    if(init){
      this.setState({row1,row2,row3,row4,row5,value:this.getUpper(this.active),init:false})
    }
    else{
      this.setState({row1,row2,row3,row4,row5,value:value + this.getUpper(this.active)})
    }
    this.active = false;
  }
  getStyle(){
    var {style} = this.props;
    var {background} = this.theme;
    return $.extend({},{background},style);
  }
  close(){
      this.setState({init:true});
      this.props.onclose();
  }
  lcdMouseDown(){
    var {init} = this.state;
    this.setState({init:!init})
  }
  getTheme(theme = {}){
    var def = {
      background:'#c9ced4',
      keyColor:'#28292b',
      keyActiveColor:'#1d5ee4',
      keyBackground:'#fff',
      lcdBackground:'#eee',
      lcdColor:'#666',
      titleColor:'#000',
      highlight:'#7fb9ef',
      keyBoxShadow:undefined,
    };
    return $.extend({},def,theme)
  }
  render() {
    var {caps,value,sym,init,isMobile} = this.state;
    var {open} = this.props;
    if(!open){return '';}
    var {title = '',keyHeight = 36,gap = 2} = this.props;
    var contextValue = {
      caps,sym,keydown:this.keydown.bind(this),
      value,init,theme:this.theme,title,
      keyHeight,gap,getUpper:this.getUpper.bind(this),
      lcdMouseDown:this.lcdMouseDown.bind(this),
      isMobile
    };
    var backDropProps = {
      className:'back-drop',
      [isMobile?'onTouchStart':'onMouseDown']:this.close.bind(this)
    };
    return (
      <keyboardContext.Provider value={contextValue}>
      <div className={"keyboard" + (caps?' caps':'')} style={this.getStyle()}>
        
        <div {...backDropProps}></div>
        <KeyboardTitle />
        <KeyboardHeader />
        <KeyboardRow row={this.state.row1}/>
        <KeyboardRow row={this.state.row2}/>
        <KeyboardRow row={this.state.row3}/>
        <KeyboardRow row={this.state.row4}/>
        <KeyboardRow row={this.state.row5}/>    
      </div>
      </keyboardContext.Provider>
    );
  }
}
class KeyboardRow extends Component{
  static contextType = keyboardContext;
  render(){
    var {row} = this.props;
    var keys = row.items.map((item,i)=><KeyboardKey key={row.index + i} item={item}/>);
    return (
      <div className='keyboard-row'>
        {keys}
      </div>
    );
  }
}
class KeyboardKey extends Component{
  static contextType = keyboardContext;
  getColor(){
    var {caps,sym,theme} = this.context;
    var {keyColor,keyActiveColor} = theme;
    var {item} = this.props;
    if(item.id==='key-caps'){
      return caps?keyActiveColor:keyColor;
    }
    else if(item.id==='sym'){
      return sym?keyActiveColor:keyColor;
    }
    else {return keyColor;}
  }
  
  getStyle(){
    var {keyHeight,gap} = this.context;
    var {item} = this.props;
    return {
      height: keyHeight+'px',
      lineHeight:(keyHeight - 2 * gap)+'px',
      width:item.width,
      marginLeft:item.marginLeft,
      padding:gap+'px',
    }
  }
  getKeyStyle(mode){
    var {theme} = this.context;
    var {keyBackground,keyColor,keyBoxShadow} = theme;
    return {
      color:mode === 'shadow'?keyBackground:this.getColor(),
      background:mode === 'shadow'?keyColor:keyBackground,
      boxShadow:keyBoxShadow,
    }
  }
  render(){
    var {item} = this.props;
    var {keydown,getUpper,isMobile} = this.context;
    
    var containerProps = {
      className:"key-container",style:this.getStyle(),
      [isMobile?'onTouchStart':'onMouseDown']:()=>keydown(item)
    };

    var keyProps = {
      className:item.className + ' keyboard-key', 
      id:item.id,style:this.getKeyStyle()
    };

    var shadowProps = {
       className:'keyboard-key key-shadow',style:this.getKeyStyle('shadow')
    };
    return (
      <div {...containerProps}>
        <div {...keyProps}>
          {getUpper(item)}
          {item.active && <div {...shadowProps}>{getUpper(item)}</div>}
        </div>
      </div>
    );
  }
}
class KeyboardHeader extends Component{
  static contextType = keyboardContext;
  getLCDStyle(){
    var {theme,keyHeight,gap} = this.context;
    var {lcdBackground} = theme;
    return {
      background:lcdBackground,
      minHeight:(keyHeight - 2 * gap) + 'px',
      maxHeight:(keyHeight * 3) + 'px',
      lineHeight:(keyHeight - 2 * gap) + 'px',
      width:`calc(100% - 54px - ${gap}px)`,
      marginLeft:gap + 'px',
      marginTop:gap + 'px'
    }
  }
  render(){
    var {value,init,lcdMouseDown,theme,isMobile} = this.context;
    var {highlight,lcdColor} = theme;
    var lcdProps = {
       className:'keyboard-lcd',style:this.getLCDStyle(),
       [isMobile?'onTouchStart':'onMouseDown']:lcdMouseDown
    };
    var markProps = {
       style:{
         background:init?highlight:'none',
         color:init?'#fff':lcdColor
      }
    }
  
    return (
      <div className='keyboard-header'>
        <KeyboardKey item={{text:'Close',id:'key-close',width:'50px'}}/>
        <div {...lcdProps}>
          <mark {...markProps}>{value}</mark>
        </div>
      </div>
    );
  }
}
class KeyboardTitle extends Component{
  static contextType = keyboardContext;
  getStyle(){
    var {keyHeight,theme,gap} = this.context;
    var {titleColor} = theme;
    return {
      height:keyHeight + 'px',
      lineHeight:keyHeight + 'px',
      color:titleColor,
      padding:`0 ${gap}px`
    }
  }
  render(){
    var {title} = this.context;
    return(<div className='keyboard-title' style={this.getStyle()}>{title}</div>);
  }
}