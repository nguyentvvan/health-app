import { useState } from 'react';
import cn from 'classnames';
import {
	Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import './styles/LineChart.scss';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
	layout: {
		autoPadding: false,
	},
	position: 'center',
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
			display: false,
      // position: 'top',
    },
    title: {
			align: 'left',
			position: 'top',
			// horizontalAlign: 'left',
			verticalAlign: 'left',
    },
  },
	scales: {
    x: {
      grid: {
        color: '#777777',
      }
    },
    y: {
      grid: {
				display : false,
        color: 'white',
        borderColor: 'green'
      },
			ticks: {
				display : false,
			},
    }
  }
};

const labels = ['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [100, 98, 67, 88, 80, 70, 80, 64, 60, 53, 45, 40],
      borderColor: '#FFCC21',
      backgroundColor: '#FFCC21',
    },
    {
      label: 'Dataset 2',
      data: [100, 95, 77, 83, 68, 65, 55, 53, 51, 45, 43, 40],
      borderColor: '#8FE9D0',
      backgroundColor: '#8FE9D0',
    },
  ],
};

const legends = ['日', '週', '月', '年'];

export default function LineChart(props) {
  const {
    width,
    height,
    title,
    showLegends,
    className,
    ...rest
  } = props;

  const [selectedIndex, setSelectedIndex] = useState(3);

	return (
		<div className={cn('line-chart', className)}>
			{title && title}

			<div className="m-auto chart" style={{ height: height }}>
				<Line
					options={options}
					data={data}
					{...rest}
				/>
			</div>

      {showLegends && (
        <div className="d-flex justify-content-start">
        {legends.map((legend, index) =>
          <div
            key={index}
            className={cn("legend", selectedIndex === index ? 'active' : '')}
            onClick={() => setSelectedIndex(index)}
          >
            {legend}
          </div>
        )}
        </div>
      )}
		</div>
	)
}
