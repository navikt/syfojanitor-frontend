import { z } from 'zod'
export enum JanitorAction {
    LUKK_DIALOGMOTE = 'LUKK_DIALOGMOTE',
}

export enum JanitorStatus {
    CREATED = 'CREATED',
    OK = 'OK',
    FAILED = 'FAILED',
}

const janitorRequestDTO = z.object({
    referenceUUID: z.string(),
    personident: z.string(),
    action: z.nativeEnum(JanitorAction),
    description: z.string(),
})

export type JanitorRequestDTO = z.infer<typeof janitorRequestDTO>

const janitorResponseDTO = z.object({
    uuid: z.string(),
    referenceUUID: z.string(),
    personident: z.string(),
    navident: z.string(),
    action: z.nativeEnum(JanitorAction),
    description: z.string(),
    status: z.nativeEnum(JanitorStatus),
    createdAt: z.string(),
    updatedAt: z.string(),
})

export type JanitorResponseDTO = z.infer<typeof janitorResponseDTO>