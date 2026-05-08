function markAsDone(todos) {
  const result = [];
  todos.forEach(function(todo) {
    result.push('done - ' + todo);
  });
  return result;
}

