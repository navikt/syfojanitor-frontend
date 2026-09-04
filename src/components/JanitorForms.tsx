"use client";
import { Tabs } from "@navikt/ds-react";
import LukkDialogmote from "./LukkDialogmote";
import SlettBehandlerdialog from "./SlettBehandlerdialog";

export default function JanitorForms() {
  return (
    <Tabs defaultValue="lukk-dialogmote" className="w-full max-w-md">
      <Tabs.List>
        <Tabs.Tab value="lukk-dialogmote" label="Lukk dialogmøte" />
        <Tabs.Tab value="slett-behandlerdialog" label="Slett behandlerdialog" />
      </Tabs.List>
      <Tabs.Panel value="lukk-dialogmote" className="pt-6">
        <LukkDialogmote />
      </Tabs.Panel>
      <Tabs.Panel value="slett-behandlerdialog" className="pt-6">
        <SlettBehandlerdialog />
      </Tabs.Panel>
    </Tabs>
  );
}
