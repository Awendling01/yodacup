import React, { useState } from "react";
import "./App.css";
import data from "./riskAssessment";

export type Assessment = {
	name: string;
	riskLevel: string;
};

const App = () => {
	const [assessments, setAssessments] = useState(data);
	const [editMode, setEditMode] = useState(false);

	const toggleEditMode = () => {
		setEditMode(!editMode);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
	};

	return (
		<div style={{ display: "flex", flexDirection: "column" }} className="App">
			<form onSubmit={handleSubmit}>
				{editMode ? (
					<button type="submit">{"Save"}</button>
				) : (
					<button onClick={toggleEditMode}>{editMode ? "Save" : "Edit"}</button>
				)}

				{assessments.map((assessment, assessmentIndex) => {
					return (
						<div style={{ display: "flex" }} key={assessmentIndex}>
							<div style={{ display: "flex", flex: 1 }}>{assessment.name}</div>
							{editMode ? (
								<input
									name={`riskLevel${assessmentIndex}`}
									value={assessment.riskLevel}
								/>
							) : (
								<div style={{ display: "flex", flex: 1 }}>
									<div>{assessment.riskLevel}</div>
								</div>
							)}
						</div>
					);
				})}
			</form>
		</div>
	);
};
export default App;
