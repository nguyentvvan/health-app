import ColumnPage from 'pages/ColumnPage';
import TopPage from 'pages/TopPage';
import MyRecord from 'pages/MyRecord';
import PageNotFound from 'pages/PageNotFound';

const routes = [
	{
    path: "/",
		exact: true,
    element: <TopPage />,
  },{
    path: "/column",
    element: <ColumnPage />,
  },{
    path: "/my-record",
    element: <MyRecord />,
  },{
    path: "*",
    element: <PageNotFound />,
  },
];
export default routes;
