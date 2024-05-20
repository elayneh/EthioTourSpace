import React from "react";
import { useLocation } from "react-router-dom";


const ModelViewer: React.FC = () => {
  const location = useLocation();
  const link = location.state && location.state.link;
  return (
    <>
      <div
        className="sketchfab-embed-wrapper"
        style={{ width: "100%", height: "100vh" }}
      >
        <iframe
          title="Beta Giorgis (textured), Lalibela, Ethiopia"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; fullscreen; xr-spatial-tracking"
          src={link}
          {...({
            mozallowfullscreen: "true",
            webkitallowfullscreen: "true",
            "xr-spatial-tracking": "true",
            "execution-while-out-of-viewport": "true",
            "execution-while-not-rendered": "true",
            "web-share": "true",
          } as any)}
          style={{ width: "100%", height: "100%" }}
        ></iframe>
      </div>
      
    </>
  );
};

export default ModelViewer;