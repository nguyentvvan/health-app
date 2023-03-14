import { useSelector } from "react-redux";

import SectionListControl from "components/base/SectionListControl";
import SectionList from "components/base/SectionList";
import Controls from "constants/controls";

export default function ColumnPage() {
	const columns = useSelector(state => state.initial.columns);
	const posts = useSelector(state => state.initial.posts);

	return (
		<div className='content-wrapper min-vh-50'>
			<SectionList
				items={columns}
				type={Controls.RECOMMEND}
				className="my-5"
			/>
			<SectionListControl
				items={posts}
				type={Controls.POST}
			/>
		</div>
	)
}
