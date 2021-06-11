const Editor = props => {
    return (
      <textarea
      className="form-control "
        id='editor'
        onChange={props.onChange}
        type='text'
        value={props.markdown}
      />
    );
  };

 export default Editor 