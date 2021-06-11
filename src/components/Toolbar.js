const Toolbar = props => {
    return (
      <div className='toolbar'>
        <i className='fa fa-free-code-camp' title='no-stack-dub-sack' />
        {props.text}
      </div>
    );
  };

  export default Toolbar