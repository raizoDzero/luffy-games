import React from 'react';
import { connect } from 'react-redux';
import frame from 'Images/frame.png';
import { Link } from 'react-router-dom';
import { changeFlag } from 'Actions/showFlag';

const ImageExample = props => {
  const { flag } = props;

  const handleclick = () => {
    const { changeF } = props;
    changeF(flag.showImg);
  };
  return (
    <React.Fragment>
      <Link to="/">
        <h3>To home --- "react-router"</h3>
      </Link>
      <a href="/">
        <h3>To home --- "href"</h3>
      </a>
      <button type="button" onClick={handleclick}>
        Mostrar imagen
      </button>
      {flag.showImg && <img src={frame} alt="frameo" />}
    </React.Fragment>
  );
};

const mapStateToProps = reducers => {
  return {
    flag: reducers.showFlagReducer,
    other: reducers
  };
};

const mapDispatchToProps = dispatch => ({
  changeF: currentFlag => dispatch(changeFlag(currentFlag))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageExample);
