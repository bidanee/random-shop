import { RefObject } from "react";

interface InformModalProps {
  readonly dialogRef: RefObject<HTMLDialogElement>;
  readonly inform: string;
}
const InformModal = ({ dialogRef, inform }: InformModalProps) => {
  return (
    <dialog
      className=" py-10 backdrop:bg-transparent w-1/3 h-24 rounded-lg bg-green-300 shadow-md text-white outline-none"
      ref={dialogRef}
    >
      <form method="dialog" className="flex justify-center items-center">
        <div className="flex justify-center items-center">{inform}</div>
      </form>
    </dialog>
  );
};
export default InformModal;
