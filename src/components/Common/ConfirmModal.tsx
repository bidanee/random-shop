import { ReactNode, RefObject } from "react";

interface ConfirmProps {
  readonly dialogRef: RefObject<HTMLDialogElement>;
  readonly children: ReactNode;
  readonly onConfirm: () => void;
  readonly onCancel: () => void;
}

const ConfirmModal = ({
  dialogRef,
  children,
  onConfirm,
  onCancel,
}: ConfirmProps) => {
  return (
    <dialog
      className="relative w-10/12 py-8 rounded-lg shadow-md text-neutral-600"
      ref={dialogRef}
    >
      <form method="dialog">
        <div className="text-sm font-bold text-center">{children}</div>
        <div className="flex justify-center space-x-2 mt-6">
          <button className="btn btn-sm btn-outline w-1/3" onClick={onCancel}>
            취소
          </button>
          <button
            className="btn btn-sm btn-ghost bg-accent-focus hover:bg-accent-focus text-base-100 w-1/3"
            onClick={onConfirm}
          >
            확인
          </button>
        </div>
      </form>
    </dialog>
  );
};
export default ConfirmModal;
