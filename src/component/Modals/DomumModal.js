import AbstractModal from "../AbstractModal";
export default function DomumModal({isOpen, closeModal}){
    return (
        <AbstractModal title="not ready" isOpen={isOpen} closeModal={closeModal}>
          <p>
        not ready
      </p>
        </AbstractModal>
      );
}
