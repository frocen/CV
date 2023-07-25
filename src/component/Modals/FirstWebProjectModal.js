import AbstractModal from "../AbstractModal";
export default function FirstWebProjectModal({isOpen, closeModal}){
    return (
        <AbstractModal title="First web project" isOpen={isOpen} closeModal={closeModal}>
          <p>
        Github page:<br/><br />
        https://peter6055.github.io/COSC1078ASSES2/
      </p>
        </AbstractModal>
      );
}
