import Header from "./Component/Header";
import EducationPage from "./Component/EducationPage";
import Education from "./Content/EducationContent";
import ExperiencePage from "./Component/Experience";
import Experience from "./Content/ExperienceContent";

function App() {
  return (
    <div className="App">
      <Header />
      <EducationPage content={Education} />
      <ExperiencePage content={Experience} />
    </div>
  );
}

export default App;
