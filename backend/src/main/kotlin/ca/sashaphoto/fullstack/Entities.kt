package ca.sashaphoto.fullstack

import jakarta.persistence.*
import java.sql.Timestamp


@Entity
class Message(
    var text: String? = null,
    var timestamp: Timestamp? = Timestamp(System.currentTimeMillis()),

    ) {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    open var id: Long? = null
}

