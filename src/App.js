import { useState } from 'react';
import {
	WiDegrees,
	WiDaySunny,
	WiDaySunnyOvercast,
	WiDayCloudy,
	WiDayCloudyHigh,
	WiCloudy,
	WiCloud,
	WiDayFog,
} from 'react-icons/wi';
import WeatherHours from './components/WeatherHours';
import Dropdown from './components/Dropdown';
import './styles.css';

function App() {
	const [latitude, setLatitude] = useState(59.3294);
	const [longitude, setLongitude] = useState(18.0686);
	const [city, setCity] = useState('Stockholm');
	const [mydata, setMydata] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isActive, setActive] = useState(null);
	const [isOpen, setIsopen] = useState(false);

	const toggle = i => {
		setIsopen(!isOpen);
		setActive(i);
	};

	const options = [
		{ value: 'stockholm', label: 'Stockholm', Lat: '59.3294', Long: '18.0686' },
		{ value: 'göteborg', label: 'Göteborg', Lat: '57.6717', Long: '11.981' },
		{ value: 'malmö', label: 'Malmö', Lat: '55.5932', Long: '13.0214' },
	];

	const APIurl = `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${longitude}/lat/${latitude}/data.json`;

	fetch(APIurl)
		.then(response => response.json())
		.then(actualData => setMydata(actualData.timeSeries))
		.catch(err => {
			console.log(err);
		});

	const monthNames = [
		' Jan',
		' Feb',
		' Mar',
		' Apr',
		' Maj',
		' Jun',
		' Jul',
		' Aug',
		' Sep',
		' Oct',
		' Nov',
		' Dec',
	];

	return (
		<div className="App">
			<header className="App-header">
				<p>{city} vädret idag!</p>
			</header>

			<div className="weatherListContainer">
				<Dropdown
					placeHolder="Välg stad.."
					options={options}
					onChange={value => {
						setLatitude(value.Lat);
						setLongitude(value.Long);
						setCity(value.label);
					}}
				/>
				<div>
					{mydata
						.filter(myTime => new Date(myTime.validTime).getUTCHours() == '12')
						.map((weather, index) => {
							return (
								<div className="weatherContainer" key={index}>
									<div
										className="weatherDateConatiner"
										onClick={() => {
											setIsLoading(true);
											toggle(index);
										}}>
										<div className="dateContainer">
											<div className="dayContainer">
												{(Date.prototype.getWeekDay = function () {
													var weekday = [
														'Sön',
														'Mån',
														'Tis',
														'Ons',
														'Tor',
														'Fre',
														'Lör',
													];
													return weekday[new Date(weather.validTime).getDay()];
												})(new Date(weather.validTime).getWeekDay())}
											</div>
											<div className="monthContainer">
												{('0' + new Date(weather.validTime).getUTCDate()).slice(
													-2
												)}
												{monthNames[new Date(weather.validTime).getMonth()]}
											</div>
										</div>
										{weather.parameters
											.filter(cloud => cloud.name == 'Wsymb2')
											.map((cloud, i) => {
												return (
													<>
														<div className="cloudDateContainer" key={i}>
															{cloud.values == 1 && <WiDaySunny />}
															{cloud.values == 2 && <WiDaySunnyOvercast />}
															{cloud.values == 3 && <WiDayCloudy />}
															{cloud.values == 4 && <WiDayCloudyHigh />}
															{cloud.values == 5 && <WiCloudy />}
															{cloud.values == 6 && <WiCloud />}
															{cloud.values == 7 && <WiDayFog />}
															{cloud.values == 8 && <WiDaySunnyOvercast />}
															{cloud.values == 9 && <WiDaySunnyOvercast />}
															{cloud.values == 10 && <WiDaySunnyOvercast />}
															{cloud.values == 11 && <WiDaySunnyOvercast />}
															{cloud.values == 12 && <WiDaySunnyOvercast />}
															{cloud.values == 13 && <WiDaySunnyOvercast />}
															{cloud.values == 14 && <WiDaySunnyOvercast />}
															{cloud.values == 15 && <WiDaySunnyOvercast />}
															{cloud.values == 16 && <WiDaySunnyOvercast />}
															{cloud.values == 17 && <WiDaySunnyOvercast />}
															{cloud.values == 18 && <WiDaySunnyOvercast />}
															{cloud.values == 19 && <WiDaySunnyOvercast />}
															{cloud.values == 20 && <WiDaySunnyOvercast />}
															{cloud.values == 21 && <WiDaySunnyOvercast />}
															{cloud.values == 22 && <WiDaySunnyOvercast />}
															{cloud.values == 23 && <WiDaySunnyOvercast />}
															{cloud.values == 24 && <WiDaySunnyOvercast />}
															{cloud.values == 25 && <WiDaySunnyOvercast />}
															{cloud.values == 26 && <WiDaySunnyOvercast />}
															{cloud.values == 27 && <WiDaySunnyOvercast />}
														</div>
													</>
												);
											})}
										{weather.parameters
											.filter(temp => temp.name == 't')
											.map((temp, i) => {
												return (
													<>
														<div className="temperatureDateContainer" key={i}>
															{temp.values}
															<WiDegrees className="degrees" />
														</div>
													</>
												);
											})}
									</div>
									{isLoading && (
										<WeatherHours
											mydata={mydata}
											isActive={isActive}
											isOpen={isOpen}
											index={index}
											weather={weather}
										/>
									)}
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
}

export default App;
