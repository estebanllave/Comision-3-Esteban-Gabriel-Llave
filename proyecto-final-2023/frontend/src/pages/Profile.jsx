import NavbarPrivate from "../components/NavbarPrivate"
// import NavbarPublic from "../components/NavbarPublic";
import { useAuth } from "../context/AuthContext";

export const Profile = () => {
    const { user } = useAuth();
    return (
      <>
        <NavbarPrivate/>
        {/* <NavbarPublic/> */}
        <div>Profile</div>
        {JSON.stringify(user, null, 3)}
      </>
    );
  };