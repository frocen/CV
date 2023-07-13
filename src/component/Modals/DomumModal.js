import AbstractModal from "../AbstractModal";
export default function DomumModal({isOpen, closeModal}){
    return (
        <AbstractModal title="Terms of Use" isOpen={isOpen} closeModal={closeModal}>
          <p>
        An application's Terms of Use is a set of legal rules and agreements
        between the user and the application provider. Below is an example of an
        application's Terms of Use:
        <br />
        <br />
        Terms of Use of the Domumgym application:
        <br />
        <br />
        Welcome to Domumgym, an app designed to help you on your journey to a
        healthy and active life. By using our app, you agree to the following
        terms and conditions:
        <br />
        <br />
        Content: The Domumgym app is provided for your personal, non-commercial
        use and its content is intended for informational purposes only. We
        strive to provide accurate and up-to-date information, but we do not
        guarantee the accuracy, completeness, or reliability of the content.
        <br />
        <br />
        Use of the application: By using our application, you agree not to
        engage in any activity that could damage the application or interfere
        with its normal operation. You agree to use our application in
        accordance with applicable laws and regulations.
        <br />
        <br />
        Liability: You assume full responsibility for your use of our App and
        acknowledge that your use of the App is at your own risk. In no event
        will we be liable for any direct, indirect, incidental, special,
        consequential or punitive damages arising from the use of our
        application.
        <br />
        <br />
        Intellectual property: All intellectual property rights related to the
        Domumgym application and its content belong to their respective owners.
        You agree not to use the content of our application for commercial
        purposes without our prior written permission.
        <br />
        <br />
        Modifications: We reserve the right to modify these Terms of Use at any
        time and without prior notice. The updated version of the Terms of Use
        will be published in our application and will apply from the moment of
        its publication.
        <br />
        <br />
        By using our app, you agree to these Terms of Use in their entirety. If
        you do not agree with any of these terms, please do not use our
        application. If you have any questions about these Terms of Use, please
        contact us through our contact section in the application.
      </p>
        </AbstractModal>
      );
}
