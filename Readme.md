# ```zod-message-bus```

Gives you a type-safe message passing using zod between two different environments

```ts
//protocol.ts
import { z } from "zod"
import { createMessageProtocol } from "./createMessageProtocol"

const protocol = createMessageProtocol({
    events: {
        LOGIN: {
            username: z.string(),
            password: z.string()
        },
        LOG_OUT: {}
    }
})

//iframe.ts
const sendToParent = messageBus.createHandler(window.parent.postMessage)
const handleParentEvent = messageBus.createHandler((event) => {
    console.log(event);
})

window.addEventListener("message", (event) => {
    handleParentEvent(event.data)
})
send({
    type: "LOG_OUT"
})
```

```ts
//parent.ts
const iframe = document.querySelector("my-iframe")
const sendToChild = protocol.createHandler(iframe!.contentWindow!.postMessage)
```

## Installation 

`npm install zod-message-bus`

`yarn add zod-message-bus`