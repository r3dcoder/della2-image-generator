import { DowloadIcon } from '@/icons/dowload-icon';
import React, { useState } from 'react';
import styles from "@/styles/Della2.module.css";

const ImageDownloader = ({link}) => {

  const [imageUrl, setImageUrl] = useState(link);
  const [downloading, setDownloading] = useState(false);

  const handleClick = () => {
    setDownloading(true);
    const link = document.createElement('a');
    link.href = imageUrl;
    link.target = "_blank";
    link.download = new Date().toDateString()+'image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloading(false);
  };

  return (
    <div className='btn-download'>
      
      <button onClick={handleClick} disabled={downloading || !imageUrl}>
        <DowloadIcon/>
      </button>
    </div>
  );
};

export default ImageDownloader;
