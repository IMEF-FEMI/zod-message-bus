import { describe, expect, it, vitest } from "vitest";
import { createMessageProtocol } from "../src/createMessageProtocol";
import { z } from "zod";


const messageProtocol = createMessageProtocol({
    events: {
        LOG_IN: {
            username: z.string(),
            password: z.string(),
        },
        LOG_OUT: {},
    }
})
describe("createMessageProtocol", () => {
    it("should error if a handled message does NOT match an event", () => {
        const testSender = vitest.fn()
        const sender = messageProtocol.createHandler(testSender)
        // @ts-expect-error
        expect(() => sender({
            type: "LOG_IN",
        })).toThrow

        expect(testSender).not.toHaveBeenCalled()
    })
    it("should pass if a handled message matches an event", () => {
        const testSender = vitest.fn()
        const sender = messageProtocol.createHandler(testSender)

        sender({
            type: "LOG_IN",
            username: "user",
            password: "pass"
        })
        expect(testSender).toHaveBeenCalledWith({
            type: "LOG_IN",
            username: "user",
            password: "pass"
        })


    })

    it("should pass if a received message matches an event", () => {
        const testSender = vitest.fn()
        const sender = messageProtocol.createHandler(testSender)

        sender({
            type: "LOG_IN",
            username: "user",
            password: "pass"
        })

         
    })

    it("should pass if a received message does NOT match an event", () => {

    })
})