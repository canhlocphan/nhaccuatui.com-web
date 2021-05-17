// libs
import React from "react";

// others
import "./styles.scss";

const SocialList = () => (
  <div className="social-list">
    <a
      href="https://www.facebook.com/NhacCuaTuiOfficial"
      target="_blank"
      rel="noreferrer"
      className="social"
      title="Facebook"
    >
      <img src="https://stc-id.nixcdn.com/v11/images/footer/t_ic_facebook.png" alt="social"></img>
    </a>
    <a
      href="https://www.instagram.com/Nhaccuatui/"
      target="_blank"
      rel="noreferrer"
      className="social"
      title="Instagram"
    >
      <img src="https://stc-id.nixcdn.com/v11/images/footer/t_ic_instagram.png" alt="social"></img>
    </a>
    <a href="https://www.tiktok.com/@nhaccuatui/" target="_blank" rel="noreferrer" className="social" title="Tiktok">
      <img src="https://stc-id.nixcdn.com/v11/images/footer/t_ic_tiktok.png" alt="social"></img>
    </a>
    <a href="https://zalo.me/4060780154085925782" target="_blank" rel="noreferrer" className="social" title="Zalo">
      <img src="https://stc-id.nixcdn.com/v11/images/footer/t_ic_zalo.png" alt="social"></img>
    </a>
  </div>
);

export default SocialList;
