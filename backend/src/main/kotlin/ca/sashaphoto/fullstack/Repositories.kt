package ca.sashaphoto.fullstack

import org.springframework.data.repository.CrudRepository


interface MessageRepository : CrudRepository<Message, Long> {
    fun save(message: Message): Message
}
