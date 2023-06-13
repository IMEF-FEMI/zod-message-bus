import { z } from "zod"
import { createMessageProtocol } from "./createMessageProtocol"

const messageBus = createMessageProtocol({
    events: {
        LOGIN: {
            username: z.string(),
            password: z.string()
        },
        LOG_OUT: {}
    }
})

const send = messageBus.createHandler(window.postMessage)

send({
    type: "LOG_OUT"
})