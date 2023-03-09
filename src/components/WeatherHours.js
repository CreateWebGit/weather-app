import React from "react";
import { WiDegrees, WiDaySunny, WiDaySunnyOvercast, WiDayCloudy, WiDayCloudyHigh, WiCloudy, WiCloud, WiDayFog } from "react-icons/wi";
import "./WeatherHours.css";

function WeatherHours(props) {
  return (
    <>
      <div className={props.isActive === props.index ? "active" : "inactive"} key={props.index}>
        <hr />
        <div className="weatherTimeHoleConatiner">
          {props.mydata
            .filter((x) => new Date(x.validTime).getUTCDate() === new Date(props.weather.validTime).getUTCDate())
            .map((timeWeather) => {
              return (
                <>
                  <div className="weatherTimeConatiner">
                    <div className="hourContainer">
                      <div>{("0" + new Date(timeWeather.validTime).getUTCHours()).slice(-2)}:00</div>
                    </div>
                    {timeWeather.parameters
                      .filter((cloud) => cloud.name == "Wsymb2")
                      .map((cloud, i) => {
                        return (
                          <>
                            <div className="cloudTimeContainer" key={i}>
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
                    {timeWeather.parameters
                      .filter((temp) => temp.name == "t")
                      .map((temp, i) => {
                        return (
                          <>
                            <div className="temperatureTimeContainer" key={i}>
                              {temp.values}
                              <WiDegrees className="degrees" />
                            </div>
                          </>
                        );
                      })}
                  </div>
                  {timeWeather.parameters
                    .filter((cloud) => cloud.name == "Wsymb2")
                    .map((cloud, i) => {
                      return (
                        <>
                          <div className="cloudTextTimeContainer" key={i}>
                            {cloud.values == 1 && "Klart"}
                            {cloud.values == 2 && "Lätt molningt"}
                            {cloud.values == 3 && "Varierande molnigt"}
                            {cloud.values == 4 && "Halv klart"}
                            {cloud.values == 5 && "Molnigt"}
                            {cloud.values == 6 && "Mulet"}
                            {cloud.values == 7 && "Dimmigt"}
                            {cloud.values == 8 && "Svaga regnskurar"}
                            {cloud.values == 9 && "Måttliga regnskurar"}
                            {cloud.values == 10 && "Kraftiga regnskurar"}
                            {cloud.values == 11 && "Åskväder"}
                            {cloud.values == 12 && "Lätt snöslaskskurar"}
                            {cloud.values == 13 && "Måttliga snöslaskskurar"}
                            {cloud.values == 14 && "Kraftiga snöslaskskurar"}
                            {cloud.values == 15 && "Lätta snöskurar"}
                            {cloud.values == 16 && "Måttliga snöskurar"}
                            {cloud.values == 17 && "Kraftiga snöskurar"}
                            {cloud.values == 18 && "Duggregn"}
                            {cloud.values == 19 && "Måttligt regn"}
                            {cloud.values == 20 && "Kraftigt regn"}
                            {cloud.values == 21 && "Åska"}
                            {cloud.values == 22 && "Lätt snöslask"}
                            {cloud.values == 23 && "Måttlig snöslask"}
                            {cloud.values == 24 && "Kraftig snöslask"}
                            {cloud.values == 25 && "Lätt snöfall"}
                            {cloud.values == 26 && "Måttligt snöfall"}
                            {cloud.values == 27 && "Kraftigt snöfall"}
                          </div>
                        </>
                      );
                    })}
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default WeatherHours;
