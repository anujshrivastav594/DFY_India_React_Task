import Details from "./details";
import useFetch from "../usefetch";
import { Link } from "react-router-dom";
const Home = () => {
  const { data, loading } = useFetch("https://randomuser.me/api/");

  let username = "John";
  let telephone = 123456;
  console.log(data);

  const handleClick = () => {
     username={username};
     telephone={telephone};
    
  };
  return (
    <div>
      <Details username={username} telephone={telephone} />
      <p>
        Navigate to <a href="/student-details">Details</a> Page{" "}
        
        <Link to="/student-details">
          <button onClick={handleClick}>Details</button>
        </Link>
      </p>
      {loading ? (
        "please wait, loading"
      ) : (
        <>
          <>
            {data &&
              data.results?.map((item) => (
                <div key={item.email}>
                  <p>
                    -------XXXXXXX-----Data from
                    Api------RESULTS--------XXXXXXXXX---
                  </p>
                  Gender: {item.gender} <br />
                  <p> Name - </p>
                  Title : {item.name.title} <br />
                  First : {item.name.first} <br />
                  Last : {item.name.last} <br />
                  <p></p>
                  <p> location - </p>
                  <p> Street - </p>
                  Street Number : {item.location.street.number} <br />
                  Street Name : {item.location.street.name} <br />
                  <p></p>
                  City : {item.location.city} <br />
                  State : {item.location.state} <br />
                  Country : {item.location.country} <br />
                  Postcode : {item.location.postcode} <br />
                  <p></p>
                  <p> Email - </p>
                  Email : {item.email} <br />
                  <p></p>
                  <p> Login - </p>
                  UUID : {item.login.uuid} <br />
                  Username : {item.login.username} <br />
                  Password : {item.login.password} <br />
                  Md5 : {item.login.md5} <br />
                  Shal1 : {item.login.shal1} <br />
                  Sha256 : {item.login.sha256} <br />
                  <p></p>
                  <p> DOB - </p>
                  Date : {item.dob.date} <br />
                  Age : {item.dob.age} <br />
                  <p></p>
                  <p> Registered - </p>
                  Date : {item.registered.date} <br />
                  Age : {item.registered.age} <br />
                  <p></p>
                  Phone: {item.phone} <br />
                  Cell: {item.cell} <br />
                  <p> ID - </p>
                  Name : {item.id.name} <br />
                  Value : {item.id.value} <br />
                  <p></p>
                  <p> Picture - </p>
                  Large : <img src={item.picture.large} alt=""/> <br />
                  Medium: <img src={item.picture.medium} alt=""/>
                  <br />
                  Thumbnail: <img src={item.picture.thumbnail} alt=""/> <br />
                  <p></p>
                  Nat: {item.nat} <br />
                  <p>
                    ------XXXXXXX----Data from ApI------INFOS------XXXXXXX-----
                  </p>
                </div>
              ))}
          </>

          <>
            {data && (
              <>
                seed :{data.info?.seed} <br />
                results : {data.info?.results} <br />
                page : {data.info?.page} <br />
                version : {data.info?.version}
              </>
            )}
          </>
        </>
      )}
    </div>
  );
};

export default Home;
export const username = "John";
//https://randomuser.me/api/
