import AbstractModal from "../AbstractModal";
export default function VaccineModal({isOpen, closeModal}){
    return (
        <AbstractModal title="Vaccine appointment software" isOpen={isOpen} closeModal={closeModal}>
          <p>
          Github link:https://github.com/frocen/Vaccine
      <br/><br/></p>
        </AbstractModal>
      );
}
