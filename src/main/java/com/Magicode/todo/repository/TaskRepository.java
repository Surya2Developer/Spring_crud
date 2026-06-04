package com.Magicode.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Magicode.todo.model.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {

}
