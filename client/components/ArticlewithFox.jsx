import React from 'react';
import { connect } from 'react-redux';
import { getImage } from '../actions/foxImage';

class ArticlewithFox extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.showImage();
  }
  render() {
    return (
      <div>
        <img />
        <div>Image above</div>
        <div>Article here</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return state;
}
const mapDispatchToProps = dispatch => ({
  showImage: () => {
    dispatch(getImage());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlewithFox);
