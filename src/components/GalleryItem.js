import React from 'react';

const GalleryItem = (props) => (
  <div>
    <img src={ this.props.imgUrl } alt="Preview of website"/>
    <h3>{ this.props.title} </h3>
    <img src={"#"} alt="git logo"/>
    <p>{ this.props.description}</p>
  </div>
);

export default GalleryItem;