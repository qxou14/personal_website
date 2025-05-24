import Header from "./Component/Header";
import EducationPage from "./Component/EducationPage";
import { Education, ExtraEducation } from "./Content/EducationContent";
import ExperiencePage from "./Component/Experience";
import Experience from "./Content/ExperienceContent";
import Project from "./Content/ProjectContent";
import ProjectPage from "./Component/ProjectPage";
import SkillPage from "./Component/Skills";
import ContactPage from "./Component/ContactMe";
import Introduction from "./Component/Introduction";
import "../src/Style/app.css";
import BackgroundEffect from "./Component/BackgroundEffect";

function App() {
  return (
    <div>
      <Header />
      <div className="background-container">
        <BackgroundEffect />
        <div className="content">
          <Introduction />
          <EducationPage education={Education} extra={ExtraEducation} />
          <SkillPage />
          <ExperiencePage content={Experience} />
          <ProjectPage content={Project} />
          <hr className="custom-hr-tag" />
          <ContactPage />
        </div>
      </div>
    </div>
  );
}

export default App;
