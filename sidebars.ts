import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '🦀 OpenClaw',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: '🚀 快速安装',
          collapsed: true,
          items: [
            'openclaw/quick-install',
            'openclaw/mac-docker-install',
            'openclaw/mac-native-install',
            'openclaw/windows-docker-install',
            'openclaw/windows-native-install',
            'openclaw/linux-native-install',
            'openclaw/cloud-server-install',
          ],
        },
        {
          type: 'category',
          label: '⚙️ 配置',
          collapsed: true,
          items: [
            'openclaw/config-guide',
            'openclaw/openclaw-deepseek-config',
          ],
        },
        {
          type: 'category',
          label: '🔌 插件',
          collapsed: true,
          items: [
            'openclaw/plugin-dev',
            'openclaw/openclaw-plugin-architecture',
          ],
        },
        {
          type: 'category',
          label: '🎯 技能',
          collapsed: true,
          items: [
            'openclaw/skills',
            'openclaw/react-pattern-agent',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
