package ca.sashaphoto.fullstack

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.graphql.data.method.annotation.Argument
import org.springframework.graphql.data.method.annotation.MutationMapping
import org.springframework.graphql.data.method.annotation.QueryMapping
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping
@CrossOrigin("*")
//@EnableMethodSecurity(prePostEnabled = true)
class MessagesController {

    @Autowired
    lateinit var service: MessageService

    //sendMessage(message: String): String
    @MutationMapping
    fun sendMessage(@Argument message: String): String {
        return service.create(Message(message)).text ?: "Error"
    }


    //listMessages: [Message]
    @QueryMapping
    fun listMessages(): List<Message> {
        return service.findAll()
    }
}
