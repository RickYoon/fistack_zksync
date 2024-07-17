import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  GreetingChange,
  TokenMint,
  Transfer
} from "../generated/YourContract/YourContract"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createGreetingChangeEvent(
  greetingSetter: Address,
  newGreeting: string,
  premium: boolean,
  value: BigInt
): GreetingChange {
  let greetingChangeEvent = changetype<GreetingChange>(newMockEvent())

  greetingChangeEvent.parameters = new Array()

  greetingChangeEvent.parameters.push(
    new ethereum.EventParam(
      "greetingSetter",
      ethereum.Value.fromAddress(greetingSetter)
    )
  )
  greetingChangeEvent.parameters.push(
    new ethereum.EventParam(
      "newGreeting",
      ethereum.Value.fromString(newGreeting)
    )
  )
  greetingChangeEvent.parameters.push(
    new ethereum.EventParam("premium", ethereum.Value.fromBoolean(premium))
  )
  greetingChangeEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return greetingChangeEvent
}

export function createTokenMintEvent(to: Address, amount: BigInt): TokenMint {
  let tokenMintEvent = changetype<TokenMint>(newMockEvent())

  tokenMintEvent.parameters = new Array()

  tokenMintEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  tokenMintEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return tokenMintEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}
