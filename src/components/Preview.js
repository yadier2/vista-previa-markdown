const marked = require ('marked')

const Preview = props => {
  marked.setOptions({
    breaks: true
  })
    return (
      
      <div
         dangerouslySetInnerHTML={{
          __html: marked(props.markdown)
        }} 
        id='preview'
      /> 
      
    );
  };

  export default Preview

  