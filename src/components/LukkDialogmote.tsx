"use client";
import { JanitorAction } from "../types/JanitorDTO";
import JanitorActionForm from "./JanitorActionForm";

export default function LukkDialogmote() {
  return (
    <JanitorActionForm
      heading="Lukk møte"
      buttonLabel="Lukk møte"
      action={JanitorAction.LUKK_DIALOGMOTE}
      errorMessage="Lukking av dialogmøte feilet"
    />
  );
}
