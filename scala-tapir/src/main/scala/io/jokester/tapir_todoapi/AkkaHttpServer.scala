package io.jokester.tapir_todoapi

import scala.concurrent.{ExecutionContext, Future}
import scala.io.StdIn

object AkkaHttpServer {

  private val routes = {
    import akka.http.scaladsl.server.Directives._
    import akka.http.scaladsl.server.Route
    import sttp.tapir.server.akkahttp._

    Seq[Route](
      TodoApi.endpoints.listTodo.toRoute(_ => Future.successful(ServerLogic.list())),
      TodoApi.endpoints.createTodo.toRoute(req => Future.successful(ServerLogic.create(req))),
      TodoApi.endpoints.deleteTodo.toRoute(req =>
        Future.successful(ServerLogic.remove(req).map(_ => ()))
      ),
      TodoApi.endpoints.updateTodo.toRoute(req =>
        Future.successful(ServerLogic.update(req._1, req._2))
      )
    ).reduce(_ ~ _)
  }

  def main(): Unit = {
    import akka.actor.{ActorSystem, ClassicActorSystemProvider}
    import akka.http.scaladsl.Http
    import akka.http.scaladsl.model.HttpMethods
    import ch.megard.akka.http.cors.scaladsl.CorsDirectives._
    import ch.megard.akka.http.cors.scaladsl.settings.CorsSettings

    implicit val untypedSystem = ActorSystem("ClassicToTypedSystem")

    implicit val executionContext = ExecutionContext.global

    val bindingFuture = Http()(new ClassicActorSystemProvider {
      override def classicSystem: ActorSystem = untypedSystem
    }).newServerAt("localhost", 8080)
      .bind(
        cors(
          CorsSettings.default.withAllowedMethods(
            Seq(
              HttpMethods.GET,
              HttpMethods.OPTIONS,
              HttpMethods.POST,
              HttpMethods.DELETE,
              HttpMethods.PUT,
              HttpMethods.PATCH
            )
          )
        ) {
          routes
        }
      )

    println(s"Server online at http://localhost:8080/\nPress RETURN to stop...")
    StdIn.readLine() // let it run until user presses return
    bindingFuture
      .flatMap(_.unbind())                        // trigger unbinding from the port
      .onComplete(_ => untypedSystem.terminate()) // and shutdown when done

  }

}
