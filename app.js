$(document).ready(function () {

  // LIST (GET)
  $('#btn-list').on('click', function () {
    $.ajax({
      url: 'https://reqres.in/api/users',
      method: 'GET',
      data: { page: 1 },
      success: function (response) {
        $('#list-result').text(JSON.stringify(response, null, 2));
      },
      error: function (xhr) {
        $('#list-result').text('Error al listar: ' + xhr.status);
      }
    });
  });

  // CREATE (POST)
  $('#btn-create').on('click', function () {
    const name = $('#create-name').val();
    const job  = $('#create-job').val();

    $.ajax({
      url: 'https://reqres.in/api/users',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({ name, job }),
      success: function (response) {
        $('#create-result').text(JSON.stringify(response, null, 2));
      },
      error: function (xhr) {
        $('#create-result').text('Error al crear: ' + xhr.status);
      }
    });
  });

  // UPDATE (PUT)
  $('#btn-update').on('click', function () {
    const id   = $('#update-id').val();
    const name = $('#update-name').val();
    const job  = $('#update-job').val();

    $.ajax({
      url: 'https://reqres.in/api/users/' + id,
      method: 'PUT',
      contentType: 'application/json',
      data: JSON.stringify({ name, job }),
      success: function (response) {
        $('#update-result').text(JSON.stringify(response, null, 2));
      },
      error: function (xhr) {
        $('#update-result').text('Error al actualizar: ' + xhr.status);
      }
    });
  });

  // DELETE (DELETE)
  $('#btn-delete').on('click', function () {
    const id = $('#delete-id').val();

    $.ajax({
      url: 'https://reqres.in/api/users/' + id,
      method: 'DELETE',
      success: function () {
        $('#delete-result').text('Usuario eliminado (status 204 esperado)');
      },
      error: function (xhr) {
        $('#delete-result').text('Error al eliminar: ' + xhr.status);
      }
    });
  });

});
