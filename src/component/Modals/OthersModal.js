import AbstractModal from "../AbstractModal";
export default function OthersModal({isOpen, closeModal}){
    return (
        <AbstractModal title="Java projects" isOpen={isOpen} closeModal={closeModal}>
          <p>
          Tasks management app: Not ready
          <br/><br/>
          Trading Game: Not ready
          <br/><br/>
          Look at the code:https://github.com/frocen/Java-Projects
          <br/><br/>
      </p>
      
        </AbstractModal>
      );
}
