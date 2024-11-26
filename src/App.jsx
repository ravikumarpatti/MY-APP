import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ConfigProvider, Menu, Switch } from 'antd';
import { useAtom } from 'jotai';
import { themeAtom } from './store/themeAtom';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  const [theme, setTheme] = useAtom(themeAtom);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: theme === 'light' ? '#1890ff' : '#001529',
          colorBgBase: theme === 'light' ? '#ffffff' : '#141414',
          colorText: theme === 'light' ? '#000000' : '#ffffff',
        },
      }}
    >
      <Router>
        <Menu
          mode="horizontal"
          theme={theme}
          items={[
            { label: <Link to="/">Home</Link>, key: 'home' },
            { label: <Link to="/about">About</Link>, key: 'about' },
            {
              label: (
                <Switch
                  checked={theme === 'dark'}
                  onChange={toggleTheme}
                  checkedChildren="Dark"
                  unCheckedChildren="Light"
                />
              ),
              key: 'theme',
            },
          ]}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </ConfigProvider>
  );
};

export default App;
