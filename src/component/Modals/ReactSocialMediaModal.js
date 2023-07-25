import AbstractModal from "../AbstractModal";
export default function ReactSocialMediaModal({isOpen, closeModal}){
    return (
        <AbstractModal title="Social media platform" isOpen={isOpen} closeModal={closeModal}>
          <p>
          This is a two-person project. I am responsible for part of the front-end page, and the connection with the back-end. 
          <br /><br/>
          The main functions of the project include login and registration, posting messages, following messages, deleting messages, 
          replying, likes, etc.
      </p>
        </AbstractModal>
      );
}
