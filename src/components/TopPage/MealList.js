import DataList from "components/base/DataList";
import { DataControls } from "constants/controls";
import MealTypes from "constants/mealTypes";
import { useState } from "react";
import FilterButtons from "./FilterButtons";

export default function MealList() {
	const [mealType, setMealType] = useState(MealTypes.ALL);

	const handleSelectedTypeChange = (type) => {
		setMealType(type);
	}

	return (
		<>
			<FilterButtons onSelectedTypeChange={handleSelectedTypeChange} />
			<DataList
				mealType={mealType}
				type={DataControls.MEAL}
			/>
		</>
	)
}
