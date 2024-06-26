import developer from "../assets/developer-3461405.png";
import { TypeAnimation } from 'react-type-animation';
import VanillaTilt from "vanilla-tilt";
import { useState, useEffect } from "react";
import BACKEND from '../component/backEnd'
import FRONTEND from '../component/frontEnd'
import TIMELINE from '../component/timeLine'
import DomumModal from "../component/Modals/DomumModal";
import ClinicModal from "../component/Modals/ClinicModal";
import FirstWebProjectModal from "../component/Modals/FirstWebProjectModal";
import ReactSocialMediaModal from "../component/Modals/ReactSocialMediaModal";
import WordleModal from "../component/Modals/WordleModal";
import VaccineModal from "../component/Modals/VaccineModal";
import OthersModal from "../component/Modals/OthersModal";

// npm install gh-pages --save-dev
// git add .
// git commit -m "deploy"
// git push
//npm run deploy

const Home = () => {
  const [backFrontSwicher, setBackFrontSwicher] = useState(true);
  const [showDomum, setShowDomum] = useState(false);
  const [showVaccine, setShowVaccine] = useState(false);
  const [showClinic, setShowClinic] = useState(false);
  const [showWordle, setShowWordle] = useState(false);
  const [showReactSocialMedia, setReactSocialMedia] = useState(false);
  const [showFirstWebProject, setFirstWebProject] = useState(false);
  const [showOthers, setShowOthers] = useState(false);

  function isMobileTablet() {
    var check = false;
    (function (a) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
        check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  }
  function handleSwitcher() {
    if (backFrontSwicher) {
      setBackFrontSwicher(false);
    } else {
      setBackFrontSwicher(true);
    }
  }
  useEffect(() => {
    if (!isMobileTablet()) {
      VanillaTilt.init(document.querySelectorAll(".card"), {
        max: 25,
        speed: 400,
        glare: true,
      });
    }
    return () => {
    };
  }, [backFrontSwicher]);
  return (
    <div>
      <div className='h-screen w-full flex justify-center	font-roboto text-text-color'>
        <div className='flex flex-row h-full w-full items-center'>
          <div className='basis-3/12 hidden md:block'></div>
          <div className='md:basis-4/12 md:p-0 p-10'>
            <div className='text-3xl sm:text-4xl'>Hi, I am Huikai Ling.</div>
            <div className='text-5xl sm:text-6xl my-6'>I am looking for a junior IT job.</div>

            <div className='text-xl sm:text-2xl'><TypeAnimation
              sequence={[
                'I can do both front end and back end.'
              ]}
              wrapper="div"
              cursor={true}
              repeat={0}
            /></div>
            <a className='cursor-pointer font-bold uppercase tracking-widest mt-7' href="#portfolio">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              view portfolio
            </a>
          </div>
          <div className='basis-5/12 hidden md:block pr-5'>
            <img
              src={developer}
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="text-2xl sm:text-3xl p-10 sm:p-20 text-text-color">A graduate with a strong thirst for algorithms. Experienced in multiple 
      full-stack development and scrum academic projects. I'm looking for a
      challenging position that will allow me to deepen my understanding of the
      entire IT project development process. And encourage me to shorten the 
      gap with the code wizard, who can solve complex problems with apparent 
      ease and finesse.</div>

      <TIMELINE />
      {backFrontSwicher ? <BACKEND switcher={handleSwitcher} setShowVaccine={setShowVaccine} setShowClinic={setShowClinic} setShowWordle={setShowWordle} setShowOthers={setShowOthers}/> 
      : <FRONTEND switcher={handleSwitcher} setReactSocialMedia={setReactSocialMedia} setShowDomum={setShowDomum} setShowVaccine={setShowVaccine} setFirstWebProject={setFirstWebProject}/>}
      <DomumModal
      isOpen={showDomum}
      closeModal={() => setShowDomum(false)}
      />
      <ClinicModal
      isOpen={showClinic}
      closeModal={() => setShowClinic(false)}
      />
      <FirstWebProjectModal
      isOpen={showFirstWebProject}
      closeModal={() => setFirstWebProject(false)}
      />
      <ReactSocialMediaModal
      isOpen={showReactSocialMedia}
      closeModal={() => setReactSocialMedia(false)}
      />
      <VaccineModal
      isOpen={showVaccine}
      closeModal={() => setShowVaccine(false)}
      />
      <WordleModal
      isOpen={showWordle}
      closeModal={() => setShowWordle(false)}
      />
      <OthersModal
      isOpen={showOthers}
      closeModal={() => setShowOthers(false)}
      />
    </div>
  );
}


export default Home;