import React from 'react'
import Editor from '../components/Editor';
import Preview from '../components/Preview';
import Toolbar from '../components/Toolbar';
import { placeholder } from '../components/Placeholder';


const App = () => {
  const [state, setState] = React.useState({
    markdown: placeholder,
    editorMaximized: false,
    previewMaximized: false
  })

  const classes = state.editorMaximized
    ? ['editorWrap maximized', 'previewWrap hide', 'fa fa-compress']
    : state.previewMaximized
      ? ['editorWrap hide', 'previewWrap maximized', 'fa fa-compress']
      : ['editorWrap', 'previewWrap', 'fa fa-arrows-alt'];

  const handleEditorMaximize = () => {
    setState({
      ...state,
      editorMaximized: !state.editorMaximized
    })
  }

  const handleChange = (e) => {
    setState({
      ...state,
      markdown: e.target.value
    });
  }
  const handlePreviewMaximize = () => {
    setState({
      ...state,
      previewMaximized: !state.previewMaximized
    });
  }
  return (
    <div className="app">

  <h1 className="text-center">Markdown Live Preview</h1>

      <div className="row">
        <div class="col-sm-6 col-md-6">
          <div class="card ">
            <div class="card-header">
              <Toolbar
                icon={classes[2]}
                onClick={handleEditorMaximize}
                text='Editor'
              /></div>
            <div class="card-body">
              <Editor markdown={state.markdown} onChange={handleChange} />
            </div>
          </div>

        </div>

        <div class="col-sm-6 col-md-6">
        <div class="card "> 
        <div className='converter' />
        <div class="card-header">
         
            <Toolbar
              icon={classes[2]}
              onClick={handlePreviewMaximize}
              text='Previewer'
            />
           </div>
           <div class="card-body edit-prev">
           <Preview markdown={state.markdown} /> 
            </div>
           </div>
        </div>
      </div>
    </div>
  
  )
}

export default App
