import SectionList from "components/base/SectionList";
import LoadMoreButton from "components/base/LoadMoreButton";

const RECOMMENDS = [{
	title: 'RECOMMENDED COLUMN',
	text: 'オススメ',
},{
	title: 'RECOMMENDED DIET',
	text: 'ダイエット',
},{
	title: 'RECOMMENDED BEAUTY',
	text: '美容',
},{
	title: 'RECOMMENDED HEALTH',
	text: '健康',
}];

const POSTS = [{
	image: 'column-1.jpg',
	date: '2021.05.17',
	time: '23:25',
	description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
	hashTags: '#魚料理 #和食 #DHA'
},{
	image: 'column-2.jpg',
	date: '2021.05.17',
	time: '23:25',
	description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
	hashTags: '#魚料理 #和食 #DHA'
},{
	image: 'column-3.jpg',
	date: '2021.05.17',
	time: '23:25',
	description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
	hashTags: '#魚料理 #和食 #DHA'
},{
	image: 'column-4.jpg',
	date: '2021.05.17',
	time: '23:25',
	description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
	hashTags: '#魚料理 #和食 #DHA'
},{
	image: 'column-5.jpg',
	date: '2021.05.17',
	time: '23:25',
	description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
	hashTags: '#魚料理 #和食 #DHA'
},{
	image: 'column-6.jpg',
	date: '2021.05.17',
	time: '23:25',
	description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
	hashTags: '#魚料理 #和食 #DHA'
},{
	image: 'column-7.jpg',
	date: '2021.05.17',
	time: '23:25',
	description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
	hashTags: '#魚料理 #和食 #DHA'
},{
	image: 'column-8.jpg',
	date: '2021.05.17',
	time: '23:25',
	description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
	hashTags: '#魚料理 #和食 #DHA'
}];

export default function MyRecord() {
	return (
		<div className='content-wrapper min-vh-50'>
			<SectionList
				items={RECOMMENDS}
				type="Recommend"
				className="my-5"
			/>
			<SectionList
				items={POSTS}
				type="Post"
			/>
			<LoadMoreButton className='mb-5' />
		</div>
	)
}
