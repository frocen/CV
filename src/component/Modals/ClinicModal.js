import AbstractModal from "../AbstractModal";
export default function ClinicModal({isOpen, closeModal}){
    return (
        <AbstractModal title="Clinic's software" isOpen={isOpen} closeModal={closeModal}>
          <p>
          This is software used by a small clinic. Mainly completed the realization of API. The technology stack uses spring boot and MyBatis-Plus. All APIs passed Postman and Junit tests.
      <br/><br/>
      The software has three ports, divided into, customers, staff, administrators. Customers can book appointments, receive notifications, change time, delete appointments, chat with doctors, view and change profiles. Doctors can prescribe medicine and chat with clients. Administrators can manage all information, including updates to drug quantities.
      <br/><br/>
      This course is mainly for in-depth learning of Scrum and the use of tools. The entire project does not need to be fully completed. The course (Software Engineering: Process and Tools) scored 87.
      </p>
      
        </AbstractModal>
      );
}
