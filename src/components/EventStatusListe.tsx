'use client'
import { Alert, Button, Loader } from "@navikt/ds-react";
import React, { useState, useTransition } from "react";
import { JanitorResponseDTO } from "../types/JanitorDTO";
import { getEvents } from "../actions/event-actions";

export default function EventStatusListe() {
  const [data, setData] = useState<JanitorResponseDTO[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  const handleClick = () => {
    startTransition(async () => {
      try {
        const response: JanitorResponseDTO[] = await getEvents()
        setData(response)
        setError(null)
      } catch (e) {
        setData(null)
        setError('Henting feilet.')
      }
    })}

  console.log(data, error, isPending)

  return (
    <>
      <Button loading={isPending} onClick={handleClick}>Hent status</Button>
      {isPending && <Loader size="medium" />}
      {error && <Alert variant="error">{error}</Alert>}
    </>
  )
}