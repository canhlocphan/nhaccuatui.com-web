// libs
import React from "react";

// others
import "./styles.scss";

const DownloadList = () => (
  <div className="download-list">
    <a
      href="https://play.google.com/store/apps/details?id=com.nctcorp.nhaccuatui&hl=vi"
      target="_blank"
      rel="noreferrer"
      className="download"
      title="Google Play"
    >
      <img src="https://stc-id.nixcdn.com/v11/images/footer/t_google_play.png" alt="social"></img>
    </a>
    <a
      href="https://apps.apple.com/vn/app/nct-your-music/id1505429187"
      target="_blank"
      rel="noreferrer"
      className="download"
      title="App Store"
    >
      <img src="https://stc-id.nixcdn.com/v11/images/footer/t_app_store.png" alt="social"></img>
    </a>
    <a
      href="https://wap2.hispace.hicloud.com/uowap/index.html#/detailApp/C101453231?accessId=e5db69a0fb544c4dbcf383540b2e7cd2"
      target="_blank"
      rel="noreferrer"
      className="download"
      title="App Gallery"
    >
      <img src="https://stc-id.nixcdn.com/v11/images/footer/t_appgallery.png" alt="social"></img>
    </a>
  </div>
);

export default DownloadList;
