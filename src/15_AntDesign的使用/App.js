import React, { PureComponent } from "react";
import { Button } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";
import moment from "moment";

class App extends PureComponent {
  render() {
    const loadings = true;
    return (
      <>
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="primary" size="small" loading>
          Loading
        </Button>
        <Button type="primary" icon={<PoweroffOutlined />} loading />
        <br />
        <Button type="primary" loading={loadings[0]}>
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[1]}
        >
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[2]}
        />
      </>
    );
  }
}

export default App;
