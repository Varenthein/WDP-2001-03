import React, { Component } from 'react';
import { Slider, Rail, Handles, Tracks, Ticks } from 'react-compound-slider';
import { SliderRail, Handle, Track, Tick } from './SliderFilterComponents';
import styles from './stylespan.modules.scss';

const sliderStyle = {
  position: 'relative',
  width: '100%',
};

const defaultValues = [135, 500];

class SliderFilter extends Component {
  state = {
    domain: [135, 500],
    values: defaultValues.slice(),
    update: defaultValues.slice(),
    reversed: false,
  };

  onUpdate = update => {
    this.setState({ update });
  };

  onChange = values => {
    this.setState({ values });
  };

  setDomain = domain => {
    this.setState({ domain });
  };

  render() {
    const {
      state: { domain, values },
    } = this;

    return (
      <div
        style={{ height: 150, width: '200px', marginLeft: '20px', marginTop: '10px' }}
      >
        <Slider
          mode={2}
          step={1}
          domain={domain}
          rootStyle={sliderStyle}
          onUpdate={this.onUpdate}
          onChange={this.onChange}
          values={values}
        >
          <Rail>
            {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
          </Rail>
          <Handles>
            {({ handles, getHandleProps }) => (
              <div className='slider-handles'>
                {handles.map(handle => (
                  <Handle
                    key={handle.id}
                    handle={handle}
                    domain={domain}
                    getHandleProps={getHandleProps}
                  />
                ))}
              </div>
            )}
          </Handles>
          <Tracks left={false} right={false}>
            {({ tracks, getTrackProps }) => (
              <div className='slider-tracks'>
                {tracks.map(({ id, source, target }) => (
                  <Track
                    key={id}
                    source={source}
                    target={target}
                    getTrackProps={getTrackProps}
                  />
                ))}
              </div>
            )}
          </Tracks>
        </Slider>
        <button
          style={{
            marginTop: 25,
            color: 'white',
            backgroundColor: '#d58e32',
            WebkitAppearance: 'media-slider',
          }}
        >
          {'FILTER'}
        </button>
        <span
          style={{
            marginLeft: 25,
            border: '1px solid',
            borderColor: 'grey',
            padding: '5px',
          }}
        >
          {'$' + values[0]} - {'$' + values[1]}
        </span>
      </div>
    );
  }
}

export default SliderFilter;
