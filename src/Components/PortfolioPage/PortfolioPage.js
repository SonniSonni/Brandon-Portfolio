import React from 'react';
import './PortfolioPage.css';
import GalleryItem from '../GalleryItem/GalleryItem';
import List from '../../ProjectList'; 

const PortfolioPage = () => (
  <div className="portfolio-page">
    <div className="portfolio-container">
      <div className="gallery-list">
        <GalleryItem {...List[0]}/>
        <GalleryItem {...List[1]}/>
        <GalleryItem {...List[0]}/>
        <GalleryItem {...List[0]}/>
        <GalleryItem {...List[0]}/>
        <GalleryItem {...List[0]}/>
      </div>
    </div>
  </div>
);

export default PortfolioPage;