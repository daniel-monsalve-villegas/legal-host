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
        <ul className="flex flex-flow flex-nowrap justify-center items-start gap-12 mb-4 p-8 cursor-pointer">
          <li>
            <ul>
              {footer.slice(0, 5).map((element) => (
                <li
                  key={element.category}
                  className="first-of-type:text-xl first-of-type:cursor-auto"
                >
                  {element.category}
                </li>
              ))}
            </ul>
          </li>
          <li className="">
            <ul>
              {footer.slice(5, 10).map((element) => (
                <li
                  key={element.category}
                  className="first-of-type:text-xl first-of-type:cursor-auto"
                >
                  {element.category}
                </li>
              ))}
            </ul>
          </li>
          <li className="">
            <ul>
              {footer.slice(10).map((element) => (
                <li
                  key={element.category}
                  className="first-of-type:text-xl first-of-type:cursor-auto"
                >
                  {element.category}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </Element>
  );
}

export default Footer;
