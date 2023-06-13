import { z } from 'zod';

type Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type EventsConfigToDiscriminatedUnion<T extends Record<string, z.ZodRawShape>> = {
    [K in keyof T]: Prettify<{
        type: K;
    } & z.infer<z.ZodObject<T[K]>>>;
}[keyof T];

declare const createMessageProtocol: <T extends Record<string, z.ZodRawShape>, EventsConfigToDiscoUnion = EventsConfigToDiscriminatedUnion<T>>(opts: {
    events: T;
}) => {
    createSender: (func: (event: EventsConfigToDiscoUnion) => void) => (event: EventsConfigToDiscoUnion) => void;
    createListener: (func: (event: EventsConfigToDiscoUnion) => void) => (event: EventsConfigToDiscoUnion) => void;
};

export { EventsConfigToDiscriminatedUnion, Prettify, createMessageProtocol };
