package io.jokester.tapir_todoapi

import java.io.File
import java.nio.file.{Files, Path}

import com.typesafe.scalalogging.LazyLogging

object Main extends App with LazyLogging {

  logger.debug("ARGV", args)

  args.headOption.getOrElse("NONE") match {
    case "runServer" => AkkaHttpServer.main()

    case "openapi" => {

      import sttp.tapir.openapi.OpenAPI
      import sttp.tapir.docs.openapi._
      import sttp.tapir.openapi.circe.yaml._

      val docs: OpenAPI = TodoApi.endpointList.toOpenAPI("Todos", "1.0")

      Files.writeString(Path.of("Todos.yaml"), docs.toYaml)
    }

    case _ => {
      throw new IllegalArgumentException(s"cannot recognize args: ${args.toList}")
    }

  }

}
