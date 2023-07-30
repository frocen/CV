import AbstractModal from "../AbstractModal";
export default function VaccineModal({isOpen, closeModal}){
    return (
        <AbstractModal title="Vaccine appointment software" isOpen={isOpen} closeModal={closeModal}>
          <p>
not ready      
      <br/><br/></p>
        </AbstractModal>
      );
}
