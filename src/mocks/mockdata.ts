import { JanitorAction, JanitorResponseDTO, JanitorStatus } from "../types/JanitorDTO";

export const eventsMock = (): JanitorResponseDTO[] =>  [
  {
    uuid: '075a38a1-e18b-400b-bc8a-a28cabd7dabb',
    referenceUUID: 'bcc33df8-5a19-4f67-a9be-ccea2bb24ec3',
    personident: '6107783512',
    navident: 'Z999999',
    action: JanitorAction.LUKK_DIALOGMOTE,
    description: 'Se Jira-sak',
    status: JanitorStatus.OK,
    createdAt: "2024-05-01T12:00:00.000+01:00",
    updatedAt: "2024-05-01T12:00:00.000+01:00",
  },
  {
    uuid: '1f6e939b-a97f-4f9f-b703-b4d2efce5f42',
    referenceUUID: 'd81bf42f-1db9-43d7-9c1b-cd1834567b18',
    personident: '12078940123',
    navident: 'Z999999',
    action: JanitorAction.SLETT_BEHANDLERDIALOG,
    description: 'Feilregistrert dialog med behandler',
    status: JanitorStatus.CREATED,
    createdAt: "2024-05-02T12:00:00.000+01:00",
    updatedAt: "2024-05-02T12:00:00.000+01:00",
  },
]
