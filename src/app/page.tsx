import React from "react";
import LukkDialogmote from "../components/LukkDialogmote";
import EventStatusListe from "../components/EventStatusListe";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-16">
      <LukkDialogmote />
      <EventStatusListe />
    </main>
  );
}
