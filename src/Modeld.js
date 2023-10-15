import { useState } from "react";
import React from "react";

const ModelData = [
  { id: 1, name: "Model 1", description: "This is the first model." },
  { id: 2, name: "Model 2", description: "This is the second model." },
  { id: 3, name: "Model 3", description: "This is the third model." }
];

function Modeld() {
  const [currentModel, setCurrentModel] = useState(ModelData[0]);

  const handleNext = () => {
    const currentIndex = ModelData.findIndex(
      model => model.id === currentModel.id
    );
    const nextIndex = (currentIndex + 1) % ModelData.length;
    setCurrentModel(ModelData[nextIndex]);
  };

  return (
    <div>
      <h1>{currentModel.name}</h1>
      <p>{currentModel.description}</p>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Modeld;
