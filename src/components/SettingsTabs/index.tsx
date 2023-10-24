'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './TabItem'

interface SettingsTabsProps {
  currentTab: string
}

export function SettingsTabs({ currentTab }: SettingsTabsProps) {
  return (
    <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-700">
      <TabItem
        title="My details"
        value="tab1"
        isSelected={currentTab === 'tab1'}
      />
      <TabItem
        title="Profile"
        value="tab2"
        isSelected={currentTab === 'tab2'}
      />
      <TabItem
        title="Password"
        value="tab3"
        isSelected={currentTab === 'tab3'}
      />
      <TabItem title="Team" value="tab4" isSelected={currentTab === 'tab4'} />
      <TabItem title="Plan" value="tab5" isSelected={currentTab === 'tab5'} />
      <TabItem
        title="Billing"
        value="tab6"
        isSelected={currentTab === 'tab6'}
      />
      <TabItem title="Email" value="tab7" isSelected={currentTab === 'tab7'} />
      <TabItem
        title="Notifications"
        value="tab8"
        isSelected={currentTab === 'tab8'}
      />
      <TabItem
        title="Integrations"
        value="tab9"
        isSelected={currentTab === 'tab9'}
      />
      <TabItem title="API" value="tab10" isSelected={currentTab === 'tab10'} />
    </Tabs.List>
  )
}
