import Contact from "./component/Contact";

export default function App() {
  return (
    <>
      <div className="contact--instance">
        <div className="a">
          <Contact />
          <Contact />
        </div>
        <div className="b">
          <Contact />
          <Contact />
        </div>
      </div>
    </>
  );
}
