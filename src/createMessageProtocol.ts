import { z } from "zod"
import { EventsConfigToDiscriminatedUnion } from "./types"

export const createMessageProtocol = <
    T extends Record<string, z.ZodRawShape>,
    EventsConfigToDiscoUnion = EventsConfigToDiscriminatedUnion<T>
>(opts: { events: T }) => {
    return {
        createSender: (func: (event: EventsConfigToDiscoUnion) => void) => {
            return func
        },
        createReceiver: (func: (event: EventsConfigToDiscoUnion) => void) => {
            return func
        }
    }
}
