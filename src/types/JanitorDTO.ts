import { z } from 'zod'
export enum JanitorAction {
    LUKK_DIALOGMOTE = 'LUKK_DIALOGMOTE',
}

const janitorDTO = z.object({
    referenceUUID: z.string(),
    personident: z.string(),
    action: z.nativeEnum(JanitorAction),
    description: z.string(),
})

export type JanitorDTO = z.infer<typeof janitorDTO>

