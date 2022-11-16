import "./index.css";
import "./data";

function Notification({ number, image }) {
  return (
    <>
      <div className="flex gap-2 p-4 bg-project-white2 rounded-xl mb-3">
        <img className="w-10 h-10" src={image} alt="Profile of user"></img>
        <div>
          <p className="text-sm">
            <span className="font-semibold">{number.name}</span>{" "}
            <span className="text-project-grey">{number.action}</span>{" "}
            <span className="font-semibold text-project-darkGrey">
              {number.post}
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Notification;
