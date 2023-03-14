import SectionList from './SectionList';
import LoadMoreButton from './LoadMoreButton';

export default function SectionListControl(props) {
	return (
		<>
			<SectionList {...props} />
			<LoadMoreButton />
		</>
	)
}
