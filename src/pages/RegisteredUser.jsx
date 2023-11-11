import { useLocation } from "react-router-dom";

function RegisteredUser() {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <h1>Welcome wash your hands</h1>
    </div>
  );
}

export default RegisteredUser;
