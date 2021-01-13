package io.jokester.tapir_todoapi

import java.util.concurrent.atomic.{AtomicInteger, AtomicReference}

import com.typesafe.scalalogging.LazyLogging

object ServerLogic extends LazyLogging {
  import TodoApi._

  private val _nextId = new AtomicInteger(0)
  private val _todos  = new AtomicReference[Map[Int, Todo]](Map.empty)

  def list(): Either[ErrorInfo, Seq[Todo]] = Right(_todos.get.values.toSeq)

  def create(req: TodoCreateRequest): Either[ErrorInfo, Todo] = {
    val newItem =
      Todo(id = _nextId.incrementAndGet(), finished = false, title = req.title, desc = req.desc)
    _todos.getAndUpdate(todos => {
      todos.updated(newItem.id, newItem)
    })
    Right(newItem)
  }

  def show(todoId: Int): Either[ErrorInfo, Todo] =
    _todos.get().get(todoId).toRight(NotFound(s"Todo(id=$todoId) not found"))

  def update(todoId: Int, updated: Todo): Either[ErrorInfo, Todo] = {
    var ret: Either[ErrorInfo, Todo] = Left(NotFound(s"Todo(id=$todoId) not found"))

    _todos.getAndUpdate(todos => {
      todos
        .get(todoId)
        .map(existed => {
          val merged =
            existed.copy(title = updated.title, desc = updated.desc, finished = updated.finished)
          ret = Right(merged)
          todos.updated(todoId, merged)
        })
        .getOrElse(todos)
    })

    ret
  }

  def remove(todoId: Int): Either[ErrorInfo, Todo] = {
    var found: Either[ErrorInfo, Todo] = Left(NotFound(s"Todo(id=$todoId) not found"))

    _todos.getAndUpdate(todos => {
      todos
        .get(todoId)
        .map(existed => {
          found = Right(existed)
          todos.removed(todoId)
        })
        .getOrElse({
          todos
        })
    })

    found
  }

}
