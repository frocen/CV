import { joinClasses } from '@volusion/element-block-utils';
import { AiOutlineClose } from "react-icons/ai";

export default function AbstractModal({ title, children, isOpen, closeModal }) {
  return (
    <div
      className={joinClasses(
        "fixed top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center backdrop-blur-sm z-[100] m-4",
        !isOpen && "hidden"
      )}
    >
      <div className="flex flex-col gap-2 p-4 sm:p-6 lg:p-8 bg-[#fff7ed] font-roboto text-[#3D3833] text-base sm:text-lg lg:text-xl h-3/5 w-2/3 lg:h-3/4 lg:max-w-4xl rounded-lg">
        <div className="flex justify-between items-center">
          <p className="text-2xl sm:text-3xl lg:text-4xl">{title}</p>
          <button onClick={closeModal}>
            <AiOutlineClose />
          </button>
        </div>
        <div className="overflow-x-auto">{children}</div>
      </div>
    </div>
  );
}
