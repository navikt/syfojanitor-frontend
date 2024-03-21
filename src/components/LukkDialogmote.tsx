'use client'
import React, {useState} from 'react';
import {Alert, Button, Heading, TextField} from "@navikt/ds-react";
import {lukkDialogmote} from "../actions/dialogmote-actions";

export default function LukkDialogmote() {
    const [referenceUUID, setReferenceUUID] = useState<string>('')
    const [personident, setPersonident] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [isSent, setIsSent] = useState<boolean>(false)

    const send = async () => {
        console.log(referenceUUID, personident, description)
        await lukkDialogmote(referenceUUID, personident, description)
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