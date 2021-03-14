import React, { PureComponent } from "react";
import profileStyle from './style.module.css';

class Profile extends PureComponent {
  render() {
    return (
      <div className='profile'>
        <h2 className={profileStyle.title}>我是profile的标题</h2>
        <ul className="settings">
          {/* li{设置列表$}*3  快捷键*/}
          <li>设置列表1</li>
          <li>设置列表2</li>
          <li>设置列表3</li>
        </ul>
      </div>
    );
  }
}

export default Profile;
