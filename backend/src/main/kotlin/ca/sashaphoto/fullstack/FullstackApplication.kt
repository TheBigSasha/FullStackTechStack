package ca.sashaphoto.fullstack

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.UrlBasedCorsConfigurationSource
import org.springframework.web.filter.CorsFilter

@SpringBootApplication(exclude = [SecurityAutoConfiguration::class])
class FullstackApplication

fun main(args: Array<String>) {
    runApplication<FullstackApplication>(*args)
}

@Configuration
class LocalCorsConfiguration {
    @Bean
    fun corsFilter(): CorsFilter {
        println("CORS IS CONFIGURING FOR ORIGIN *")
        val source = UrlBasedCorsConfigurationSource()
        val config = CorsConfiguration()
        config.allowCredentials = true
        config.addAllowedOrigin("http://localhost:3000")
        config.addAllowedOrigin("https://onfactorial.com")
        config.addAllowedHeader("*")
        config.addAllowedMethod("*")
        source.registerCorsConfiguration("/graphql/**", config)
        return CorsFilter(source)
    }
}

