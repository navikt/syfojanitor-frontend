"use client";
import { Alert, Button, Loader, Table, Tag } from "@navikt/ds-react";
import React, { useState, useTransition } from "react";
import { JanitorResponseDTO, JanitorStatus } from "../types/JanitorDTO";
import { getEvents } from "../actions/event-actions";

export default function EventStatusListe() {
  const [data, setData] = useState<JanitorResponseDTO[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(async () => {
      try {
        const response: JanitorResponseDTO[] = await getEvents();
        setData(response);
        setError(null);
      } catch (e) {
        setData(null);
        setError("Henting feilet.");
      }
    });
  };

  const getStatusTagVariant = (status: JanitorStatus) => {
    switch (status) {
      case JanitorStatus.CREATED:
        return "info";
      case JanitorStatus.OK:
        return "success";
      case JanitorStatus.FAILED:
        return "error";
    }
  };

  return (
    <>
      <Button variant="secondary" loading={isPending} onClick={handleClick}>
        Sjekk status
      </Button>
      {isPending && <Loader size="medium" />}
      {error && <Alert variant="error">{error}</Alert>}
      {data && (
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell scope="col">Type</Table.HeaderCell>
              <Table.HeaderCell scope="col">Status</Table.HeaderCell>
              <Table.HeaderCell scope="col">Referanse</Table.HeaderCell>
              <Table.HeaderCell scope="col">Opprettet</Table.HeaderCell>
              <Table.HeaderCell scope="col">Oppdatert</Table.HeaderCell>
              <Table.HeaderCell scope="col">Beskrivelse</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data.map((event, i) => (
              <Table.Row key={i}>
                <Table.DataCell>{event.action}</Table.DataCell>
                <Table.DataCell>
                  <Tag variant={getStatusTagVariant(event.status)}>
                    {event.status}
                  </Tag>
                </Table.DataCell>
                <Table.DataCell>{event.referenceUUID}</Table.DataCell>
                <Table.DataCell>{event.createdAt}</Table.DataCell>
                <Table.DataCell>{event.updatedAt}</Table.DataCell>
                <Table.DataCell>{event.description}</Table.DataCell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      )}
    </>
  );
}
