import { z } from 'zod';

type Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type EventsConfigToDiscriminatedUnion<T extends Record<string, z.ZodRawShape>> = {
    [K in keyof T]: Prettify<{
        type: K;
    } & Omit<z.infer<z.ZodObject<T[K]>>, "type">>;
}[keyof T];

declare const createMessageProtocol: <T extends Record<string, z.ZodRawShape>, EventAsDiscoUnion extends {
    type: string;
} = EventsConfigToDiscriminatedUnion<T>>(opts: {
    events: T;
}) => {
    createHandler: (sender: (event: EventAsDiscoUnion) => void) => (event: EventAsDiscoUnion) => void;
};

export { EventsConfigToDiscriminatedUnion, Prettify, createMessageProtocol };
