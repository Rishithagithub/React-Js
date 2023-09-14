import React from "react";
//class-Based Component

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        name: "rishitha",
        location: "Nellore",
        avatar_url: "",
        company: "Start-Up",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Rishithagithub");
    const json = await data.json();
    this.setState({
      info: json,
    });
    console.log(json);
  }

  render() {
    const { name, location, avatar_url, company } = this.state.info;
    return (
      <div className="user-card  m-4 p-4 bg-orange-100">
        <img className="w-25" src={avatar_url} />
        <h3 className="font-bold">Name:{name}</h3>
        <h3>Location:{location}</h3>
        <h3>Contact:@rishithasunkara</h3>
        <h3>Company:{company}</h3>
      </div>
    );
  }
}
export default UserClass;
