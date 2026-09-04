"use client";
import { JanitorAction } from "../types/JanitorDTO";
import JanitorActionForm from "./JanitorActionForm";

export default function SlettBehandlerdialog() {
  return (
    <JanitorActionForm
      heading="Slett behandlerdialog"
      buttonLabel="Slett behandlerdialog"
      action={JanitorAction.SLETT_BEHANDLERDIALOG}
      errorMessage="Sletting av behandlerdialog feilet"
      info="Husk å informere veileder om at journalpost må markeres som feilregistrert i Gosys"
    />
  );
}
