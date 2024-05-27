import React from "react";
import LukkDialogmote from "../components/LukkDialogmote";
import EventStatusListe from "../components/EventStatusListe";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LukkDialogmote/>
      <EventStatusListe />
    </main>
  );
}
