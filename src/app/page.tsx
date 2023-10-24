'use client'

import * as Tabs from '@radix-ui/react-tabs'
import * as Input from '@/components/Input'
import * as FileInput from '@/components/Form/FileInput'
import * as ScrollArea from '@radix-ui/react-scroll-area'

import { SettingsTabs } from '@/components/SettingsTabs'
import { useState } from 'react'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import { Select } from '@/components/Form/Select'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { Textarea } from '@/components/Form/Textarea'
import { Button } from '@/components/Button'
import { SwitchTheme } from '@/components/SwitchTheme'

export default function Home() {
  const [currentTab, setCurrentTab] = useState('tab1')

  return (
    <>
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
          Settings
        </h1>
        <SwitchTheme />
      </div>

      <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
        <ScrollArea.Root className="w-full" type="scroll">
          <ScrollArea.Viewport className="w-full overflow-x-scroll">
            <SettingsTabs currentTab={currentTab} />

            <Tabs.Content className="mt-6 flex flex-col" value="tab1">
              <div className="flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 dark:border-zinc-700 lg:flex-row lg:items-center">
                <div className="space-y-1">
                  <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                    Personal info
                  </h2>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">
                    Update your photo and personal details here.
                  </span>
                </div>
                <div className="flex items-center gap-2 ">
                  <Button variant="outline" type="button">
                    Cancel
                  </Button>
                  <Button type="submit" form="settings">
                    Save
                  </Button>
                </div>
              </div>

              <form
                id="settings"
                className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"
              >
                <div className="grid gap-3 md:grid-cols-form">
                  <label
                    htmlFor="firstName"
                    className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                  >
                    Name
                  </label>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <Input.Root>
                      <Input.Control id="firstName" defaultValue="Raiane" />
                    </Input.Root>

                    <div className="flex flex-col gap-3 md:block">
                      <label
                        htmlFor="lastName"
                        className="text-sm font-medium text-zinc-700 dark:text-zinc-300 md:sr-only"
                      >
                        Last Name
                      </label>

                      <Input.Root>
                        <Input.Control id="lastName" defaultValue="Oliveira" />
                      </Input.Root>
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 pt-5 md:grid-cols-form">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                  >
                    Email address
                  </label>

                  <Input.Root>
                    <Input.Prefix>
                      <Mail className="h-5 w-5 text-zinc-500" />
                    </Input.Prefix>

                    <Input.Control
                      id="email"
                      type="email"
                      defaultValue="raiane.oliveira404@gmail.com"
                    />
                  </Input.Root>
                </div>

                <div className="grid gap-3 pt-5 md:grid-cols-form">
                  <label
                    htmlFor="photo"
                    className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                  >
                    Your photo
                    <span className="mt-0.5 block text-sm font-normal text-zinc-500 dark:text-zinc-400">
                      This will be displayed on your profile.
                    </span>
                  </label>

                  <FileInput.Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
                    <FileInput.ImagePreview />

                    <FileInput.Trigger />

                    <FileInput.Control />
                  </FileInput.Root>
                </div>

                <div className="grid gap-3 pt-5 md:grid-cols-form">
                  <label
                    htmlFor="role"
                    className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                  >
                    Role
                  </label>

                  <Input.Root>
                    <Input.Control id="role" defaultValue="Front end" />
                  </Input.Root>
                </div>

                <div className="grid gap-3 pt-5 md:grid-cols-form">
                  <label
                    htmlFor="country"
                    className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                  >
                    Country
                  </label>

                  <Select placeholder="Select a country...">
                    <SelectItem value="br" text="Brazil" />
                    <SelectItem value="us" text="United States" />
                  </Select>
                </div>

                <div className="grid gap-3 pt-5 md:grid-cols-form">
                  <label
                    htmlFor="timezone"
                    className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                  >
                    Timezone
                  </label>

                  <Select placeholder="Select a timezone...">
                    <SelectItem
                      value="utc8"
                      text="Pacific Standard Time (PST) UTC−08:00"
                    />
                    <SelectItem
                      value="utc3"
                      text="America São Paulo (UTC-03:00)"
                    />
                  </Select>
                </div>

                <div className="grid gap-3 pt-5 md:grid-cols-form">
                  <label
                    htmlFor="bio"
                    className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                  >
                    Bio
                    <span className="mt-0.5 block text-sm font-normal text-zinc-500 dark:text-zinc-400">
                      Write a short introduction.
                    </span>
                  </label>

                  <div className="space-y-3">
                    <div className="grid gap-3 lg:grid-cols-2">
                      <Select placeholder="" defaultValue="normal">
                        <SelectItem value="normal" text="Normal Text" />
                        <SelectItem value="md" text="Markdown" />
                      </Select>

                      <div className="flex items-center gap-1">
                        <Button variant="ghost" type="button">
                          <Bold
                            aria-hidden
                            className="h-4 w-4 text-zinc-400"
                            strokeWidth={4}
                          />
                        </Button>
                        <Button variant="ghost" type="button">
                          <Italic
                            aria-hidden
                            className="h-4 w-4 text-zinc-400"
                            strokeWidth={4}
                          />
                        </Button>
                        <Button variant="ghost" type="button">
                          <Link
                            aria-hidden
                            className="h-4 w-4 text-zinc-400"
                            strokeWidth={4}
                          />
                        </Button>
                        <Button variant="ghost" type="button">
                          <List
                            aria-hidden
                            className="h-4 w-4 text-zinc-400"
                            strokeWidth={4}
                          />
                        </Button>
                        <Button variant="ghost" type="button">
                          <ListOrdered
                            aria-hidden
                            className="h-4 w-4 text-zinc-400"
                            strokeWidth={4}
                          />
                        </Button>
                      </div>
                    </div>

                    <Textarea
                      id="bio"
                      defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development.
                "
                    />
                  </div>
                </div>

                <div className="grid gap-3 pt-5 md:grid-cols-form">
                  <label
                    htmlFor="projects"
                    className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                  >
                    Portfolio projects
                    <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                      Share a few snippets of your work.
                    </span>
                  </label>

                  <FileInput.Root>
                    <FileInput.Trigger />
                    <FileInput.FileList />

                    <FileInput.Control multiple />
                  </FileInput.Root>
                </div>

                <div className="flex items-center justify-end gap-2 pt-5">
                  <Button variant="outline" type="button">
                    Cancel
                  </Button>
                  <Button type="submit">Save</Button>
                </div>
              </form>
            </Tabs.Content>
          </ScrollArea.Viewport>

          <ScrollArea.Scrollbar
            className="flex h-0.5 -translate-y-4 touch-none select-none flex-col bg-zinc-100"
            orientation="horizontal"
          >
            <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </Tabs.Root>
    </>
  )
}
