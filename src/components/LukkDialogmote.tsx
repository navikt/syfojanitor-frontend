'use client'
import React, { useState } from 'react';
import { Alert, Button, Heading, TextField } from "@navikt/ds-react";
import { postEvent } from "../actions/event-actions";
import { JanitorAction } from "../types/JanitorDTO";

export default function LukkDialogmote() {
    const [referenceUUID, setReferenceUUID] = useState<string>('')
    const [personident, setPersonident] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [isSent, setIsSent] = useState<boolean>(false)

    const send = async () => {
        console.log(referenceUUID, personident, description)
        await postEvent(referenceUUID, personident, description, JanitorAction.LUKK_DIALOGMOTE)
        setIsSent(true)
    }

    return (
        <div className="flex flex-col gap-4">
            <Heading size={'large'}>Lukk møte</Heading>
            {isSent && <Alert variant={'success'}>Funka!</Alert>}
            <TextField label="Uuid" onChange={e => setReferenceUUID(e.target.value)}/>
            <TextField label="Personident" onChange={e => setPersonident(e.target.value)}/>
            <TextField label="Årsak/bakgrunn" onChange={e => setDescription(e.target.value)}/>
            <Button
                onClick={send}
            >
                Lukk møte
            </Button>
        </div>
    )
}