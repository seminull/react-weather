import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'react-toolbox/lib/button';
import { Input } from 'react-toolbox/lib/input';
import { Grid, Row, Col } from 'react-flexbox-grid';

import { fetchWeather } from '../actions/index';

const inline = {
  display: 'inline-block',
  margin: '1em',
};

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(value) {
    this.setState({ term: value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    // we need to go and fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <Grid>
          <Row>
            <Col md={12} style={{textAlign: 'center'}}>
              <div style={inline}>
                <Input
                  className="search-bar"
                  label="City"
                  value={this.state.term}
                  onChange={this.onInputChange}
                />
              </div>
              <div style={inline}>
                <Button label="Submit" onClick={this.onFormSubmit} primary raised />
              </div>
            </Col>
          </Row>
          <Row>

          </Row>
        </Grid>
      </form>
    );
  }
}

SearchBar.propTypes = {
  fetchWeather: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
