import { useSelector } from "react-redux";

import SectionList from "components/base/SectionList";
import { DataControls, SectionControls } from "constants/controls";
import DataList from "components/base/DataList";

export default function ColumnPage() {
	const columns = useSelector(state => state.initial.columns);

	return (
		<div className="content-wrapper min-vh-50">
			<SectionList
				items={columns}
				type={SectionControls.RECOMMEND}
				className="my-5"
			/>
			<DataList type={DataControls.POST} />
		</div>
	)
}
