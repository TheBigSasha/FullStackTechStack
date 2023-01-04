package ca.sashaphoto.fullstack

import org.springframework.graphql.data.method.annotation.Argument
import org.springframework.graphql.data.method.annotation.MutationMapping
import org.springframework.graphql.data.method.annotation.QueryMapping
import org.springframework.security.core.annotation.AuthenticationPrincipal
import org.springframework.security.oauth2.jwt.Jwt
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping
@CrossOrigin("*")
//@EnableMethodSecurity(prePostEnabled = true)
class SampleController {
    @QueryMapping
    fun oAuthGreeting(@AuthenticationPrincipal loggedIn: Jwt): String {
        return "Hello, ${loggedIn.claims?.get("name") as String}!"
    }

    @QueryMapping
    fun greeting(): String {
        return "Hello, World!"
    }

    @MutationMapping
    fun echo(@Argument message: String): String {
        return message
    }

    @MutationMapping
    fun oAuthEcho(@AuthenticationPrincipal loggedIn: Jwt, @Argument message: String): String {
        return "Hello, ${loggedIn.claims?.get("name") as String}! You said: $message"
    }
}
