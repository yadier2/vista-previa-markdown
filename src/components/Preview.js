const marked = require ('marked')

const Preview = props => {
    return (
      <>
      <div
         dangerouslySetInnerHTML={{
          __html: marked(props.markdown)
        }} 
        id='preview'
      /> 
      </>
    );
  };

  export default Preview