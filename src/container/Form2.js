import React, {Component} from 'react'
import {DropzoneArea} from 'material-ui-dropzone'
 
export default class Form2 extends Component{
  constructor(props){
    super(props);
    this.state = {
      files: []
    };
  }
  handleChange(files){
    this.setState({
      files: files
    });
  }
  render(){
    return (
      <div>
      <DropzoneArea style={{border:"none"}}
        onChange={this.handleChange.bind(this)}
        />
      </div>
    )
  }
}
