'use server'

// import { logger } from '@navikt/next-logger'
import { authorizationFetch } from '../auth/withAuth'
import {JanitorAction, JanitorDTO} from "../types/JanitorDTO";

export async function lukkDialogmote(referenceUUID: string, personident: string, description: string): Promise<void> {
    if (process.env.NODE_ENV !== 'production') return

    const janitorDTO: JanitorDTO = {
        referenceUUID: referenceUUID,
        personident: personident,
        action: JanitorAction.LUKK_DIALOGMOTE,
        description: description,
    }

    console.log("DTO", janitorDTO)

    const response: Response = await authorizationFetch(
         'janitor',
         'POST',
         {},
         JSON.stringify(janitorDTO)
    )

    if (!response.ok) {
        throw new Error(`Noe gikk galt ved lukking av dialogmøte: ${response.status} ${response.statusText}`)
    } else {
        // logger.info(`Lukking av dialogmøte er fullført.`)
    }
}