import React from 'react';
import 'react-toolbox/lib/commons.scss';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default function App() {
  return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
  );
}
