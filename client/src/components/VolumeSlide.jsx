import React from 'react';
import Slider from 'material-ui/Slider';

const styles = {
  root: {
    display: 'flex',
    height: 124,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
};

const VolumeSlide = () => (
  <div style={styles.root}>
    <Slider style={{height: 100}} axis="y" defaultValue={0.5} />
  </div>
);

export default VolumeSlide;