import AbstractModal from "../AbstractModal";
export default function WordleModal({isOpen, closeModal}){
    return (
        <AbstractModal title="Word guessing game" isOpen={isOpen} closeModal={closeModal}>
          <p>
          This is a team project. I am mainly responsible for the implementation of some functions and all functional tests.
          <br /><br/>
          This course is mainly for learning scrum systematically, and the project only requires two sprints to be completed.
          <br /><br/>
          Try this game:<br/>
          https://frocen.github.io/wordle/
      </p>
        </AbstractModal>
      );
}
