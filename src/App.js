import EducationPage from "./Component/EducationPage";
import Education from "./Content/EducationContent";
import Header from "./Component/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <EducationPage content={Education} />
    </div>
  );
}

export default App;
