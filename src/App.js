import Header from "./Component/Header";
import EducationPage from "./Component/EducationPage";
import Education from "./Content/EducationContent";
import ExperiencePage from "./Component/Experience";
import Experience from "./Content/ExperienceContent";
import Project from "./Content/ProjectContent";
import ProjectPage from "./Component/ProjectPage";

function App() {
  return (
    <div className="App">
      <Header />
      <EducationPage content={Education} />
      <ExperiencePage content={Experience} />
      <ProjectPage content={Project} />
    </div>
  );
}

export default App;
