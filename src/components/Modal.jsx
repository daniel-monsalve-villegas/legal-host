import { TfiClose } from "react-icons/tfi";

export default function Module() {
  return (
    <div className="w-1/2 h-1/2 font-roboto absolute bg-gray-300 rounded-3xl top-full mt-40 left-1/4">
      <button>
        <TfiClose />
      </button>
      <h2 className="text 8xl font-bold">Lorem ipsum dolor</h2>
      <p className="text-3xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        magni! Blanditiis nemo optio explicabo in ea accusamus dolor
        voluptatibus nisi rerum, modi dolorem necessitatibus corrupti ipsam
        expedita dicta cum hic.
      </p>
    </div>
  );
}
