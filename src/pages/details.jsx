const Details = (props) => {
  
    return (
      <div>
        <p> username: {props.username ? props.username : "John"}  </p>
        <p> telephone: {props.telephone ? props.telephone : 123456}</p>
      </div>
    );
  };
  
  export default Details;
  