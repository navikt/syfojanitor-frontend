'use client'
import React, { ReactNode, useState, useTransition } from 'react';
import { Alert, Button, Heading, TextField } from "@navikt/ds-react";
import { postEvent } from "../actions/event-actions";
import { JanitorAction } from "../types/JanitorDTO";

type Props = {
  heading: string
  buttonLabel: string
  action: JanitorAction
  errorMessage: string
  successMessage?: string
  info?: ReactNode
}

export default function JanitorActionForm({
  heading,
  buttonLabel,
  action,
  errorMessage,
  successMessage = 'Funka!',
  info,
}: Props) {
  const [referenceUUID, setReferenceUUID] = useState<string>('')
  const [personident, setPersonident] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  const send = () => {
    startTransition(async (): Promise<void> => {
      if (!referenceUUID || !personident || !description) {
        setIsSuccess(false)
        setError('Mangler input')
        return
      }

      try {
        await postEvent(referenceUUID, personident, description, action)
        setError(null)
        setIsSuccess(true)
      } catch (e) {
        setIsSuccess(false)
        setError(errorMessage)
      }
    })
  }

  return (
    <div className="flex flex-col gap-4">
      <Heading size={'large'}>{heading}</Heading>
      {info && <Alert variant={'info'}>{info}</Alert>}
      {isSuccess && <Alert variant={'success'}>{successMessage}</Alert>}
      {error && <Alert variant={'error'}>{error}</Alert>}
      <TextField label="Uuid" onChange={e => setReferenceUUID(e.target.value)} />
      <TextField label="Personident" onChange={e => setPersonident(e.target.value)} />
      <TextField label="Årsak/bakgrunn" onChange={e => setDescription(e.target.value)} />
      <Button onClick={send} loading={isPending}>
        {buttonLabel}
      </Button>
    </div>
  )
}
