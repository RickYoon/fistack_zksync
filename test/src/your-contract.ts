import {
  Approval as ApprovalEvent,
  GreetingChange as GreetingChangeEvent,
  TokenMint as TokenMintEvent,
  Transfer as TransferEvent
} from "../generated/YourContract/YourContract"
import {
  Approval,
  GreetingChange,
  TokenMint,
  Transfer
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGreetingChange(event: GreetingChangeEvent): void {
  let entity = new GreetingChange(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.greetingSetter = event.params.greetingSetter
  entity.newGreeting = event.params.newGreeting
  entity.premium = event.params.premium
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenMint(event: TokenMintEvent): void {
  let entity = new TokenMint(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.to = event.params.to
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
