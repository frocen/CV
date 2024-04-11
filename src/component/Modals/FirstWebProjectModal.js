import AbstractModal from "../AbstractModal";
export default function FirstWebProjectModal({isOpen, closeModal}){
    return (
        <AbstractModal title="First web project" isOpen={isOpen} closeModal={closeModal}>
          <p>
        See the page:<br/><br />
        https://frocen.github.io/First-Website/
      </p>
        </AbstractModal>
      );
}
