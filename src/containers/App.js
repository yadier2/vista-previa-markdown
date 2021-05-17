import React from 'react'
import Editor from '../components/Editor';
import Preview from '../components/Preview';
import Toolbar from '../components/Toolbar';
import {placeholder} from '../components/Placeholder';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder,
      editorMaximized: false,
      previewMaximized: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEditorMaximize = this.handleEditorMaximize.bind(this);
    this.handlePreviewMaximize = this.handlePreviewMaximize.bind(this);
  }
  handleChange(e) {
    this.setState({
      markdown: e.target.value
    });
  }
  handleEditorMaximize() {
    this.setState({
      editorMaximized: !this.state.editorMaximized
    });
  }
  handlePreviewMaximize() {
    this.setState({
      previewMaximized: !this.state.previewMaximized
    });
  }
  render() {
    const classes = this.state.editorMaximized
      ? ['editorWrap maximized', 'previewWrap hide', 'fa fa-compress']
      : this.state.previewMaximized
        ? ['editorWrap hide', 'previewWrap maximized', 'fa fa-compress']
        : ['editorWrap', 'previewWrap', 'fa fa-arrows-alt'];
    return (
      <div>
        <div className={classes[0]}>
          <Toolbar
            icon={classes[2]}
            onClick={this.handleEditorMaximize}
            text='Editor'
          /> 
          <Editor markdown={this.state.markdown} onChange={this.handleChange} />
        </div>
        <div className='converter' />
        <div className={classes[1]}>
        <Toolbar
            icon={classes[2]}
            onClick={this.handlePreviewMaximize}
            text='Previewer'
          /> 
        
         <Preview markdown={this.state.markdown} /> 
        </div>
        
      </div>
    );
  }
}



export default App