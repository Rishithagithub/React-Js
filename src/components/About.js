import UserClass from "./UserClass";
const About = () => {
  return (
    <div className="bg-orange-100 ">
      <h1 className="p-2 m-4 font-bold text-base">About</h1>
      <h2 className=" p-2 m-4 font-bold text-base">
        This is Food Ordering App done By🙂
      </h2>
      <UserClass
        name={"Rishitha Sunkara developed  Food App"}
        location={"Bangalore"}
      />
    </div>
  );
};
export default About;
