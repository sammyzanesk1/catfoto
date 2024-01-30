import cat1 from "../assets/cat1.jfif";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

export default function Contact() {
  return (
    <div className="contacts">
      <div className="contact-card">
        <img src={cat1} className="cat" />
        <p className="name">Mr Zane SK</p>
        <div className="info--group">
          <div className="call">
            <IoCall /> <p>(212) 555-1234</p>
          </div>

          <div className="mail">
            <MdEmail size="1.2rem" /> <p>mrzane@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
