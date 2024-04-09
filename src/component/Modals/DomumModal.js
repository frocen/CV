import AbstractModal from "../AbstractModal";
export default function DomumModal({isOpen, closeModal}){
    return (
        <AbstractModal title="Domum Gym" isOpen={isOpen} closeModal={closeModal}>
          <p>
          I was responsible for making the pages about us, normal user profile, professional user profile, sidebar for the studio (including layout changes) and the old home page (Discarded by the design department).
      <br/><br/>
      Link:
      https://domumgym.com/
      <br/><br/>
      About us page link:
      https://dev.beta.domumgym.com/about
      <br/><br/>
      Normal user profile link:
      https://dev.beta.domumgym.com/profile/normalUserProfile
      <br/><br/>
      Professional user profile link:
      https://dev.beta.domumgym.com/profile/professional_profile_1_person
      <br/><br/>
      Studio link:
      https://dev.beta.domumgym.com/studio/dashboardProfessional
      <br/>
      and
      https://dev.beta.domumgym.com/studio/</p>
        </AbstractModal>
      );
}
