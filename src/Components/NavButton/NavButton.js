import { withRouter } from 'react-router-dom'

const NavButton = withRouter(({ history, ...props }) => (
    // if validation is true, will reroute
    // {...props}
    <button
      type='submit'
      disabled={props.disabled}
      onClick={ () => {
          history.push(props.nav);
          if(props.submit){
            props.submit();
          }} }
      className="btn btn-dark mt-4 btn-lg" 
      style={{marginTop: "10px"}}
    >
      {props.children}
    </button>
));

export default NavButton;