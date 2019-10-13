// import dva from 'dva';
// import './index.css';

// // 1. Initialize
// const app = dva();

// // 2. Plugins
// // app.use({});

// // 3. Model
// // app.model(require('./models/example').default);

// // 4. Router
// app.router(require('./router').default);

// // 5. Start
// app.start('#root');
import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider, DatePicker, message, Button, Input } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import './index.css';
const { Search } = Input;

moment.locale('zh-cn');

class App extends React.Component {
  state = {
    date: null,
  };

  handleChange = date => {
    message.info(`您选择的日期是: ${date ? date.format('YYYY-MM-DD') : '未选择'}`);
    this.setState({ date });
  };
  render() {
    const { date } = this.state;
    return (
      <ConfigProvider locale={zhCN}>
        <div style={{ width: 400, margin: '100px auto' }}>
          <DatePicker onChange={this.handleChange} />
          <div style={{ marginTop: 20 }}>
            当前日期：{date ? date.format('YYYY-MM-DD') : '未选择'}
          </div>
        </div>
        <div>
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
        </div>
        <div>
          <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
          />
          <br />
          <br />
          <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
          <br />
          <br />
          <Search
            placeholder="input search text"
            enterButton="Search"
            size="large"
            onSearch={value => console.log("test : " + value)} // 打印调试
          />
        </div>
      </ConfigProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
