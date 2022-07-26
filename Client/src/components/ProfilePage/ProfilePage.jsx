import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { Button } from "./Button"


export const ProfilePage = () => {

    const user = JSON.parse(localStorage.getItem("logindetails")) || null;
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Account"
    }, [])

    return (
      <div className="profile-div">
        <div className="user-div">
          <img
            className="profile-pic"
            src={
              user.ImageUrl
                ? user.ImageUrl
                : "https://www.nicepng.com/png/detail/964-9648552_png-file-svg-profile-icon-white-png.png"
            }
            alt=""
          />
          <h3 className="name">Welcome, {user.first_name}</h3>
        </div>

        <p className="left-text sub-header">Profile Info</p>
        <p className="left-text sub-body">Name: {user.first_name}</p>
        <p className="left-text sub-body">Email: {user.email}</p>

        <Button width="100%">EDIT PROFILE</Button>

        <hr className="line-margin" />

        <div className="margin">
          <p className="left-text sub-header">Bookmarks</p>
          <Button>OPEN</Button>
        </div>

        <hr className="line-margin" />

        <div className="margin">
          <p className="left-text sub-header">Newsletters</p>
          <Button>OPEN</Button>
        </div>

        <hr className="line-margin" />

        <p className="left-text sub-header">Account Privacy</p>
        <p className="left-text sub-body">
          We collect the personal data you give us when you sign up to be our
          member. You can learn more about the types of data we collect here.
          You have the right to request the data we collect from you or ask us
          to delete it. Your request will be reviewed by our staff, and you may
          be asked to provide additional information to verify your identity.
        </p>

        <div style={{ gap: "1vw" }}>
          <Button width="100%" className="btn1">
            REQUEST MY DATA
          </Button>
          <Button width="100%" className="btn1">
            DELETE MY DATA
          </Button>
        </div>

        <hr className="line-margin" />

        <p className="left-text sub-header">Support</p>
        <p className="left-text sub-body">
          Please read our FAQ if you have questions about using your account,
          such as logging in or leaving comments. For other questions, please
          contact support@huffpost.com.
        </p>

        <Button
          width="100%"
          className="btn1"
          onClick={() => {
            localStorage.removeItem("logindetails");
            navigate("/");
          }}
        >
          LOGOUT
        </Button>
      </div>
    );
}