package io.jokester.tapir_todoapi

object TodoApi {
  import sttp.tapir._
  import sttp.tapir.json.circe._
  import io.circe.generic.auto._
  import sttp.model.StatusCode

  case class Todo(id: Int, title: String, desc: String, finished: Boolean)
  case class TodoCreateRequest(title: String, desc: String)

  sealed trait ErrorInfo
  case class NotFound(what: String)          extends ErrorInfo
  case class Unauthorized(realm: String)     extends ErrorInfo
  case class Unknown(code: Int, msg: String) extends ErrorInfo
  case object NoContent                      extends ErrorInfo

  object endpoints {
    private val basePath = endpoint
      .in("todos")
      .errorOut(
        oneOf[ErrorInfo](
          statusMapping(StatusCode.NotFound, jsonBody[NotFound].description("not found"))
        )
      )

    val listTodo: Endpoint[Unit, ErrorInfo, Seq[Todo], Any] = basePath.get
      .out(jsonBody[Seq[Todo]])

    val showTodo: Endpoint[Int, ErrorInfo, Todo, Any] =
      basePath.post.in(path[Int]).out(jsonBody[Todo])

    val createTodo: Endpoint[TodoCreateRequest, ErrorInfo, Todo, Any] = basePath.post
      .in(jsonBody[TodoCreateRequest])
      .out(jsonBody[Todo])

    val updateTodo: Endpoint[(Int, Todo), ErrorInfo, Todo, Any] =
      basePath.patch
        .in("todo" / path[Int])
        .in(jsonBody[Todo])
        .out(jsonBody[Todo])

    val deleteTodo: Endpoint[Int, ErrorInfo, Unit, Any] =
      basePath.delete.in(path[Int])
  }

  val endpointList = Seq(
    endpoints.listTodo,
    endpoints.showTodo,
    endpoints.createTodo,
    endpoints.updateTodo,
    endpoints.deleteTodo
  )

}
