'use client'
import React, { useState, useTransition } from 'react';
import { Alert, Button, Heading, Loader, TextField } from "@navikt/ds-react";
import { postEvent } from "../actions/event-actions";
import { JanitorAction } from "../types/JanitorDTO";

export default function LukkDialogmote() {
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
            await postEvent(referenceUUID, personident, description, JanitorAction.LUKK_DIALOGMOTE)
            setError(null)
            setIsSuccess(true)
          } catch (e) {
            setIsSuccess(false)
            setError('Lukking av dialogmøte feilet')
          }
        })
    }

    return (
        <div className="flex flex-col gap-4">
            <Heading size={'large'}>Lukk møte</Heading>
            {isSuccess && <Alert variant={'success'}>Funka!</Alert>}
            {error && <Alert variant={'error'}>{error}</Alert>}
            <TextField label="Uuid" onChange={e => setReferenceUUID(e.target.value)}/>
            <TextField label="Personident" onChange={e => setPersonident(e.target.value)}/>
            <TextField label="Årsak/bakgrunn" onChange={e => setDescription(e.target.value)}/>
            <Button onClick={send} loading={isPending}>
                Lukk møte
            </Button>
        </div>
    )
}
