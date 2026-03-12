import React, {useState, useEffect} from 'react';
import Layout from '@theme/Layout';

export default function PluginsPage(): React.JSX.Element {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDarkMode(document.documentElement.getAttribute('data-theme') === 'dark');
  }, []);

  if (!mounted) return null;

  const container: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '3rem 1.5rem',
  };

  const header: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '3rem',
  };

  const title: React.CSSProperties = {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '1rem',
    color: isDarkMode ? '#f9fafb' : '#111827',
  };

  const subtitle: React.CSSProperties = {
    fontSize: '1.25rem',
    color: isDarkMode ? '#9ca3af' : '#6b7280',
  };

  const grid: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1.5rem',
  };

  const card: React.CSSProperties = {
    backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
    borderRadius: '12px',
    padding: '1.5rem',
    border: `1px solid ${isDarkMode ? '#374151' : '#f3f4f6'}`,
    transition: 'all 0.3s ease',
  };

  const cardTitle: React.CSSProperties = {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
    color: isDarkMode ? '#f9fafb' : '#111827',
  };

  const cardDesc: React.CSSProperties = {
    color: isDarkMode ? '#9ca3af' : '#6b7280',
    fontSize: '0.95rem',
    lineHeight: '1.6',
  };

  const cardTag: React.CSSProperties = {
    display: 'inline-block',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontSize: '0.75rem',
    fontWeight: '500',
    marginTop: '1rem',
    backgroundColor: isDarkMode ? '#374151' : '#f3f4f6',
    color: isDarkMode ? '#9ca3af' : '#6b7280',
  };

  const plugins = [
    {
      name: '飞书机器人',
      description: '集成飞书消息推送、群聊机器人、Webhook 事件接收，实现与飞书生态的无缝对接',
      tag: '官方插件',
    },
    {
      name: '邮件发送',
      description: '支持 SMTP 协议发送邮件，可配置发件人、模板、附件等功能',
      tag: '官方插件',
    },
    {
      name: '企业微信',
      description: '集成企业微信消息推送、通讯录管理、审批流程等企业微信功能',
      tag: '官方插件',
    },
    {
      name: '钉钉机器人',
      description: '支持钉钉自定义机器人消息推送，群消息自动回复功能',
      tag: '官方插件',
    },
    {
      name: '数据库连接',
      description: '支持 MySQL、PostgreSQL、MongoDB 等常见数据库的增删改查操作',
      tag: '官方插件',
    },
    {
      name: 'HTTP 请求',
      description: '灵活的 HTTP 请求工具，支持 GET、POST、PUT、DELETE 等方法',
      tag: '官方插件',
    },
  ];

  return (
    <Layout title="插件市场" description="OpenClaw 插件市场 - 探索和安装各种插件扩展系统能力">
      <main style={container}>
        <div style={header}>
          <h1 style={title}>🦞 插件市场</h1>
          <p style={subtitle}>探索和安装各种插件，扩展 OpenClaw 系统能力</p>
        </div>
        
        <div style={grid}>
          {plugins.map((plugin, index) => (
            <div key={index} style={card}>
              <h3 style={cardTitle}>{plugin.name}</h3>
              <p style={cardDesc}>{plugin.description}</p>
              <span style={cardTag}>{plugin.tag}</span>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
