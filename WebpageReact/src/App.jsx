import './App.css';
import NavBar from './components/navBar';
import Footer from './components/Footer';
import Home from './routes/Home';
import Syllabus from './routes/Syllabus';
import Modules from './routes/Modules';
import Assignments from './routes/Assignments';
import Resources from './routes/Resources';
import History from './routes/Introduction/History';
import testRenderHTML from './routes/testRenderHTML';
import { useState, useEffect } from 'react';
import Linux from './routes/Introduction/Linux';
import Server from './routes/Introduction/server';
import Lab from './routes/Introduction/Lab';
import GitIntro1 from './routes/Git/GitIntro1';
import GitIntro2 from './routes/Git/GitIntro2';
import CheatSheet from './routes/Git/CheatSheet';
import Lab2 from './routes/Git/Lab2';
import Documentation from './routes/Documentation/Documentation';
import Community from './routes/Documentation/Community';
import Lab3 from './routes/Documentation/Lab3';
import LectureSlidesL from './routes/Licensing/LectureSlides';
import Lab4 from './routes/Licensing/Lab4';
import LectureSlidesBS from './routes/BuildSystem/LectureSlide';
import ConfPy from './routes/BuildSystem/confPy';
import Lab5 from './routes/BuildSystem/Lab5';
import LectureSlidesSC from './routes/ScientificComputing/LectureSlidesSC';
import Lab6 from './routes/ScientificComputing/Lab6';
import LectureSlidesSTC from './routes/StatisticalComputing.jsx/LectureSlides';
import Lab7 from './routes/StatisticalComputing.jsx/Lab7';
import LectureSlidesIntegration from './routes/Testing&CI/Integration';
import LectureSlidesTesting from './routes/Testing&CI/Testing';
import Lab8 from './routes/Testing&CI/Lab8';
import LectureSlideV from './routes/Virtualization/LectureSlides';
import Lab9 from './routes/Virtualization/Lab9';
import LectureSlideD from './routes/Databases/LectureSlides';
import Lab10 from './routes/Databases/Lab10';
import CheatSheetD from './routes/Databases/CheatSheet';
import LectureSlideTF from './routes/TensorFlow/LectureSlides';
import Lab11 from './routes/TensorFlow/Lab11';
import AnalysisHw from './routes/Assignments/AnalysisHw/AnalysisHw';
import Rubric from './routes/Assignments/AnalysisHw/Rubric';
import Week1 from './routes/Assignments/Project/Week1';
import Proposal from './routes/Assignments/Project/Proposal';
import Interim from './routes/Assignments/Project/Interim';
import ProRubric from './routes/Assignments/Project/Rubric';
import Final from './routes/Assignments/Project/Final';
import Projects2015 from './routes/Resources/Past Projects/2015Projects';
import ProjectsF2016 from './routes/Resources/Past Projects/F2016Projects';
import ProjectsS2016 from './routes/Resources/Past Projects/S2016Projects';
import ProjectsS2017 from './routes/Resources/Past Projects/S2017Projects';
import ProjectsS2022 from './routes/Resources/Past Projects/S2022Projects';
import ProjectsSU2022 from './routes/Resources/Past Projects/SU2022Projects';
import StudyS2017 from './routes/Resources/Study Guides/S2017Study';
import StudyS2019 from './routes/Resources/Study Guides/S2019Study';
import Ubuntu from './routes/Resources/How To/Ubuntu';
import Bash from './routes/Resources/How To/Bash';
import LargeOpenSource from './routes/Resources/How To/LargeOpenSource';
import PackageManager from './routes/Resources/How To/PacakageManagers';
import UbuntuSetup from './routes/Resources/How To/UbuntuSetup';

function App() {
  const paths = {
    "/": <Home />,
    "/syllabus": <Syllabus />,
    "/modules": <Modules />,
    "/assignments": <Assignments />,
    "/resources": <Resources />,
    "/modules/introduction/history": <History />,
    "/modules/introduction/linux": <Linux />,
    "/modules/introduction/server": <Server />,
    "/modules/introduction/lab": <Lab />,
    "/modules/git/intro1": <GitIntro1 />,
    "/modules/git/intro2": <GitIntro2 />,
    "/modules/git/cheatsheet": <CheatSheet />,
    "/modules/git/lab": <Lab2 />,
    "/modules/dandc/documentation": <Documentation />,
    "/modules/dandc/community": <Community />,
    "/modules/dandc/lab": <Lab3 />,
    "/modules/licensing/lecture": <LectureSlidesL />,
    "/modules/licensing/lab": <Lab4 />,
    "/modules/bs/lecture": <LectureSlidesBS />,
    "/modules/bs/confpy": <ConfPy />,
    "/modules/bs/lab": <Lab5 />,
    "/modules/sc/lecture": <LectureSlidesSC />,
    "/modules/sc/lab": <Lab6 />,
    "/modules/stc/lecture": <LectureSlidesSTC />,
    "/modules/stc/lab": <Lab7 />,
    "/modules/tci/integration": <LectureSlidesIntegration />,
    "/modules/tci/testing": <LectureSlidesTesting />,
    "/modules/tci/lab": <Lab8 />,
    "/modules/v/lecture": <LectureSlideV />,
    "/modules/v/lab": <Lab9 />,
    "/modules/d/lecture": <LectureSlideD />,
    "/modules/d/lab": <Lab10 />,
    "/modules/d/cheatsheet": <CheatSheetD />,
    "/modules/tf/lecture": <LectureSlideTF />,
    "/modules/tf/lab": <Lab11 />,
    "/assignment/analysishw/hw": <AnalysisHw />,
    "/assignment/analysishw/rubric": <Rubric />,
    "/assignment/project/week1": <Week1 />,
    "/assignment/project/proposal": <Proposal />,
    "/assignment/project/interm": <Interim />,
    "/assignment/project/final": <Final />,
    "/assignment/project/rubric": <ProRubric />,
    "/resources/projects/2015": <Projects2015 />,
    "/resources/projects/f2016": <ProjectsF2016 />,
    "/resources/projects/s2016": <ProjectsS2016 />,
    "/resources/projects/s2017": <ProjectsS2017 />,
    "/resources/projects/s2022": <ProjectsS2022 />,
    "/resources/projects/su2022": <ProjectsSU2022 />,
    "/resources/studyguides/s2017": <StudyS2017 />,
    "/resources/studyguides/s2019": <StudyS2019 />,
    "/resources/howto/ubuntu": <Ubuntu />,
    "/resources/howto/bash": <Bash />,
    "/resources/howto/los": <LargeOpenSource />,
    "/resources/howto/pm": <PackageManager />,
    "/resources/howto/ubuntusetup": <UbuntuSetup />,
  }

  let [component, setComponent] = useState(<Home />);

  useEffect(() => {
    const path = window.location.pathname;
    if (path in paths) {
      setComponent(paths[path]);
    } else {
      setComponent(<Home />);
    }
  }, []);
  return (
    <>
      <NavBar />
      {component}
      <Footer />
      
    </>

  );
}
{/* <Router>
      <Routes>
        <Route exact path="/" element={ <Navigate to="/home" />}/>
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/syllabus" element={<Syllabus/>} />
        <Route exact path="/modules" element={<Modules/>}/>
        <Route exact path="/assignments" element={<Assignments/>}/>
        <Route exact path="/resources" element={<Resources/>}/>
      </Routes>
    </Router> */}
export default App
