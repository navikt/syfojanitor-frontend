'use server'

import { authorizationFetch } from '../auth/withAuth'
import { JanitorAction, JanitorRequestDTO, JanitorResponseDTO } from "../types/JanitorDTO";
import { eventsMock } from "../mocks/mockdata";

export async function postEvent(referenceUUID: string, personident: string, description: string, action: JanitorAction): Promise<void> {
    if (process.env.NODE_ENV !== 'production') return

    const janitorDTO: JanitorRequestDTO = {
        referenceUUID: referenceUUID,
        personident: personident,
        action: action,
        description: description,
    }

    const response: Response = await authorizationFetch(
         'janitor',
         'POST',
         {},
         JSON.stringify(janitorDTO)
    )

    if (!response.ok) {
        throw new Error(`Noe gikk galt: ${response.status} ${response.statusText}`)
    }
}

export async function getEvents(): Promise<JanitorResponseDTO[]> {
    if (process.env.NODE_ENV !== 'production') return eventsMock();

    const response: Response = await authorizationFetch(
      'janitor',
      'GET',
    )

    if (!response.ok) {
        throw new Error(`Noe gikk galt: ${response.status} ${response.statusText}`)
    } else {
        return await response.json()
    }
}
