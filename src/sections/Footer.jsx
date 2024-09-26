import { Element } from "react-scroll";
import footer from "../data/footerData";

function Footer() {
  return (
    <Element
      name="footer"
      id="footer"
      className="w-full h-[20vh] bg-black text-white"
    >
      <div className="m-auto max-w-screen-xl">
        <ul className="flex flex-flow flex-nowrap justify-start items-center gap-4 mb-4">
          <li className="mr-4">
            <ul>
              {footer.map((element) => (
                <li key={element.category}>{element.category}</li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </Element>
  );
}

export default Footer;
