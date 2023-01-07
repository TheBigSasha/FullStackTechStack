package ca.sashaphoto.fullstack

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class MessageService {
    @Autowired
    lateinit var repository: MessageRepository

    fun create(message: Message): Message {
        repository.save(message)
        return message
    }

    fun findAll(): List<Message> = repository.findAll().toList()
}
